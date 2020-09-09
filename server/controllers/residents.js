const Hotel = require("../models/Hotel");

exports.create = (_req, res) => {
  res.send("OK");
};

exports.read = (req, res) => {
  Hotel.find({})
    .then((response) => {
      if (!response) {
        return res.status(404).send({ msg: "No data found" });
      }
      return res.status(200).json({ data: response });
    })
    .catch((err) => {
      return res.status(500).send({ error: err.message });
    });
};

exports.readOne = (req, res) => {
  const { id } = req.params;

  Hotel.findById(id)
    .then((response) => {
      return res.status(200).json({ data: response });
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};