const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  socialSecurityNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  bookmarkedQueries: [String],
  bookmarkedHotels: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model("user", UserSchema);
