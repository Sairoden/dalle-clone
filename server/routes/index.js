// LIBRARIES
const express = require("express");
const app = express.Router();

// ROUTES
const dalleRouter = require("./dalleRouter");
const postRouter = require("./postRouter");

app.use("/api/v1/dalle", dalleRouter);
app.use("/api/v1/post", postRouter);

module.exports = app;
