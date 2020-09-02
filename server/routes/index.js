const residentsRouter = require("./residents");
const ordersRouter = require("./orders");
const residentRouter = require("./resident");

module.exports = { routers: [residentsRouter, ordersRouter, residentRouter] };
