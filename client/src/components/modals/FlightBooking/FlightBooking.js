import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

 const flights = [
{
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
    },
      
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
  },
},
{ 
    Response: {
        dateTo: 'from 11 dec, to 12 dec',
        dateHome: 'from 5 jan, to 6 jan',
        flightNumber: '2',
        flightComany: 'AirFrance',
        destination: 'from Los Angeles, to Stockholm',
        flightTimeTo: 'from 13:00, to 21:00',
        flightTimeHome: 'from 11:00, to 15:00',
        seats: '1'
  },
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
  },
}]

 const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
    table: {
      minWidth: 650,
    },
    button: {
      width: '100px'
    }
  }));

const FlightBooking = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  axios
  .get(`http://localhost:8080/api/flights`)
  .then((res) => {
    console.log("flights res ", res);
  })

  const classes = useStyles();

    return (
        <div>
          <Button onClick={handleOpen}>Book Flight</Button> 
          <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            <TableContainer component={Paper}>
             <Table className={classes.paper} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Flight Home</TableCell>
                  <TableCell align="right">Flight Number</TableCell>
                  <TableCell align="right">Flight Comany</TableCell>
                  <TableCell align="right">Destination</TableCell>
                  <TableCell align="right">Flight Time</TableCell>
                  <TableCell align="right">Flight Time Home</TableCell>
                  <TableCell align="right">Seats</TableCell>
                  <Button onClick={handleClose} className={classes.button}>X</Button>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((flight) => (
                  <TableRow>
                    <TableCell align="right" component="th" scope="row">
                      {flight.Response.dateTo}
                    </TableCell>
                    <TableCell align="right">{flight.Response.dateHome}</TableCell>
                    <TableCell align="right">{flight.Response.flightNumber}</TableCell>
                    <TableCell align="right">{flight.Response.flightComany}</TableCell>
                    <TableCell align="right">{flight.Response.destination}</TableCell>
                    <TableCell align="right">{flight.Response.flightTimeTo}</TableCell>
                    <TableCell align="right">{flight.Response.flightTimeHome}</TableCell>
                    <TableCell align="right">{flight.Response.seats}</TableCell>
                    <Button align="right">Book Flight</Button>
                  </TableRow>
                ))}
              </TableBody>
             </Table>
            </TableContainer>
          </Modal>  
        </div>
    );
}
export default FlightBooking;