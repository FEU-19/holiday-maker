import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import { useParams } from "react-router-dom";
import { Grid, Paper, Divider, Button, ThemeProvider } from "@material-ui/core";

import { useStyle, Theme } from "./styles";
import { getImage } from "../../utils/getImage";

const SpecHotel = () => {
  const { id } = useParams();

  const [hotel, setHotel] = useState({});
  const style = useStyle();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/residents/${id}`).then((response) => {
      setHotel(response.data.data);
    });
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        spacing={2}
        justify="center"
        alignContent="stretch"
        alignItems="center"
        className={style.hotelInfoCtn}
      >
        <Grid item md={4} xs={12} className={style.hotelDetails}>
          <h1>{hotel.name}</h1>
          <p>City: {hotel.city}</p>
          <p>Distance to Beach: {hotel.distanceToBeach} m</p>
          <p>Distance to City: {hotel.distanceToCity} m</p>
          <p>Pool: {hotel.pool ? "Yes" : "No"}</p>
          <p>Night Entertainment: {hotel.nightEntertainment ? "Yes" : "No"}</p>
          <p>KidsClub: {hotel.kidsClub ? "Yes" : "No"}</p>
          <p>Restaurant: {hotel.restaurant ? "Yes" : "No"}</p>
          <p>Rating: {hotel.rating}</p>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        {/* <Grid item xs={4} className={style.center}>
            <p>
              Our rooms have full-, half-board, all-inclusive or self-catering
            </p>
          </Grid>
          <Divider orientation="vertical" flexItem /> */}
        <Grid item xs={6} className={style.hotelImgCtn}>
          {hotel.rooms ? (
            <img
              src={getImage(hotel)}
              alt="a beuatiful hotel"
              className={style.hotelImg}
              // style={{ width: "110%", borderRadius: "5px" }}
            />
          ) : (
            <p>a beautiful hotel</p>
          )}
        </Grid>
      </Grid>

      {hotel.rooms ? (
        hotel.rooms.map((room, i) => <Details key={i} room={room} />)
      ) : (
        <h1>Loading...</h1>
      )}

      <Button className={style.sticky} color="primary" variant="contained">
        Checkout
      </Button>
    </ThemeProvider>
  );
};

export default SpecHotel;
