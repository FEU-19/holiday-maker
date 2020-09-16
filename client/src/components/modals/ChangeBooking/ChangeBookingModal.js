import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
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
import { DataFoodOptions } from "./DataFoodOptions";

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
  const [newRoomOptions, setNewRoomOptions] = useState(bookings.rooms[0]);

  const bookedRooms = bookings.rooms;
  console.log("****** Remove NAME before PUT *************", newRoomOptions);

  useEffect(() => {
    if (bookings) {
      setDate((prevState) => ({
        ...prevState,
        start: startDate,
        end: endDate,
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
              console.log(hotelRoom);
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
