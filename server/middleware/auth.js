const User = require("../models/User");

const authorizeUser = async function (req, res, next) {
  const { cookie } = req.body;

  if (!cookie) {
    res.send("user not logged in");
  }

  const userId = cookie.split("=Bearer")[1];

  const user = await User.findById(userId);

  if (!user) {
    res.send("User does not exist");
  }

  req.user = user;

  next();
};

module.exports = authorizeUser;
