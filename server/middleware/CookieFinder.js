const User = require("../models/User");

const getCookie = function (req, res) {
  const { cookie } = req.body;

  if (!cookie) {
    res.send("user not logged in");
  }

  const userId = cookie.split("=Bearer")[1];

  const user = User.findOne({
    userId,
  });

  if (!user) {
    res.send("User does not exist");
  }

  console.log("its okej");
};

module.exports = getCookie;
