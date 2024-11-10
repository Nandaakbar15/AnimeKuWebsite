const Anime = require("../models/Anime");

// get all data anime api
exports.getAnime = async (req, res) => {
  try {
    const anime = await Anime.find();
    res.status(200).json({
      statusCode: 200,
      data: anime,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: "Error! Failed to fetch the data!",
    });
    console.error("Error: ", error);
  }
};

// show anime by id
exports.getAnimeByid = async (req, res) => {
  try {
    const anime = await Anime.findOne({ _id: req.params.id });
    res.status(200).json({
      statusCode: 200,
      data: anime,
    });
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: "Error! Failed to fetch the data!",
    });
    console.error("Error: ", error);
  }
};
