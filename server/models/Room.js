const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  images: [String],
  type: String,
  size: String,
  price: Number,
  extraBed: Number,
  allInclusive: Number,
  halfBoard: Number,
  fullBoard: Number,
  selfCatering: Number,
  beds: Number,
  roomNumber: String,
  occupiedDates: Array,
});

const Room = mongoose.model("room", roomSchema);

module.export = Room;