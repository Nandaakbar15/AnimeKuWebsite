const Anime = require("../models/Anime");
const Post = require("../models/Post");

exports.indexUser = (req, res) => {
  res.render("dashboarduser/layouts/home", {
    title: "AnimeKu",
    layout: "dashboarduser/layouts/main",
  });
};
