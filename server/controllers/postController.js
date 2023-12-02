// LIBRARIES
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

dotenv.config();

// MODELS
const postModel = require("../models/postModel");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    return res.status(200).send({ success: true, data: posts });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ success: false, message: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({ name, prompt, photo: photoUrl.url });

    return res.status(201).send({ success: true, data: newPost });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  getAllPosts,
  createPost,
};
