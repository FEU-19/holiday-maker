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
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

import ContainerButtons from "./ContainerButtons";
import getToken from "../../utils/getToken";

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
    flight:  {
        departureDate: 'new Date.toISOString()',
        returnDate: 'new Date.toISOString()',
        price: 'Number'
    }
}]

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '17%',
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
      transform: 'translate(-50%, 0)',
    },
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '50%',
    },
  }));

const MyBookings = (props) => {
  const [myBookings, setMyBookings] = useState([]);
  const [clickedBookings, setClickedBookings] = useState(false);
  const [update, setUpdate] = useState(0);

  const classes = useStyles();


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/", {
        headers: { "x-auth-token": getToken() },
      })
      .then((res) => {
        console.log(res);
        setMyBookings(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  if(!myBookings){
    return(<p>loading..</p>)
  }
  
  return (
    <div className={classes.root}>  
            {myBookings.map(myBooking => 
                <Accordion key={myBooking._id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                      <Typography className={classes.heading}>{myBooking.hotel}</Typography>
                      <Typography className={classes.heading}>{myBooking.bookingDates.start}</Typography>
                      <Typography className={classes.heading}>{myBooking._id}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Typography className={classes.flex} >
                        <Card className={classes.rootTwo}>
                            <CardContent >
                                <Typography variant={"h5"} component={"h2"}>
                                  Information
                                </Typography>
                                <Typography  className={classes.pos} color="textSecondary" variant={"body2"} component={"p"}>
                                  User Name/Id: {myBooking.hotel}
                                  Total Rooms: {myBooking.rooms.length}
                                  Total People: {myBooking.adults + myBooking.children}
                                  Departure Date: {"lmao"}
                                  Return Date: {"lmao"}
                                  Extra Bed:  {myBooking.rooms[0].extraBed}
                                  <ContainerButtons 
                                    setUpdate={setUpdate} 
                                    update={update} 
                                    orderId={myBooking._id} 
                                    wholeNewObject={myBooking}
                                  />
                                </Typography>
                            </CardContent>
                        </Card>
                      </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            }
        </div>
  )
}
{/* <DialogTitle id="form-dialog-title">Hotel name</DialogTitle> */}
export default MyBookings;
