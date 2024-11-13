const User = require("../models/User");

// view halaman form login
exports.login = (req, res) => {
  res.render("login", {
    title: "Animeku | Login",
    layout: "login",
  });
};

// cek login
exports.checkLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
  } catch (error) {
    res.status(404).send("Error! Email atau passowrd salah!", error);
    console.error("Error: ", error);
  }
};
