const User = require("../models/User");
const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
  const accessToken = req.headers["x-auth-token"];
  if (!accessToken) {
    console.log("no access token in header");
    return res.send({ error: "no access token in header" });
  }

  const decodedJWT = jwt.verify(accessToken, process.env.JWT_SECRET);
  if (!decodedJWT) return next(new Error("unauthenticated"));

  const { id } = decodedJWT;
  const user = await User.findById(id, "-password -__v");

  req.user = user;
  return next();
};

module.exports = auth;
