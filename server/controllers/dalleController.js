// LIBRARIES
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

// EXPRESS
const express = require("express");
const app = express();

// MODELS
const postModel = require("../models/postModel");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const getDalle = async (req, res) => {
  return res.status(200).send({ message: "Get Route for DALL-E" });
};

const createDalle = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = result.data[0].b64_json;

    return res.status(200).send({ photo: image });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getDalle,
  createDalle,
};
