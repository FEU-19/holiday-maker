const { read } = require("../controllers/flights");
const authorizeUser = require("../middleware/auth");

const Router = require("express").Router();

Router.get("/flights/", authorizeUser, read);

module.exports = Router;
