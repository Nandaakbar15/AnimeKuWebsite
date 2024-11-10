const flash = require("connect-flash");
const Anime = require("../models/Anime");
const mongoose = require("mongoose");

exports.index = (req, res) => {
  res.render("dashboardadmin/layouts/home", {
    title: "AnimeKu | Admin",
    layout: "dashboardadmin/layouts/main",
  });
};
