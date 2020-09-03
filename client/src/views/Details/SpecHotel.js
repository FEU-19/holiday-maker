import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import { Grid, Paper, Divider } from "@material-ui/core";
import { useGrid } from "./styles";
import { getImage } from "../../utils/getImage";

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
          <Grid item xs={4}>
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
          <Grid item xs={4} className={grid.center}>
            <p>
              Our rooms have full-, half-board, all-inclusive or self-catering
            </p>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={3}>
            {hotel.rooms ? (
              <img
                src={getImage(hotel)}
                alt="a beuatiful hotel"
                style={{ width: "110%" }}
              />
            ) : (
              <p>a beautiful hotel</p>
            )}
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
