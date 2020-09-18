const Order = require("../models/Order");

exports.deleteBooking = async (req, res) => {
  const { orderId } = req.params;

  if (!orderId) {
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }
  const foundOrder = await Order.findOne({ _id: orderId });

  if (!foundOrder) {
    res.status(404).json({
      error: [{ msg: "booking not found" }],
    });
  }

  await Order.findByIdAndDelete(orderId);

  res.status(204).json({
    error: [{ msg: "Successfully removed booking" }],
  });
};

exports.changeBooking = async (req, res) => {
  const { orderId } = req.params;
  console.log(orderId);

  if (!orderId) {
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }

  const foundOrder = await Order.findOne({ _id: orderId });

  if (!foundOrder) {
    res.status(404).json({
      error: [{ msg: "booking not found" }],
    });
  }

  try {
    const test = await Order.findByIdAndUpdate({ _id: orderId }, mockData, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });

    return res.status(201).send(test);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Server error",
    });
  }
};
