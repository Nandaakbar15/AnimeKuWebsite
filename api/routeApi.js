const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

// anime api controller
const { getAnime, getAnimeByid } = require("./animeApiController");

// post api controller
const { getPost, getPostByid } = require("./postApiController");

// anime api route
router.get("/api/admin/anime", getAnime);

// get anime by id route
router.get("/api/admin/anime/:id", getAnimeByid);

// post api route
router.get("/api/admin/post", getPost);

// get post by id route
router.get("/api/admin/datapost/:id", getPostByid);

module.exports = router;
