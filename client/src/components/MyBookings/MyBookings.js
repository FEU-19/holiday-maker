import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import ChangeBookingModal from "../modals/ChangeBooking/ChangeBookingModal";

import FlightBooking from "../modals/FlightBooking/FlightBooking";
import axios from "axios";
import ContainerButtons from "./ContainerButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "17%",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rootTwo: {
    minWidth: 275,
    transform: "translate(-50%, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50%",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    whiteSpace: "nowrap",
    marginLeft: "-45px",
  },
}));

const MyBookings = (props) => {
  const [myBookings, setMyBookings] = useState([]);
  const [update, setUpdate] = useState(0);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [hotelId, setHotelId] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/", { withCredentials: true })
      .then((res) => {
        console.log(res.data.data);
        setMyBookings(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  function saveOrder(myBooking) {
    setOrder(myBooking);
    setHotelId(myBooking.hotel);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setOrder(null);
    setHotelId(null);
  };

  return !myBookings ? (
    <p>Loading...</p>
  ) : (
    <div className={classes.root}>
      {order && (
        <ChangeBookingModal
          open={open}
          bookings={order}
          handleClose={handleClose}
          hotelId={hotelId.toString()}
          rooms={order.rooms}
          order={order}
          setOrder={setOrder}
        />
      )}
      {myBookings.map((myBooking) => (
        <Accordion key={myBooking._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{myBooking.hotel}</Typography>
            <Typography className={classes.heading}>
              {new Date(myBooking.bookingDates.start).toLocaleString("sv-SE")}
            </Typography>
            <Typography className={classes.heading}>{myBooking._id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card className={classes.rootTwo}>
              <CardContent>
                <Typography>Information</Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <span>Hotel</span>
                  <br></br>
                  User Name/Id: {myBooking.userId}
                  <br />
                  Total Rooms: {myBooking.rooms.length}
                  <br />
                  Total People: {myBooking.adults + myBooking.children}
                  <br></br>
                  <span>Flight</span>
                  <br></br>
                  Departure Date: {myBooking.flight.departureDate.slice(0, 10)}
                  <br />
                  Return Date: {myBooking.flight.returnDate.slice(0, 10)}
                  <br />
                  Extra Bed: {myBooking.rooms.extraBed}
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    className={classes.heading}
                    onClick={() => saveOrder(myBooking)}
                    variant="outlined"
                    color="primary"
                  >
                    Change Booking
                  </Button>
                  <FlightBooking />
                </div>
                <ContainerButtons orderId={myBooking._id} setUpdate={setUpdate} />
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MyBookings;
