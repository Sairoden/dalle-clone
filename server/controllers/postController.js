// LIBRARIES
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

dotenv.config();

// EXPRESS
const express = require("express");
const app = express();

// MODELS
const postModel = require("../models/postModel");




