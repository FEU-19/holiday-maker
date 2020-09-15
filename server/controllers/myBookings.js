const Order = require("../models/Order");

exports.deleteBooking = async (req, res) => {
  const orderId = req.params.orderId;

<<<<<<< HEAD
  if(!orderId){
=======
  if (!orderId) {
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
    res.status(400).json({
      error: [{ msg: "no order was sent" }],
    });
  }
<<<<<<< HEAD

  let foundOrder = await Order.findOne({ _id: orderId });

  if(!foundOrder){
=======
  console.log(orderId);
  let foundOrder = await Order.findOne({ _id: orderId });
  console.log(foundOrder);

  if (!foundOrder) {
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
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

  if (
    !userId ||
    !adults ||
    !children ||
    !hotel ||
    !rooms ||
    !bookingDates ||
    !bookingNumber ||
    !totalPrice
  ) {
    return res.status(400).json({
      error: [{ msg: "Please fill all of the existing fields" }],
    });
  }

  let foundOrder = await Order.findOne({ _id: orderId });

<<<<<<< HEAD
  if(!foundOrder){
=======
  if (!foundOrder) {
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
    res.status(404).json({
      error: [{ msg: "booking not found" }],
    });
  }

<<<<<<< HEAD
  try{
=======
  try {
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
    let order = {
      userId: userId,
      adults: adults,
      children: children,
      hotel: hotel,
      rooms: rooms,
      bookingDates: bookingDates,
      bookingNumber: bookingNumber,
      totalPrice: totalPrice,
    };
<<<<<<< HEAD
  
    await Order.findByIdAndUpdate(orderId, { $set: order }, { new: true },(err) => {
      console.log(error);
    });
  
    return res.status(201).send(order);
  }catch(err){
=======

    await Order.findByIdAndUpdate(
      orderId,
      { $set: order },
      { new: true },
      (err) => {
        console.log(error);
      }
    );

    return res.status(201).send(order);
  } catch (err) {
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
    console.error(err.message);
    return res.status(500).json({
      msg: "Server error",
    });
  }
<<<<<<< HEAD

}
=======
};
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
