const Order = require("../models/Order");
const User = require("../models/User");
const Hotel = require("../models/Hotel");

const bookingNrGenerator = require("../utils/bookingNrGenerator");
// {adults: N, children: N, hotel: String, rooms: Array, bookingDates: {start: String, end: String}}
exports.create = async (req, res) => {
  // Id will be a cookie.

  const Id = req.body.user;
  const data = req.body;
  const orderData = {};

  const user = await User.findById(Id);
  console.log(user);
  orderData.userId = data.userId;
  orderData.bookingNumber = bookingNrGenerator(
    user.first_name,
    user.surname,
    6
  );
  orderData.rooms = data.rooms;
  orderData.bookingDates = data.bookingDates;
  orderData.hotel = data.hotel;

  const order = new Order(orderData);
  order.save((err) => {
    if (err) res.status(500).send({ error: err.message });
  });

  const roomNs = [];
  data.rooms.forEach((room) => {
    roomNs.push(room.roomNumber);
  });

  const hotel = await Hotel.findOne({ _id: data.hotel });
  hotel.rooms.forEach((room) => {
    if (roomNs.includes(room.roomNumber)) {
      room.occupiedDates.push(data.bookingDates);
    }
  });
  hotel.save((err) => {
    if (err) res.status(500).send({ error: err.message });
    res.status(201).json(orderData);
  });
};

exports.read = async (req, res) => {
  const orders = await Order.find({ userId: req.user });
  res.send({ data: orders });
};
