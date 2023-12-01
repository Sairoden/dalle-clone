// LIBRARIES
const express = require("express");
const app = express.Router();

// ROUTES


app.use("/api/v1/dalle", (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

module.exports = app;
