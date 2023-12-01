// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLERS
const postController = require("../controllers/postController");

router.get("/", (req, res) => {
  return res.status(200).send({ message: "Post Router" });
});

module.exports = router;
