const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    adults: Number,
    children: Number,
    hotel: mongoose.Schema.Types.ObjectId,
    rooms: [
      {
        price: Number,
        option: String,
        roomNumber: String,
      },
    ],
    bookingDates: {
      start: String,
      end: String,
    },
    bookingNumber: String,
    totalPrice: Number,
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
