const Post = require("../models/Post");

// get all data post api
exports.getPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: "Error! Failed to fetch the data!",
      error,
    });
    console.log("Error: ", error);
  }
};

// show post by id
exports.getPostByid = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.status(200).json({
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: "Error! Failed to fetch the data!",
      error,
    });
    console.log("Error: ", error);
  }
};
