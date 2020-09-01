const Booking = require("../models/Booking");
const User = require("../models/User");

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
      const booking = new Booking(data);
      booking.save();
      return res.status(201).json(booking);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.read = (_req, res) => {
  res.send("OK");
};
