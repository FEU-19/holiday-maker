const Order = require("../models/Order");

exports.deleteBooking = async (req, res) => {
  const orderId = req.params.orderId;

  if (!orderId) {
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }
  console.log(orderId);
  const foundOrder = await Order.findOne({ _id: orderId });
  console.log(foundOrder);

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
  const orderId = req.params.orderId;

  if (!orderId) {
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }

  const foundOrder = await Order.findOne({ _id: orderId });

  console.log(foundOrder);

  if (!foundOrder) {
    res.status(404).json({
      error: [{ msg: "booking not found" }],
    });
  }

  try {
    await Order.findByIdAndUpdate(
      orderId,
      { $set: req.body },
      { new: true },
      (err) => {
        console.log(err);
      }
    );

    return res.status(201).send(req.body);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Server error",
    });
  }
};
