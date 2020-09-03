import React, { useState } from "react";
import { Grid, Paper, Divider, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useGrid, useTheme } from "./styles";
import Carousel from "./Carousel";
import BookingForm from "./BookingForm";

const Details = ({ room }) => {
  const [openModal, setOpenModal] = useState(false);
  const grid = useGrid();

  console.log(room);

  return (
    <ThemeProvider theme={useTheme}>
      <Paper>
        <Grid
          container
          spacing={2}
          justify="center"
          alignContent="stretch"
          className={grid.rule}
        >
          <Grid item xs={3} className={grid.section} direction="column">
            <Carousel
              openModal={openModal}
              setOpenModal={setOpenModal}
              images={room.images}
            />
            <img
              src={room.images[0]}
              onClick={() => setOpenModal(true)}
              style={{ width: "85%", height: "30%" }}
              alt="A room"
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            xs={5}
            className={grid.section}
            direction="column"
            align="center"
          >
            <BookingForm />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={2} className={grid.section} direction="column">
            PRIS
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs className={grid.section} direction="column">
            <Button>Boka</Button>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Details;
