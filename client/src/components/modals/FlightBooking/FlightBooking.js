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
        dateTo: 'from 19 sep, to 20 sep',
        dateHome:' from 27 oct, to 27 oct',
        flightNumber: '2',
        flightComany: 'AirFrance',
        destination: 'from Stockholm, to Los Angeles',
        flightTimeTo: 'from 09:00, to 17:00',
        flightTimeHome: '19:00, to 06:00',
        seats: '1'
    }
},
{
    Response: {
        dateTo: 'from 10 dec, to 11 dec',
        dateHome: 'from 4 jan, to 5 jan',
        flightNumber: '2',
        flightComany: 'AirFrance',
        destination: 'from Los Angeles, to Stockholm',
        flightTimeTo: 'from 13:00, to 21:00',
        flightTimeHome: 'from 11:00, to 15:00',
        seats: '1'
    }
}]


 const useStyles = makeStyles((theme) => ({
    flightlist: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      fontSize: '15px',
      margin: '5px',
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
              <p className={classes.flightlist}>{flight.Response.dateTo}</p>
              <p className={classes.flightlist}>{flight.Response.dateHome}</p>
              <p className={classes.flightlist}>{flight.Response.flightComany}</p>
              <p className={classes.flightlist}>{flight.Response.destination}</p>
              <p className={classes.flightlist}>{flight.Response.flightTimeTo}</p>
              <p className={classes.flightlist}>{flight.Response.flightTimeHome}</p>
              <p className={classes.flightlist}>{flight.Response.seats}</p>
                <Button>Book Flight</Button>
            </ListItem>
          ))}
        </List>
        <Button>Cancel</Button>
      </Dialog>
      </div>
    );
}
export default FlightBooking;