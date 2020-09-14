const bcrypt = require("bcrypt");
const User = require("../models/User");
const getCookie = require("../middleware/CookieFinder");

exports.createLogout = async (req, res) =>{
  const { userId } = req.body;

  res.clearCookie("holidayMakerCookie", `Bearer${userId}`).end();
}

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

    res.status(200);
    res.cookie("holidayMakerCookie", `Bearer${user.id}`, {
      expires: new Date(Date.now() + 8 * 3600000),
    });
    return res.send();
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
