import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

import SelectAmountOfAdults from "../../Main/SearchContainer/SelectAmountOfAdults";
import SelectAmountOfChildren from "../../Main/SearchContainer/SelectAmountOfChildren";

import ChildrenAgeSelects from "../../Main/SearchContainer/ChildrenAgeSelects";

import ChangeDates from "./ChangeDates";
import RenderFoodOption from "./RenderFoodOption";
import filterDate from "../../../utils/filterDate";
import { DataFoodOptions } from "./DataFoodOptions";
import {handleEdit} from '../../MyBookings/ContainerButtons';

export default function ChangeBookingModal({
  handleClose,
  open,
  bookings,
  hotelId,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [date, setDate] = useState({ start: "", end: "" });
  const [hotel, setHotel] = useState(null);
  console.log("I GOT the Order ", bookings);
  console.log("I GOT the FLIGHT ID  ", hotelId);
  const [newStartDate, setNewStartDate] = useState('')
  const [newEndDate, setNewEndDate] = useState('');
  const [newRoomOptions, setNewRoomOptions] = useState(bookings.rooms[0]);
  

  const bookedRooms = bookings.rooms;

  //console.log('*************************************************', bookings.bookingDates.start)

 
  //console.log("****** Remove NAME before PUT *************", newRoomOptions);

  useEffect(() => {
    if (bookings) {
      setDate((prevState) => ({
        ...prevState,
        start: bookings.bookingDates.start,
        end: bookings.bookingDates.end,
      }));
    }
  }, [bookings]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((res) => {
        // console.log("Hotel Res ", res);
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
    let x;
    const roomsInHotel = hotel.rooms;
    roomsInHotel.map((HotelRoom) => {
      if (HotelRoom._id === id) {
        return (x = HotelRoom);
      }
    });
    return x;
  }

  function saveChanges(){
    console.log('Name should be remmoved  ***************** ', newRoomOptions, newRoomOptions.name);
    setNewRoomOptions({...newRoomOptions}, delete newRoomOptions.name);

    

    // for(const [key, value] of Object.entries(bookings.rooms[0]) ) {
    //   console.log('!!!!!!!!!!!!!!!!!!!!!', key, value);
    //   if(newRoomOptions.option === key) {

    //   }
    // }
    console.log('the hole ********************** ', bookings)

    let data = {...bookings.rooms[0], ...newRoomOptions};
    console.log('....... THE HOLE NEW ORDER ', data);
    console.log('the hole 222222222222222222222222 ', bookings)

    // console.log('REMOVED NAME ', data);
    // console.log('Name should be remmoved  ***************** ', newRoomOptions, newRoomOptions.name);
    // handleEdit();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {!hotel ? (
        <Typography>Loading...</Typography>
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
              const hotelRoom = findTheHotelRoomInHotel(room._id);
              //console.log(hotelRoom);
              const data = DataFoodOptions(hotelRoom);

              return (
                <React.Fragment key={index}>
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
              */}
                  <Typography> Food options</Typography>
                  <RenderFoodOption
                    initiallySelected={room.option}
                    setNewRoomOptions={setNewRoomOptions}
                    newRoomOptions={newRoomOptions}
                    data={data}
                  />
                </React.Fragment>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined" color="primary">
              Cancel changes
            </Button>
            <Button onClick={saveChanges} variant="outlined" color="primary">
              Save changes
            </Button>
          </DialogActions>
        </div>
      )}
    </Dialog>
  );
}
