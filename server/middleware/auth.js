const User = require("../models/User");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  let decoded;
  if (!req.cookies.uid) {
    decoded = null;
  } else {
    decoded = jwt.verify(req.cookies.uid, process.env.JWT_SECRET);
  }

  if (!decoded) {
    return res.status(403).send("unauthorize");
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(403).send("unauthorize");
  }

  req.user = user;
  
  return next();
};

module.exports = auth;
