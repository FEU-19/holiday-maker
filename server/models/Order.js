const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const RoomSchema = require("./Room");

const orderSchema = mongoose.Schema({
  user: ObjectId,
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
