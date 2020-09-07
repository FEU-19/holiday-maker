const mongoose = require("mongoose");
const RoomSchema = require("./Room");

const orderSchema = mongoose.Schema({
  userId: String,
  adults: Number,
  children: Number,
  hotel: String,
  room: [RoomSchema],
  bookingDates: {
    start: String,
    end: String,
  },
  bookingNumber: String,
  timeLog: String,
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
