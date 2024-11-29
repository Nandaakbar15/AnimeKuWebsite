const Anime = require("../models/Anime");
const Post = require("../models/Post");

exports.indexUser = (req, res) => {
  res.render("dashboarduser/layouts/home", {
    title: "AnimeKu",
    layout: "dashboarduser/layouts/main",
  });
};

exports.indexAnime = async(req, res) => {
  try {
    const anime = await Anime.find();
    res.render('dashboarduser/anime/indexanime', {
      layout: "dashboarduser/layouts/main",
      title: "List Anime",
      anime
    });
  } catch(error) {
    res.status(404).send("Failed to fetch the data!");
    console.error("Error! Failed to fetch the data!", error);
  }
}

exports.detailAnime = async(req, res) => {
  try {
    const anime = await Anime.findOne({title: req.params.title});
    res.render("dashboarduser/anime/detailanime", {
      layout: "dashboarduser/layouts/main",
      title: "Detail Anime",
      anime
    });
  } catch(error) {
    res.status(404).send("Failed to fetch the data!");
    console.error("Error : ", error);
  }
}

exports.listPost = async(req, res) => {
  try {
    const post = await Post.find();
    res.render("dashboarduser/posts/indexpost", {
      layout: "dashboarduser/layouts/main",
      title: "Berita Anime",
      post
    });
  } catch(error) {
    res.status(404).send("<h1>Failed to fetch the data!</h1>");
    console.error("Error : ", error);
  }
}

exports.infoPost = async(req, res) => {
  try {
    const post = Post.findOne({title: req.params.title});
    res.render("dashboarduser/posts/detailpost", {
      layout: "dashboard/layouts/mai",
      title: "Post Detail",
      post
    });
  } catch(error) {
    res.status(404).send("<h1>Failed to fetch the data!</h1>");
    console.error("Error : ", error);
  }
}


