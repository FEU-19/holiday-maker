const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = async function (req, _res, next) {
  const accessToken = req.headers["x-auth-token"];

  const decodedJWT = jwt.verify(accessToken, process.env.JWT_SECRET);
  if (!decodedJWT) next(new Error("unauthenticated"));

  const { id } = decodedJWT;
  const user = await User.findById(id, "-password -__v");

  req.user = user;
  next();
};

module.exports = auth;
