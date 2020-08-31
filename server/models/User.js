const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  zipCode: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  }
});

module.export = User = mongoose.model('user', UserSchema);