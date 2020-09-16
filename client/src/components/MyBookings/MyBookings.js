import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import { Button } from "@material-ui/core";
import ChangeBookingModal from "../modals/ChangeBooking/ChangeBookingModal";

import ContainerButtons from "./ContainerButtons";
import getToken from "../../utils/getToken";

const objekt = [
  {
    _id: {
      $oid: "5f5889d8daa2064fd4eb8a42",
    },
    userId: {
      $oid: "5f61c0cab5402617c07a742a",
    },
    bookingNumber: "k7cSt78z9k9v9n261lrv5364e",
    rooms: [
      {
        _id: {
          $oid: "5f5b7e5b36ac0355705b808c",
        },
        price: "531",
        option: "halfBoard",
        roomNumber: "103",
      },
    ],
    bookingDates: {
      start: "2020-06-01T11:46:29.258Z",
      end: "2020-06-15T11:47:09.886Z",
    },
    hotel: {
      $oid: "5f5b7e5b36ac0355705b8087",
    },
    flight:
      "null" |
      {
        departureDate: "2020-06-01T11:46:29.258Z",
        returnDate: "2020-06-15T11:47:09.886Z",
        price: "Number",
      },
  },
  {
    _id: {
      $oid: "5f607c25f06634186cbb2cbd",
    },
    userId: {
      $oid: "5f61c0cab5402617c07a742a",
    },
    bookingNumber: "k7cSt78z9k9v9n261lrv5364e",
    rooms: [
      {
        _id: {
          $oid: "5f5b7e5b36ac0355705b8096",
        },
        price: "748",
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
    flight:
      "null" |
      {
        departureDate: "2020-06-01T11:46:29.258Z",
        returnDate: "2020-06-15T11:47:09.886Z",
        price: "Number",
      },
  },
  {
    _id: "2",
    userId: "mongoose.Schema.Types.ObjectID",
    adults: "2",
    children: "5",
    hotel: "mongoose.Schema.Types.ObjectID",
    totalPrice: "100$",
    rooms: [
      {
        _id: "mongoose.Schema.Types.ObjectID",
        roomNumber: "String",
        option: "String",
        extraBed: "yes",
        price: "1000kr",
      },
    ],
    bookingDates: {
      start: "new Date.toISOString()",
      end: "new Date.toISOString()",
    },
    flight: {
      departureDate: "new Date.toISOString()",
      returnDate: "new Date.toISOString()",
      price: "Number",
    },
  },
];

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
}));

const MyBookings = (props) => {
  const [myBookings, setMyBookings] = useState([]);
  const [clickedBookings, setClickedBookings] = useState(false);
  const [update, setUpdate] = useState(0);
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [hotelId, setHotelId] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/", { withCredentials: true })
      .then((res) => {
        console.log(res);
        setMyBookings(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  if (!myBookings) {
    return <p>loading..</p>;
  }

  function saveOrder(myBooking) {
    setOrder(myBooking);
    setHotelId(myBooking.hotel.$oid);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setOrder(null);
    setHotelId(null);
  };

  return (
    <div className={classes.root}>
      {order && (
        <ChangeBookingModal
          open={open}
          bookings={order}
          handleClose={handleClose}
          hotelId={hotelId}
        />
      )}

      {objekt.map((myBooking) => (
        <Accordion key={myBooking._id.$oid}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {myBooking.hotel.$oid}
            </Typography>
            <Typography className={classes.heading}>
              {myBooking.bookingDates.start}
            </Typography>
            <Typography className={classes.heading}>
              {myBooking._id.$oid}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card className={classes.rootTwo}>
              <CardContent>
                <Typography>Information</Typography>
                <Typography className={classes.pos} color="textSecondary">
                  User Name/Id: {myBooking.userId.$oid}
                  <br />
                  Total Rooms: {myBooking.rooms.length}
                  <br />
                  {/* Total People: {myBooking.adults + myBooking.children}
                                  <br></br>
                                  Departure Date: {myBooking.flight.departureDate} */}
                  <br />
                  Return Date: {myBooking.flight.returnDate}
                  <br />
                  {/* Extra Bed:  {myBooking.rooms[0].extraBed} */}
                </Typography>
                <Button
                  className={classes.heading}
                  onClick={() => saveOrder(myBooking)}
                >
                  Change Booking
                </Button>
                <ContainerButtons />
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MyBookings;
