// LIBRARIES
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, rqeuired: true },
  prompt: { type: String, rqeuired: true },
  photo: { type: String, rqeuired: true },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
