// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLERS
const { getDalle, createDalle } = require("../controllers/dalleController");

router.route("/").get(getDalle).post(createDalle);

module.exports = router;
