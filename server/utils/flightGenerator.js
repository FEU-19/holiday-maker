module.exports = {
  generateFlightDates(checkIn, checkOut) {
    return {
      departureDate: new Date(Date.parse(checkIn) - 1000 * 60 * 60 * 13).toISOString(),
      returnDate: new Date(Date.parse(checkOut) + 1000 * 60 * 60 * 7).toTimeString(),
    };
  },
  generateFlightPrice(children, adults) {
    return children * 3543 + adults * 5987;
  },
};
