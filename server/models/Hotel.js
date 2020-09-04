const mongoose = require("mongoose");
const Room = require("./Room");

const hotelSchema = new mongoose.Schema({
  city: String,
  name: String,
  distanceToBeach: Number,
  distanceToCity: Number,
  pool: Boolean,
  nightEntertainment: Boolean,
  kidsClub: Boolean,
  restaurant: Boolean,
  rating: Number,
  rooms: [Room],
});

const Hotel = mongoose.model("residence", hotelSchema);
module.exports = Hotel;
