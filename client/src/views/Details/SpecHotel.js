import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import { Grid, Paper, Divider } from "@material-ui/core";
import { useGrid } from "./styles";

const SpecHotel = () => {
  const [hotel, setHotel] = useState({});
  const grid = useGrid();
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/residents/5f4e2b500ae3bf21d48b09f2")
      .then((response) => {
        setHotel(response.data.data);
      });
  }, []);

  console.log(hotel);
  return (
    <div>
      <Paper>
        <Grid
          container
          spacing={2}
          justify="center"
          alignContent="stretch"
          alignItems="center"
        >
          <Grid
            item
            xs={4}
            direction="column"
            alignContent="center"
            justify="center"
          >
            <h1>Hotel Info</h1>
            <p>City: {hotel.city}</p>
            <p>Hotel name: {hotel.name}</p>
            <p>Distance to Beach: {hotel.distanceToBeach}</p>
            <p>Distance to City: {hotel.distanceToCity}</p>
            <p>Pool: {hotel.pool ? "Yes" : "No"}</p>
            <p>
              Night Entertainment: {hotel.nightEntertainment ? "Yes" : "No"}
            </p>
            <p>KidsClub: {hotel.kidsClub ? "Yes" : "No"}</p>
            <p>Restaurant: {hotel.restaurant ? "Yes" : "No"}</p>
            <p>Rating: {hotel.rating}</p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            xs={4}
            direction="column"
            justify="center"
            alignItems="center"
            className={grid.center}
          >
            <p>
              Our rooms have full-, half-board, all-inclusive or self-catering
            </p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={3} direction="column">
            <p>
              Our rooms have full-, half-board, all-inclusive or self-catering
            </p>
          </Grid>
        </Grid>
      </Paper>

      {hotel.rooms ? (
        hotel.rooms.map((room, i) => <Details key={i} room={room} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SpecHotel;
