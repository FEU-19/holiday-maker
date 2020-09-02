import React, { useState } from "react";
import { Grid, Paper, Divider, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useGrid, useTheme } from "./styles";
import Carousel from "./Carousel";
import DatePicker from "./DatePicker";

const Residence = () => {
  const [openModal, setOpenModal] = useState(false);
  const grid = useGrid();

  // const bookingOptions = [All - Inclusive, Helpension, Halvpension];

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
            <Carousel openModal={openModal} setOpenModal={setOpenModal} />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ajorifSUT7IuwtVpeJJrogHaFE%26pid%3DApi&f=1"
              onClick={() => setOpenModal(true)}
              style={{ width: "85%", height: "30%" }}
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
            <DatePicker />
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

export default Residence;
