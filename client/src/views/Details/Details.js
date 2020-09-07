import React, { useState } from "react";
import { Grid, Paper, Divider, Button, Checkbox } from "@material-ui/core";

import { useStyle } from "./styles";
import Carousel from "./Carousel";
import BookingForm from "./BookingForm";

const Details = ({
  room,
  handleChange,
  value,
  setValue,
  handleRadioChange,
  handleDropDownChange,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const style = useStyle();

  return (
    <Paper>
      <Grid
        container
        spacing={2}
        justify="center"
        // alignContent="stretch"
        alignItems="center"
        className={style.rule}
      >
        <Grid item xs={3} className={style.section}>
          <Carousel
            openModal={openModal}
            setOpenModal={setOpenModal}
            images={room.images}
          />
          <img
            src={room.images[0]}
            onClick={() => setOpenModal(true)}
            className={style.roomImg}
            alt="A room"
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={3} className={style.section}>
          <p>Type: {room.type}</p>
          <p>Size: {room.size}</p>
          <p>Beds: {room.beds}</p>
          <p>Room-Number: {room.roomNumber}</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
<<<<<<< HEAD
        <Grid item xs={2} className={style.section}>
          <BookingForm room={room} value={value} setValue={setValue} />
=======
        <Grid item xs={5} className={style.section}>
          <BookingForm
            room={room}
            value={value}
            setValue={setValue}
            handleRadioChange={handleRadioChange}
            handleDropDownChange={handleDropDownChange}
          />
>>>>>>> 7c328cd0168240510dc07bef059a89d8da69c0b5
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={2} className={style.section}>
          <p>Price: {room.price} Pecetas</p>
<<<<<<< HEAD
          <p> Extra: {value} Pecetas</p>
          <label>
            Select:
            <Checkbox />
          </label>
=======
          <p> Extra: {value[room.roomNumber]} Pecetas</p>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs className={style.section}>
          <Checkbox
            checked={room.checked}
            onChange={() => handleChange(room.roomNumber)}
          />
>>>>>>> 7c328cd0168240510dc07bef059a89d8da69c0b5
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
