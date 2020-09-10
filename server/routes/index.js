const residentsRouter = require("./residences");
const ordersRouter = require("./orders");
const usersRouter = require("./users");

module.exports = {
  routers: [residentsRouter, ordersRouter, usersRouter],
};
