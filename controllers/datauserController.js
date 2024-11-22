const User = require("../models/User");

exports.indexDataUser = async (req, res) => {
  try {
    const user = await User.find();
    res.render("dashboardadmin/datauser/viewdatauser", {
      title: "Halaman Data User",
      layout: "dashboardadmin/layouts/main",
      user,
    });
  } catch (error) {
    res.status(404).send("Error! Failed to fetch the data!", error);
    console.error("Error : ", error);
  }
};
