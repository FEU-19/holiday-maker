const Booking = require("../models/Booking");
const User = require("../models/User");
// const Hotel = require("../models/Hotel");
// const Room = require("../models/Room");

const bookingNrGenerator = require("../utils/bookingNrGenerator");

exports.create = (req, res) => {
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
      const { first_name, surname, zip_code } = data.user;
      data.bookingNumber = bookingNrGenerator(first_name, surname, zip_code, 6);
      const booking = new Booking(data);
      booking.save();

      return Hotel.find({ name: data.hotel });
    })
    .then((response) => {
      const hotel = response.data;
      const rooms = req.body.room;
      // If many rooms are booked these roomsnumbers.

      // Update rooms on specific hotels
      const roomNr = {};
      rooms.forEach((x) => {
        roomNr[x.nr] = x.nr;
      });
      for (rooms of hotel.rooms) {
        if (rooms.nr in roomNr) {
          hotel.rooms.occupiedDates = req.body.bookingDates;
        }
      }

      // Alternative solution - if works, is better!
      const roomIds = [];
      rooms.forEach((x) => {
        roomIds.push(x._id);
      });
      Hotel.rooms.find({ _id: { $in: roomIds } }).then((result) => {
        const rooms2 = result.data;
        rooms2.forEach((x) => x.occupiedDates.push(req.body.bookingDates));
        return Hotel.rooms.updateMany().where({ _id: { $in: roomIds } }).set;
      });

      // Then update these subdocs.s

      // Update that hotel.
      Hotel.updateOne(hotel).then((result) => {
        if (!result)
          return res
            .status(500)
            .send({ error: "Server error. Try again later." });
        return res.status(201).json(result);
      });
      // Specific method to update nested values?
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

exports.read = (_req, res) => {
  res.send("OK");
};
