const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
  let {
    email,
    password
  } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: [{
        msg: 'Please fill all of the existing fields'
      }]
    })
  }

  try {
    let user = await User.findOne({
      email
    });

    if (user) {
      return res.status(400).json({
        error: [{
          msg: 'User already exists',
        }]
      })
    };

    user = new User({
      email,
      password,
    })

    const salt = await bcrypt.genSalt('10');
    user.password = await bcrypt.hash(password)

    await user.save();
    res.status(201).json({
      msg: 'success registration'
    });



  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.read = (req, res) => {
  res.send("OK");
};