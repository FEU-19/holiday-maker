import React, { useState } from "react";
import { Grid, Paper, Divider, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useGrid, useTheme } from "./styles";
import Carousel from "./Carousel";
const Residence = () => {
  const [openModal, setOpenModal] = useState(false);
  const grid = useGrid();

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
          <Grid item xs={3} className={grid.section}>
            <Carousel openModal={openModal} setOpenModal={setOpenModal} />
            <Button onClick={() => setOpenModal(true)}>Modal</Button>
            Stfu
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={5} className={grid.section}></Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={2} className={grid.section}>
            Stfu
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs className={grid.section}>
            Stfu
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Residence;
