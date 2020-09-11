const Order = require("../models/Order");

exports.deleteBooking = async (req, res) => {
  const orderId = req.params.orderId;

  if(!orderId){
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }

  let foundOrder = await Order.findOne({ _id: orderId });

  if(!foundOrder){
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
  const {
    userId,
    adults,
    children,
    hotel,
    rooms,
    bookingDates,
    bookingNumber,
    totalPrice,
  } = req.body;

  
}
