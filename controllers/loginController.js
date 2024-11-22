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

    // Store user in the session
    req.session.user = user;

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

exports.logout = (req, res) => {
  try {
    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Error logging out.");
      }

      // Redirect to the login page after logging out
      res.redirect("/login");
    });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Error logging out.");
  }
};

