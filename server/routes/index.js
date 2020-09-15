const residentsRouter = require("./residences");
const ordersRouter = require("./orders");
const usersRouter = require("./users");
const myBookingsRouter = require("./myBookings");

module.exports = {
  routers: [residentsRouter, ordersRouter, usersRouter, myBookingsRouter],
};
