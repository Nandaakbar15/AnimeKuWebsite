const Anime = require("../models/Anime");
// const express = require("express");
const fs = require("fs");
const path = require("path");

// get anime from database
exports.getAnime = async (req, res) => {
  try {
    const anime = await Anime.find();
    res.render("dashboardadmin/dataanime/viewdataanime", {
      title: "Halaman Data Anime",
      layout: "dashboardadmin/layouts/main",
      anime,
      msg: req.flash("msg"),
    });
  } catch (error) {
    res.status(400).send("<h1>Failed to fetch the data!</h1>", error);
  }
};

// function form tambah data anime
exports.create = (req, res) => {
  res.render("dashboardadmin/dataanime/tambahAnime", {
    title: "Halaman Form Tambah Anime",
    layout: "dashboardadmin/layouts/main",
  });
};

// function logic tambah data anime
exports.store = async (req, res) => {
  try {
    const anime = new Anime({
      title: req.body.title,
      genre: req.body.genre,
      author: req.body.author,
      first_aired: req.body.first_aired,
      status: req.body.status,
      image: req.file ? req.file.filename : "",
    });

    await anime.save();
    res.redirect("/admin/dataanime");
    req.flash("msg", "Data Anime berhasil ditambahkan!");
  } catch (error) {
    console.error("Error: ", error);
  }
};

exports.edit = async (req, res) => {
  try {
    const anime = await Anime.findOne({ title: req.params.title });

    if (!anime) {
      res.send(`The Anime with title ${req.params.title} is not found!`);
    }

    res.render("dashboardadmin/dataanime/ubahAnime", {
      title: "Halaman Form Ubah Anime",
      layout: "dashboardadmin/layouts/main",
      anime,
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.update = async (req, res) => {
  try {
    // Find the existing manga data
    const anime = await Anime.findOne({ title: req.params.title });
    if (!anime) {
      return res
        .status(404)
        .send(`Anime with the title ${title} is not found!!!`);
    }

    // Determine the new image filename
    const newImage = req.file ? req.file.filename : null;
    const oldImage = anime.image;

    // If a new image is uploaded, delete the old image from the images folder
    if (newImage && oldImage) {
      const oldImagePath = path.join(__dirname, "../public/images", oldImage);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath); // Delete the old image
      }
    }

    // Update anime data
    anime.title = req.body.title;
    anime.genre = req.body.genre;
    anime.author = req.body.author;
    anime.first_aired = req.body.first_aired;
    anime.status = req.body.status;
    anime.image = newImage || oldImage;

    await anime.save();
    res.redirect("/admin/dataanime");
    req.flash("msg", "Data Anime berhasil diubah!");
  } catch (error) {
    console.error("Error: ", error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const anime = await Anime.deleteOne({ _id: req.params.id });

    anime.save();
    res.redirect("/admin/dataanime");
    req.flash("msg", "Data Anime berhasil di hapus!");
  } catch (error) {
    console.error("Error: ", error);
  }
};
