import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Radio, RadioGroup } from "@material-ui/core";
import RenderFoodOption from "./RenderFoodOption";
import DatePicker from "../../Main/SearchContainer/DatePicker";


export default function RenderRooms({ bookings, hotel }) {
  // console.log("this is the booking ", bookings[0].rooms);
  const bookedRooms = bookings[0].rooms;
  // console.log('This is the hotel', hotel);
  // mappa bokning
  // const bookedRooms = bookings.rooms
  // //

  function findTheHotelRoomInHotel(id) {
    // console.log( id);
    let x;
    const roomsInHotel = hotel.rooms;
    roomsInHotel.map((HotelRoom) => {
      // console.log('This is rooms in HOTEL -> ',  HotelRoom._id);
      if (HotelRoom._id === id) {
        // console.log("*************************************", HotelRoom._id, id);
        // console.log(HotelRoom);
        return (x = HotelRoom);
      }
    });
    return x;
  }
  return (
    <div>
      {bookedRooms.map((room, index) => {
        console.log("This is my option ", room);
        
        const hotelRoom = findTheHotelRoomInHotel(room._id.$oid);
        // console.log("only the matching hotelRoom ", hotelRoom);

        return (
          <React.Fragment key={index}>
            {/* <p>size: {hotelRoom.size}</p> */}
            {/* <FormControlLabel
                value={hotelRoom.extraBed}
                control={<Checkbox color="default" />}
                onChange={handleCheck}
                label={
                  <p style={{ paddingRight: "10vw" }}>
                    Extra Bed: {hotelRoom.extraBed}
                  </p>
                }
                labelPlacement="start"
              />
              <RadioGroup
                aria-label="price"
                name="price"
                value={selected}
                // onChange={handleChange}
              /> */}

            <RenderFoodOption roomInfo={hotelRoom} roomOption={room.price}/>
          </React.Fragment>
        );
      })}
    </div>
  );
}