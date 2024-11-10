const Post = require("../models/Post");

exports.indexPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.render("dashboardadmin/datapost/viewpost", {
      title: "Halaman Data Post",
      layout: "dashboardadmin/layouts/main",
      post,
    });
  } catch (error) {
    res.status(400).send("<h1>Failed to fetch the data!</h1>", error);
    console.error("Error: ", error);
  }
};

// halaman form tambah post
exports.createPost = (req, res) => {
  res.render("dashboardadmin/datapost/tambahPost", {
    title: "Halaman Form tambah Post",
    layout: "dashboardadmin/layouts/main",
  });
};

exports.detailPost = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);

    if (!post) {
      res.status(404).send(`Post with id ${req.params.id} is not found!`);
    }

    res.render("dashboardadmin/datapost/detailPost", {
      title: "Detail Post",
      layout: "dashboardadmin/layouts/main",
      post,
    });
  } catch (error) {
    res.status(400).send("<h1>Failed to fetch the data!</h1>", error);
    console.error("Error: ", error);
  }
};

// logic tambah post
exports.storePost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      penulis: req.body.penulis,
      tgl_post: new Date(),
      body: req.body.body,
      image: req.file ? req.file.filename : "",
    });

    await post.save();
    res.redirect("/admin/datapost");
    req.flash("msg", "Data Post berhasil ditambahkan!");
  } catch (error) {
    res.status(404).send("<h1>Error! Failed to add the data!!!</h1>");
    console.error("Error: ", error);
  }
};

exports.edit = async (req, res) => {
  try {
    const post = Post.findOne({ title: req.params.title });

    if (!post) {
      res.status(404).send(`Post with title ${req.params.title} is not found!`);
    }

    res.render("dashboardadmin/datapost/ubahPost", {
      title: "Halaman Form Ubah Post",
      layout: "dashboardadmin/layouts/main",
      post,
    });
  } catch (error) {
    res.status(400).send("<h1>Failed to fetch the data!</h1>", error);
    console.error("Error: ", error);
  }
};
