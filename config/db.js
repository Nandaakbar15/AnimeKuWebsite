const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/animeku");

// membuat model
// const Anime = mongoose.model("Anime", {
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   first_aired: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
// });

// const anime1 = new Anime({
//   title: "Naruto Shippuden",
//   author: "Masashi Kishimoto",
//   first_aired: "2007",
//   status: "Completed",
//   image: "narutoshippuden.jpg",
// });

// anime1.save().then((result) => {
//   console.log(result);
// });

// const Post = mongoose.model("Post", {
//   title: {
//     type: String,
//     required: true,
//   },
//   penulis: {
//     type: String,
//     required: true,
//   },
//   tgl_post: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
// });

// const post1 = new Post({
//   title: "Post Pertama",
//   penulis: "Alvinda Akbar",
//   tgl_post: "2024-01-01",
//   image: "post1.jpg",
//   body: "lorem ipsum",
// });

// post1.save().then((result) => {
//   console.log(result);
// });
