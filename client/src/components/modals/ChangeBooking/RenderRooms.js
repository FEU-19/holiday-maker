import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Radio } from "@material-ui/core";
import RenderFoodOption from "./RenderFoodOption";
import DatePicker from "../../Main/SearchContainer/DatePicker";

export default function RenderRooms({ bookings, hotel }) {
  console.log(bookings);
// mappa bokning 
const bookedRooms = bookings.rooms
// 
  const booking = bookings.map((booking) => {
    console.log('I have x rooms in my booking ',booking );
    const room = booking.map(room => {
      
    })
  });

  return <p>Hej</p>;
}
