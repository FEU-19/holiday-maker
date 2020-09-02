const Hotel = require("../models/hotel");

exports.create = (_req, res) => {
  res.send("OK");
};

exports.read = (req, res) => {
  const { id } = res.params;
  Hotel.find({ _id: id }).then((response) => {
    const singleHotel = response.data;
    return res.status(200).json({ data: singleHotel });
  });
};
