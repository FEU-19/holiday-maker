const mongoose = require("mongoose");
const User = require("./User");
const Room = require("./Room");

const bookingSchema = mongoose.Schema({
  user: [User],
  adults: Number,
  children: Number,
  hotel: String,
  room: [Room],
  bookingdates: {
    start: String,
    end: String,
  },
  bookingNumber: String,
});

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
