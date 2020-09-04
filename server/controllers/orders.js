const Order = require("../models/Order");
const User = require("../models/User");
const Hotel = require("../models/Hotel");

const bookingNrGenerator = require("../utils/bookingNrGenerator");
// {adults: N, children: N, hotel: String, rooms: Array, bookingDates: {start: String, end: String}}
exports.create = (req, res) => {
  // Id will also be a cookie.
  const Id = req.body.user;
  const data = req.body;
  const orderData = {};

  User.findById(Id)
    .then((response) => {
      if (!response) {
        res.status(404).send({ error: "Resource not found, bad ID. SMÖG" });
      }
      const user = response;
      return user;
    })
    .then((user) => {
      if (!user) return res.status(404).send({ msg: "No user found. LÖG" });
      // Add data to Order
      orderData.user = user._id;
      orderData.timeLog = Date.now();
      orderData.bookingNumber = bookingNrGenerator(
        user.first_name,
        user.surname,
        6
      );
      orderData.room = data.room;
      orderData.bookingDates = data.bookingDates;

      // Add occupiedDates to booked rooms.
      orderData.room.forEach((room) => {
        room.occupiedDates.push(data.bookingDates);
      });
      const order = new Order(orderData);
      return order.save();
    })
    .then((response) => {
      if (!response) {
        res.status(404).send({ msg: "Order couldn't be saved. HÖG" });
      }
      // Ids to the rooms booked.
      const roomIds = [];
      data.room.forEach((room) => {
        roomIds.push(room._id);
      });
      return Hotel.room.updateMany().where({ _id: { $in: roomIds } });
    })
    .then((response) => {
      if (!response) {
        return res.status(404).send({ error: "MÖG" });
      }
      console.log(response);
      return res.status(201).json(orderData);
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

exports.read = (_req, res) => {
  res.send("OK");
};
