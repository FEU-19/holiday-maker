const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  first_name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  zip_code: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  phone_number: {
    type: String,
    require: true,
  },
  social_security_number: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.export = User = mongoose.model('user', UserSchema);