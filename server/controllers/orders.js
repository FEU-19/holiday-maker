const Booking = require("../models/Booking");
const User = require("../models/User");
// const Hotel = require("../models/Hotel");
// const Room = require("../models/Room");

const bookingNrGenerator = require("../utils/bookingNrGenerator");

exports.create = (req, res) => {
  // Anta application/json
  // Lägg in bookingDate i hotell.occupiedDates.
  // ID kommer sparas i cookie.
  const Id = req.cookies.userId;

  User.findById(Id)
    .then((response) => {
      if (!response)
        res.status(404).send({ error: "Resource not found, bad ID" });
      const user = response.data.data;
      return user;
    })
    .then((user) => {
      const data = req.body;
      data.user = user;
      const { foreName, lastName, postCode } = data.user;
      data.bookingNumber = bookingNrGenerator(foreName, lastName, postCode, 5);
      const booking = new Booking(data);
      booking.save();

      return Hotel.find({ name: data.hotel });
      // {"roomNr" : { $in : [1, 2, ,3, 5]}} use this logic.
    })
    .then((response) => {
      const hotel = response.data.data;
      const roomIdx = [];
      // If many rooms are booked these roomsnumbers.
      const rooms = req.body.room;
      rooms.forEach((x) => roomIdx.push(x.nr));

      // Update rooms on specific hotels

      // Specific method to update nested values?
      return res.status(201).json();
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.read = (_req, res) => {
  res.send("OK");
};
