const HOTELS = require("../config/constants");

// POST
exports.create = (_req, res) => {
  res.send("OK");
};

// GET
exports.read = (_req, res) => {
  res.json(HOTELS);
};
