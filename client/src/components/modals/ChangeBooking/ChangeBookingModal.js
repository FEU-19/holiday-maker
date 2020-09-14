import React, { useState, useEffect } from "react";
import axios from 'axios';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import RadioGroup from "@material-ui/core/RadioGroup";

import SelectAmountOfAdults from "../../Main/SearchContainer/SelectAmountOfAdults";
import SelectAmountOfChildren from "../../Main/SearchContainer/SelectAmountOfChildren";
import DatePicker from "../../Main/SearchContainer/DatePicker";

import ChildrenAgeSelects from "../../Main/SearchContainer/ChildrenAgeSelects";
import RenderFoodOption from "./RenderFoodOption";


export default function ChangeBookingModal() {
  const [open, setOpen] = useState(true);
  const [hotelId, setHotelId] = useState('5f5b7e5b36ac0355705b8087');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((resp) => {
        console.log(resp);
        // updateData(response.data.data);
      })
      .catch((error) => {
        console.error(
          "An error occured while retrieving data from the server",
          error
        );
      });
  }, [hotelId]);
  // VÄLJA MAT OPTION
  // hitta room på room[]._id
  // rendera ut vad rummet erbjuder
  // skicka in datan till RenderFoodOption


  // Få PUT att funka innan vi redirectar¨
  // Sedan Redirect to={{ pathname: "/checkout", state: { rooms: chosenRooms } }}
  // const [chosenRooms, setChosenRooms] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Hotel name</DialogTitle>
      <DialogContent>
        <DatePicker />
        <SelectAmountOfAdults />
        <SelectAmountOfChildren />
        <ChildrenAgeSelects />
        {/* Antal rum */}
        {/* Extra bed */}
        {/* flight */}
        {/* Need price */}

        <RadioGroup
          aria-label="price"
          name="price"
          // value={selected}
          // onChange={handleChange}
        > 
        <RenderFoodOption />
        </RadioGroup>

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
    </Dialog>
  );
}
