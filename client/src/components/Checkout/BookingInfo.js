import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { BookingInfoStyle } from "./PaymentStyles";
import Hotel from "@material-ui/icons/Hotel";
import Flight from "@material-ui/icons/Flight";

function BookingInfo() {
  const style = BookingInfoStyle();

  return (
    <Box className={style.box}>
      <Typography variant="h5" className={style.InfoTitle}>
        Booking Information
      </Typography>
      <Container className={style.container}>
        <Typography component="h3" className={style.title}>
          <Hotel style={{ marginRight: "5px" }} /> Resident
        </Typography>

        <Typography component="div" className={style.boxDiv}>
          <Typography component="ul" className={style.ul}>
            <Typography component="li" className={style.li}>
              Check-In: 2020/09/09
            </Typography>
            <Typography component="li" className={style.li}>
              Check-Out: 2020/09/20
            </Typography>
            <Typography component="li" className={style.li}>
              Room Type: Full-Board
            </Typography>
            <Typography component="li" className={style.li}>
              Rooms: 4
            </Typography>
            <Typography component="li" className={style.li}>
              Adults: 2
            </Typography>
            <Typography component="li" className={style.li}>
              Children: 2
            </Typography>
            <Typography component="li" className={style.li}>
              Extra Bed: 0
            </Typography>
          </Typography>
          <Typography component="hr" className={style.hr} />
          <Typography component="p" className={style.p}>
            Amount: 20000kr
          </Typography>
        </Typography>

        <Typography component="h3" className={style.title}>
          <Flight style={{ marginRight: "5px" }} /> Flight
        </Typography>
        <Typography component="div" className={style.boxDiv}>
          <Typography component="ul" className={style.ul}>
            <Typography component="li" className={style.li}>
              Departure Time:2020/09/08 12:20
            </Typography>
            <Typography component="li" className={style.li}>
              Arrival Time:2020/09/09 14:20
            </Typography>
            <Typography component="li" className={style.li}>
              Departure: Copenhagen
            </Typography>
            <Typography component="li" className={style.li}>
              Destination: Miami
            </Typography>
            <Typography component="li" className={style.li}>
              Adults: 2
            </Typography>
            <Typography component="li" className={style.li}>
              Children: 2
            </Typography>
          </Typography>
          <Typography component="hr" className={style.hr} />
          <Typography component="p" className={style.p}>
            Amount: 22000kr
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
}

export default BookingInfo;
