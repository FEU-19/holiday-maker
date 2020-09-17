const Order = require("../models/Order");

exports.deleteBooking = async (req, res) => {
  const { orderId } = req.params;

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

const mockData = {
  bookingDates: {
    start: "2020-06-01T11:46:29.258Z",
    end: "2020-06-15T11:47:09.886Z",
  },
  _id: "5f589c5df1c5661b60bae19b",
  userId: "5f61c0cab5402617c07a742a",
  bookingNumber: "1eg96c85t6vk14S8ljkn4953i",
  rooms: [
    {
      _id: "5f588b8e7413ee42ec88e992",
      price: 399,
      option: "heheheh",
      roomNumber: "666",
    },
  ],
  hotel: "636173746c652076616e6961",
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
    const test = await Order.findByIdAndUpdate(
      { _id: orderId },
      mockData,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );

    return res.status(201).send(test);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      msg: "Server error",
    });
  }
};
