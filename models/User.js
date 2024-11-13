const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: String,
  },
  role: {
    type: String,
    default: "user",
  },
});

module.exports = User;
