import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Redirect } from 'react-router-dom';
import axios from "axios";



const objekt = [{
    _id: 'Booking Id1',
    userId: 'mongoose.Schema.Types.ObjectID',
    adults: 2,
    children: 3,
    hotel: 'Hotel name placeholder1',
    totalPrice: 'Number',
    rooms: [{
        _id: 'mongoose.Schema.Types.ObjectID',
        roomNumber: 'String',
        option: 'String',
        extraBed: 'No',
        price: '2000kr'
    }],
    bookingDates: {
        start: 'new Date.toISOString()',
        end: 'new Date.toISOString()'
    },
    flight: 'null' | {
        departureDate: 'new Date.toISOString()',
        returnDate: 'new Date.toISOString()',
        price: 'Number'
    }
}, {
    _id: 'Booking Id2',
    userId: 'mongoose.Schema.Types.ObjectID',
    adults: 2,
    children: 1,
    hotel: 'Hotel name placeholder2',
    totalPrice: '100$',
    rooms: [{
        _id: 'mongoose.Schema.Types.ObjectID',
        roomNumber: 'String',
        option: 'String',
        extraBed: 'Yes',
        price: '1000kr'
    }],
    bookingDates: {
        start: 'new Date.toISOString()',
        end: 'new Date.toISOString()'
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
  const [myBookings, setMyBookings] = useState({});
  const [clickedBookings, setClickedBookings] = useState(false);
    
  const classes = useStyles();

  return (
    <div className={classes.root}>  
            {objekt.map(myBooking => 
                <Accordion key={myBooking._id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"id="panel1a-header">
                      <Typography className={classes.heading}>{myBooking.hotel}</Typography>
                      <Typography className={classes.heading}>{myBooking.bookingDates.start}</Typography>
                      <Typography className={classes.heading}>{myBooking._id}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Typography  className={classes.flex} >
                        <Card  className={classes.rootTwo}>
                            <CardContent >
                                <Typography>
                                  <h2 >Information</h2>
                                </Typography>
                                <Typography  className={classes.pos} color="textSecondary">
                                  <p>User Name/Id: {myBooking.userId}</p>
                                  <p>Total Rooms: {myBooking.rooms.length}</p>
                                  <p>Total People: {myBooking.adults + myBooking.children}</p>
                                  <p>Departure Date: {myBooking.flight.departureDate}</p>
                                  <p>Return Date: {myBooking.flight.returnDate}</p>
                                  <p>Extra Bed:  {myBooking.rooms[0].extraBed}</p> 
                                </Typography>
                            </CardContent>
                        </Card>
                      </Typography>
                    </AccordionDetails>
                </Accordion>
                )
            }
            )}
        </div>
  )
}

export default MyBookings