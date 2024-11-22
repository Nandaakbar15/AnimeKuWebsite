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
    });

    if (!user) {
      res.status(404).send("Error! Email atau passoword salah!");
    }

    // cek role user
    if (user.role === "admin") {
      res.redirect("/admin/dashboard");
    } else {
      res.redirect("/user/dashboarduser");
    }
  } catch (error) {
    res.status(404).send("Error! Email atau passowrd salah!", error);
    console.error("Error: ", error);
  }
};
