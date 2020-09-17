import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import RadioGroup from "@material-ui/core/RadioGroup";

import SelectAmountOfAdults from "../../Main/SearchContainer/SelectAmountOfAdults";
import SelectAmountOfChildren from "../../Main/SearchContainer/SelectAmountOfChildren";

import ChildrenAgeSelects from "../../Main/SearchContainer/ChildrenAgeSelects";

import ChangeDates from "./ChangeDates";
import RenderFoodOption from "./RenderFoodOption";
import filterDate from "../../../utils/filterDate";

export default function ChangeBookingModal({
  handleClose,
  open,
  bookings,
  hotelId,
}) {
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [date, setDate] = useState({start: '', end: ''});
  const bookedRooms = bookings.rooms;
  const [hotel, setHotel] = useState(null);
  console.log("I GOT the Order ", bookings);
  console.log("I GOT the FLIGHT ID  ", hotelId);
  const [newStartDate, setNewStartDate] = useState('')
  const [newEndDate, setNewEndDate] = useState('');

  console.log(bookings.bookingDates.start)

  useEffect(() => {
    if(bookings){
      setDate((prevState => ({...prevState, start: bookings.bookingDates.start, end: bookings.bookingDates.end})));
    }
}, [bookings]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((res) => {
        console.log("Hotel Res ", res);

        setHotel(res.data.data);
      })
      .catch((error) => {
        console.error(
          "An error occured while retrieving data from the server",
          error
        );
      });
  }, [hotelId]);

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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {!hotel ? (
        <p>Loading...</p>
      ) : (
        <div>
          <DialogTitle id="form-dialog-title">{hotel.name}</DialogTitle>
          <DialogContent>
            <ChangeDates date={date} setDate={setDate} />
            {/* 
              <SelectAmountOfAdults />
              <SelectAmountOfChildren />
              <ChildrenAgeSelects /> */}
            {/* Extra bed */}
            {/* flight */}
            {/* Need price */}
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

                  <RenderFoodOption
                    roomInfo={hotelRoom}
                    roomOption={room.price}
                  />
                </React.Fragment>
              );
            })}
            <RadioGroup
              aria-label="price"
              name="price"
              // value={selected}
              // onChange={handleChange}
            />

            <Button onClick={handleClose} color="primary">
              Book flight
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel changes
            </Button>
            <Button onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </div>
      )}
    </Dialog>
  );
}
