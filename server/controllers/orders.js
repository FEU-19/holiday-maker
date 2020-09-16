const Order = require("../models/Order");
const User = require("../models/User");
const Hotel = require("../models/Hotel");

const bookingNrGenerator = require("../utils/bookingNrGenerator");
// {adults: N, children: N, hotel: String, rooms: Array, bookingDates: {start: String, end: String}}
exports.create = async (req, res) => {
  const Id = req.user._id;
  const data = req.body;
  const orderData = { ...data };

  const user = await User.findById(Id);

  orderData.userId = user._id;
  orderData.bookingNumber = bookingNrGenerator(user.firstName, user.surname, 6);
  orderData.rooms = data.rooms;
  orderData.bookingDates = data.bookingDates;
  orderData.hotel = data.hotel;
  orderData.flight = data.flight;
  orderData.totalPrice = data.flight.price || 0;

  const roomNs = [];
  data.rooms.forEach((room) => {
    orderData.totalPrice += room.price;
    roomNs.push(room.roomNumber);
  });
  const order = new Order(orderData);
  try {
    await order.save();
  } catch (err) {
    return res.status(409).send({ error: err.message });
  }

  const hotel = await Hotel.findOne({ _id: data.hotel });
  hotel.rooms.forEach((room) => {
    if (roomNs.includes(room.roomNumber)) {
      room.occupiedDates.push(data.bookingDates);
    }
  });

  try {
    await hotel.save();
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
  return res.status(201).json(orderData);
};

exports.read = async (req, res) => {
  const orders = await Order.find({ userId: req.user });
  res.send({ data: orders });
};
