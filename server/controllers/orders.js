const Booking = require("../models/Booking");
const User = require("../models/User");
const { ObjectId } = require("mongodb");

exports.create = (req, res) => {
  // Anta application/json
  // Lägg in bookingDate i hotell.occupiedDates.
  // ID kommer sparas i cookie.
  const ID = req.cookies.userId;

  User.find().where(_id: ObjectId(ID))
  .then(response => {
    if (!response) res.status(404).send({error: "hantera error?"})
    let user = response.data.data;
    return user;
  })
  .then(user => {
    let data = req.body;
    data.user = user;
    const booking = new Booking(data);
    booking.save();

  })


  if (validation === true) res.status(201).json(booking);
};

exports.read = (_req, res) => {
  res.send("OK");
};
