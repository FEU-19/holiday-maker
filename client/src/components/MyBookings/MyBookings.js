import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";

import ContainerButtons from "./ContainerButtons";

const objekt = [
  {
    _id: "1",
    userId: "mongoose.Schema.Types.ObjectID",
    adults: "2",
    children: "Number",
    hotel: "mongoose.Schema.Types.ObjectID",
    totalPrice: "Number",
    rooms: [
      {
        _id: "mongoose.Schema.Types.ObjectID",
        roomNumber: "String",
        option: "String",
        extraBed: "yes",
        price: "2000kr",
      },
    ],
    bookingDates: {
      start: "new Date.toISOString()",
      end: "new Date.toISOString()",
    },
    flight:
      "null" |
      {
        departureDate: "new Date.toISOString()",
        returnDate: "new Date.toISOString()",
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
    flight:
      "null" |
      {
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
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50%",
  },
}));

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState({});
  const [clickedBookings, setClickedBookings] = useState(false);

  const showMyBookings = () => {
    setClickedBookings(true);

    if (clickedBookings) {
      console.log("myBookings");

      let url = "";
      axios.get(url).then((res) => {
        console.log(res.data.adults);
        //myBookings.push(res.data);
        setMyBookings(res.data);
      });
    }
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <Button onClick={showMyBookings}>My Bookings </Button>
      {objekt.map((myBooking) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {myBooking.hotel}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {myBooking.bookingDates.start}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {myBooking._id}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.flex}>
              <Card className={classes.rootTwo}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  ></Typography>
                  <Typography variant="h5" component="h2">
                    {myBooking.rooms.roomNumber}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {myBooking.rooms.length}
                    {myBooking.rooms[0].extraBed}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                  <ContainerButtons id={myBookings._id} />
                </CardContent>
              </Card>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MyBookings;
