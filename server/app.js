// LIBRARIES
const xss = require("xss-clean");
const helmet = require("helmet");
const cors = require("cors");

// EXPRESS
const express = require("express");
const app = express();

app.use(express.json());
app.use(xss());
app.use(cors());
app.use(helmet());

// ROUTES
const routes = require("./routes");
app.use(routes);

module.exports = app;
