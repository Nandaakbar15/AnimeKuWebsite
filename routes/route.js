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
  editPost,
  deletePost
} = require("../controllers/postController");

// data user controller
const { indexDataUser } = require("../controllers/datauserController");

// login controller
const { login, checkLogin, logout } = require("../controllers/loginController");

// register controller
const { register, addUser } = require("../controllers/registerController");

// user non admin controller
const {indexUser, indexAnime, detailAnime, listPost} = require("../controllers/userController");


const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

// default route
router.get("/", (req, res) => {
  res.redirect("/login");
});

// login route
router.get("/login", login);

// cek login route
router.post("/login", checkLogin);

// logout route
router.get("/logout", logout);

// register route
router.get("/register", register);

// register logic
router.post("/register", addUser);

// admin route
router.get("/admin/dashboard", isAuthenticated, index);

// data anime
router.get("/admin/dataanime", getAnime);

// data post
router.get("/admin/datapost", indexPost);

// view halaman form tambah data post
router.get("/admin/datapost/viewtambahPost", createPost);

// logic tambah data post
router.post("/admin/datapost/tambahPost", upload.single("image"), storePost);

// view update post
router.get("/admin/datapost/edit/:title", editPost);

// logic update post


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

// route data user
router.get("/admin/datauser", indexDataUser);

// route untuk user biasa (bukan admin)
router.get("/user/dashboarduser", indexUser);

// route list anime
router.get("/user/anime", indexAnime);

// route detaii anime
router.get("/user/anime/detailanime/:title", detailAnime);

// route list posts / berita
router.get("/user/post", listPost);

// route detail dari post



module.exports = router;
