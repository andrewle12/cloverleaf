const express = require("express");
const router = express.Router();
const passport = require("passport");

//Post Mongo Model
const Yard = require("../../server/mongoModels/Yard");

// Validation
// const validatePostInput = require("../../server/validate/post");

//get all posts
router.get("/", (req, res) => {
  Yard.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

//create a post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
   //  const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
   //  if (!isValid) {
   //    // If any errors, send 400 with errors object
   //    return res.status(400).json(errors);
   //  }

    const newYard = new Yard({
      userName: req.body.userName,
      image: req.body.image,
      title: req.body.title,
      body: req.body.body
    });

    newYard.save().then(yard => res.json(yard));
  }
);

module.exports = router;