const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TopicSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  parent: {
    type: String,
    required: true
  }
});

module.exports = Topic = mongoose.model("Topic", TopicSchema);
