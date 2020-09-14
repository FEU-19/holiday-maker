const { generateFlightDates, generateFlightPrice } = require("../utils/flightGenerator");

module.exports = {
  read(req, res) {
    const { children, adults, checkIn, checkOut } = req.query;

    const { departureDate, returnDate } = generateFlightDates(checkIn, checkOut);
    const price = generateFlightPrice(children, adults);

    res.status(200).send({ data: { departureDate, returnDate, price } });
  },
};
