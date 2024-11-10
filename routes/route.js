const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

// admin controller
const { index } = require("../controllers/adminController");

// anime controller
const {
  getAnime,
  create,
  store,
  edit,
  update,
  destroy,
} = require("../controllers/animeController");

// post controller
const {
  indexPost,
  createPost,
  storePost,
} = require("../controllers/postController");

// default route
router.get("/", (req, res) => {
  res.redirect("/admin/dashboard");
});

// admin route
router.get("/admin/dashboard", index);

// data anime
router.get("/admin/dataanime", getAnime);

// data post
router.get("/admin/datapost", indexPost);

// view halaman form tambah data post
router.get("/admin/datapost/viewtambahPost", createPost);

// logic tambah data post
router.post("/admin/datapost/tambahPost", upload.single("image"), storePost);

// view halaman form tambah anime
router.get("/admin/dataanime/viewtambah_anime", create);

// logic tambah anime
router.post("/admin/dataanime/tambahAnime", upload.single("image"), store);

// view form ubah data anime
router.get("/admin/dataanime/edit/:title", edit);

// logic form ubah data anime
router.put("/admin/dataanime/edit/:title", upload.single("image"), update);

// hapus anime
router.delete("/admin/dataanime/delete/:id", destroy);

module.exports = router;
