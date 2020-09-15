import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Radio } from "@material-ui/core";
import RenderFoodOption from "./RenderFoodOption";
import DatePicker from "../../Main/SearchContainer/DatePicker";

export default function RenderRooms({ bookings, hotel }) {
  console.log(bookings);
  console.log('This is the hotel', hotel);
// mappa bokning 
// const bookedRooms = bookings.rooms
// // 

function findTheHotelRoomInHotel(){
  let roomsINHotel = hotel.rooms;
  roomsINHotel.map(HotelRoom => {
    console.log('This is rooms in HOTEL -> ', HotelRoom);
    // hotel.filter(function(x) {
    //   console.log(x._id)
    // })
  })
}

findTheHotelRoomInHotel();

  const booking = bookings.map(booking => {
    console.log('I have x rooms in my booking ', booking );
    let rooms = booking.rooms;

    rooms.map(room => {
      console.log('This is my booked rooms', room);
      // / / hotel.filter(function(x) {
      //   console.log(x._id)
      // })
    })
  });

  return <p>Hej</p>;
}


