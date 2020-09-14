const { read } = require("../controllers/flights");

const Router = require("express").Router();

Router.get("/flights/", read);

module.exports = Router;
