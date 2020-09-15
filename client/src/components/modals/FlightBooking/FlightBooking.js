import React, { useState } from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

 const flights = [
     {
    // Format: JSON,
    // Standard: REST,
    // Endpoints: url:/api/my_booking/:ordernr,
    // Request method: PUT
    Response: {
        dateTo: '[from (19 sep), to (22 oct)]',
        dateHome:' [from (USA), to (Sweden)]',
        flightNumber: 2,
        flightComany: 'AirFrance',
        destination: '[from (Stockholm), to (Los Angeles)]',
        flightTimeTo: '[from (09:00), to (17:00)]',
        flightTimeHome: '[19:00 (int), to (06:00)]',
        seats: '1'
    }
},
{
    Response: {
        dateTo: '[from (19 sep), to (22 oct)]',
        dateHome: '[from (USA), to (Sweden)]',
        flightNumber: 2,
        flightComany: 'AirFrance',
        destination: '[from (Stockholm), to (Los Angeles)]',
        flightTimeTo: '[from (09:00), to (17:00)]',
        flightTimeHome: '[19:00 (int), to (06:00)]',
        seats: '1'
    }
}]


 const useStyles = makeStyles((theme) => ({
    flightlist: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  }));


const FlightBooking = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

function openModal() {
    setOpen(true)
    console.log(flights)
}

console.log(flights.Response)
    return (
        <div>
           <Button onClick={openModal}>Open Modal</Button> 
      <Dialog  aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Available Flights</DialogTitle>
        <List>
          {flights.map(flight => (
            <ListItem className={classes.flightlist}>  
              <p>{flight.Response.dateTo}</p>
              <p>{flight.Response.dateHome}</p>
              <p>{flight.Response.flightComany}</p>
              <p>{flight.Response.destination}</p>
              <p>{flight.Response.flightTimeTo}</p>
              <p>{flight.Response.flightTimeHome}</p>
              <p>{flight.Response.seats}</p>
              <Button>Book Flight</Button>
              <Button>Cancel</Button>
            </ListItem>
          ))}
        </List>
      </Dialog>
      </div>
    );
}
export default FlightBooking;