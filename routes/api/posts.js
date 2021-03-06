const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Post Mongo Model
const Post = require("../../server/mongoModels/Post");

// Validation
const validatePostInput = require("../../server/validate/post");

//get all posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

//create a post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      userName: req.body.userName,
      title: req.body.title,
      body: req.body.body
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
