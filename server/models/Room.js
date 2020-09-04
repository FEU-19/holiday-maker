const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  images: [String],
  type: String,
  size: String,
  price: Number,
  extraBed: Number,
  "all-inclusive": Number,
  "half-board": Number,
  "full-board": Number,
  "self-catering": Number,
  beds: Number,
  roomNumber: String,
  occupiedDates: Array,
});

const Room = mongoose.model("room", roomSchema);

module.export = Room;
