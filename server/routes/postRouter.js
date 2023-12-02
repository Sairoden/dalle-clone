// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getAllPosts, createPost } = require("../controllers/postController");

router.route("/").get(getAllPosts).post(createPost);

module.exports = router;
