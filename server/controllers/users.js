const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.read = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createLogout = async (req, res) => {};

exports.createLogin = async (req, res) => {
  const { email, password } = req.body.user;
  if (!email || !password) {
    return res.status(400).json({
      error: [{ msg: "Invalid Credentials" }],
    });
  }

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        error: [{ msg: "Invalid Credentials" }],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        error: [{ msg: "Invalid Credentials" }],
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
      },
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
};

exports.create = async (req, res) => {
  const {
    email,
    firstName,
    surname,
    street,
    zipCode,
    city,
    country,
    phoneNumber,
    socialSecurityNumber,
    password,
  } = req.body;

  if (
    !email ||
    !password ||
    !surname ||
    !street ||
    !zipCode ||
    !city ||
    !country ||
    !phoneNumber ||
    !socialSecurityNumber ||
    !firstName
  ) {
    return res.status(400).json({
      error: [{ msg: "Please fill all of the existing fields" }],
    });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: [{ msg: "User already exists" }],
      });
    }

    user = new User({
      email,
      firstName,
      surname,
      street,
      zipCode,
      city,
      country,
      phoneNumber,
      socialSecurityNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return res.status(201).json({
      msg: "Account was created",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Server error",
    });
  }
};

exports.createToken = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.read = async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
  });
};
