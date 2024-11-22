const User = require("../models/User");
const bcryptjs = require("bcryptjs");

// view halaman form register
exports.register = (req, res) => {
  res.render("register", {
    title: "AnimeKu | Register",
    layout: "register",
  });
};

// proses register / buat akun baru
exports.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    res.redirect("/login");
    req.flash("msg", "Akun berhasil dibuat! Silahkan login!");
  } catch (error) {
    console.error("Error: ", error);
  }
};
