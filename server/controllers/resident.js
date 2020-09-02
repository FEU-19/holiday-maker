const Hotel = require("../models/Hotel");

exports.create = (_req, res) => {
  res.send("OK");
};

exports.read = (req, res) => {
  const { id } = req.params;
  Hotel.findById(id).then((response) => {
    console.log(response);
    const singleHotel = response.data;
    return res.status(200).json({ data: singleHotel });
  });
};
