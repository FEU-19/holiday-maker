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

import RenderRooms from "./RenderRooms";
import ChangeDates from "./ChangeDates";

export default function ChangeBookingModal() {
  const [open, setOpen] = useState(true);
  const [hotelId, setHotelId] = useState("5f5b7e5b36ac0355705b8087");
  const [hotel, setHotel] = useState(null);
  const [bookings, setBookings] = useState([
    {
      _id: {
        // boknings nummer
        $oid: "5f5889d8daa2064fd4eb8a42",
      },
      userId: {
        // användare
        $oid: "5f5f64fb86170a41247bdf06",
      },
      bookingNumber: "k7cSt78z9k9v9n261lrv5364e",
      rooms: [
        //   {
        //     "_id": {
        //         "$oid": "5f5b7e5b36ac0355705b8088"
        //     },
        //     "price": 0,
        //     "option": "selfCatering",
        //     "roomNumber": "100"
        // },
        {
          _id: {
            $oid: "5f5b7e5b36ac0355705b808c",
          },
          price: 531,
          option: "halfBoard",
          roomNumber: "103",
        },
        {
          _id: {
            $oid: "5f5b7e5b36ac0355705b8096",
          },
          price: 748,
          option: "allInclusive",
          roomNumber: "110",
        },
      ],
      bookingDates: {
        start: "2020-06-01T11:46:29.258Z",
        end: "2020-06-15T11:47:09.886Z",
      },
      hotel: {
        $oid: "5f5b7e5b36ac0355705b8087",
      },
      __v: 0,
    },
  ]); // ska få från parent
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [date, setDate] = useState({start: '', end: ''});
  
  (bookings.map(booking => {
    console.log(booking.bookingDates)
    // setStartDate(booking.bookingDates.start)
    // setEndDate(booking.bookingDates.end)
  }))

  useEffect(() => {
    if(bookings){
      
      setDate((prevState => ({...prevState, start: startDate, end: endDate})));
    }
}, [bookings]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((res) => {
        console.log(res);

        setHotel(res.data.data);
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

  console.log(date)
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
            <RenderRooms bookings={bookings} hotel={hotel} />
            {/* <DatePicker />
        <SelectAmountOfAdults />
        <SelectAmountOfChildren />
        <ChildrenAgeSelects /> */}
            {/* Extra bed */}
            {/* flight */}
            {/* Need price */}

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