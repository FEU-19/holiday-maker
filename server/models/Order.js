const mongoose = require("mongoose");
const Hotel = require("./Hotel");
// Flight = require("./Flight");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    children: {
      type: Number,
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rooms: [
      {
        price: Number,
        option: String,
        roomNumber: String,
        extraBed: Boolean,
      },
    ],
    bookingDates: {
      start: String,
      end: String,
    },
    bookingNumber: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    flight: Boolean /*  || { Flight } */,
  },
  {
    timestamps: true,
  }
);
orderSchema.pre("save", async function (next) {
  const hotel = await Hotel.findOne({ _id: this.hotel });
  const theseRooms = this.rooms.map((x) => x.roomNumber);
  // rooms that this order will update.
  let conflict = hotel.rooms.filter((room) => {
    return theseRooms.includes(room.roomNumber);
  });
  conflict = conflict.reduce((acc, cur) => {
    return [...acc, ...cur.occupiedDates];
  }, []);
  conflict = conflict.reduce((acc, cur) => {
    if (acc) return acc;
    const ordS = new Date(this.bookingDates.start);
    const ordE = new Date(this.bookingDates.end);

    return ordS < new Date(cur.end) && ordE > new Date(cur.start);
  }, false);
  // conflict is true or false depending if dates are in conflict.
  if (conflict) {
    return next(new Error("Room is already booked."));
  }
  return next();
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
