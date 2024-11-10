const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
  title: {
    type: String,
    required: true,
  },
  penulis: {
    type: String,
    required: true,
  },
  tgl_post: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = Post;
