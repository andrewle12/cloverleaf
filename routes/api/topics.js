const express = require("express");
const router = express.Router();

// Topics Mongo Model
// const db = require("../../server/mongoModels/Topic");

const Topics = require("../../server/mongoModels/Topics");

// get all topics for displaying
router.get("/", (req, res) => {
  Topics.find()
    .then(topics => res.json(topics))
    .catch(err => res.status(404).json({ notopicsfound: "No topics found" }));
});

module.exports = router;
