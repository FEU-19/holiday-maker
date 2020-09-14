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

module.exports = roomSchema;
