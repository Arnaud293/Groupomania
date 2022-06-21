const { default: mongoose } = require("mongoose");
const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error to get data" + err);
    }
  });
};

module.exports.createPost = async (req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });
  try {
    const post = await newPost.save();
    return res.status(200).json(post);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports.updatePost = (req, res) => {};

module.exports.deletePost = (req, res) => {};
