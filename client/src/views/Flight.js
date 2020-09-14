import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles({
  paper: {
    padding: "24px",
    height: "100%",
  },
  checkoutButton: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw",
  },
});

const departureAirports = ["Malmö MMX", "Stockholm ARN", "Copenhagen CPH"];

const Flight = (props) => {
  const { state } = useLocation();
  const [airport, setAirport] = useState(departureAirports[0]);
  const style = useStyle();

  const { amountOfAdults, amountOfChildren, date } = state.params;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/flights/?checkIn=${date.start}&checkOut=${date.end}&adults=${amountOfAdults}&children=${amountOfChildren}`
      )
      .then((response) => {
        console.log(response);
      });
  }, [amountOfAdults, amountOfChildren, date]);

  function handleAirportChange(event) {
    setAirport(event.target.value);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={style.paper}>
            <Box mb={2}>
              <FormControl variant="outlined">
                <InputLabel id="airport-select-label">Airport</InputLabel>
                <Select
                  labelId="airport-select-label"
                  id="airport-select"
                  value={airport}
                  onChange={handleAirportChange}
                  label="Airport"
                >
                  {departureAirports.map((a) => (
                    <MenuItem value={a}>{a}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}></Box>
          </Paper>
        </Grid>
        <Grid item xs={3} alignItems="flex-end">
          <Paper className={style.paper}>
            <Box m={2}>smol</Box>
          </Paper>
        </Grid>
      </Grid>
      <Button className={style.checkoutButton}>Checkout</Button>
    </Container>
  );
};

export default Flight;
