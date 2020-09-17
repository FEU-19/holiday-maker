import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { BookingInfoStyle } from "./PaymentStyles";
import Hotel from "@material-ui/icons/Hotel";
import Flight from "@material-ui/icons/Flight";

function BookingInfo({ info }) {
  const style = BookingInfoStyle();

  console.log(info);

  return (
    <Box className={style.box}>
      <Typography variant="h5" className={style.InfoTitle}>
        Booking Information
      </Typography>
      <Container className={style.container}>
        <Typography component="h3" className={style.title}>
          <Hotel style={{ marginRight: "5px" }} /> Hotel
        </Typography>

        <Typography component="div" className={style.boxDiv}>
          <Typography component="ul" className={style.ul}>
            <Typography component="li" className={style.li}>
              {new Date(info.queryParams.date.start).toLocaleDateString(
                "sv-SE"
              )}
            </Typography>
            <Typography component="li" className={style.li}>
              {new Date(info.queryParams.date.end).toLocaleDateString("sv-SE")}
            </Typography>
            <Typography component="li" className={style.li}>
              Rooms: {info.rooms.length}
            </Typography>
            <Typography component="li" className={style.li}>
              Adults: {info.queryParams.amountOfAdults}
            </Typography>
            <Typography component="li" className={style.li}>
              Children: {info.queryParams.amountOfChildren}
            </Typography>
          </Typography>
          <Typography component="hr" className={style.hr} />
          <Typography component="p" className={style.p}>
            Amount: {info.rooms.reduce((sum, room) => sum + room.price, 0)}
          </Typography>
        </Typography>

        <Typography component="h3" className={style.title}>
          <Flight style={{ marginRight: "5px" }} /> Flight
        </Typography>
        <Typography component="div" className={style.boxDiv}>
          {info.flight ? (
            <React.Fragment>
              <Typography component="ul" className={style.ul}>
                <Typography component="li" className={style.li}>
                  Departure Date:
                  {new Date(info.flight.departureDate).toLocaleString("sv-SE")}
                </Typography>
                <Typography component="li" className={style.li}>
                  Return Date:
                  {new Date(info.flight.returnDate).toLocaleString("sv-SE")}
                </Typography>
                <Typography component="li" className={style.li}>
                  Departure: {info ? info.flight.firstAirport : "---"}
                </Typography>
                <Typography component="li" className={style.li}>
                  Destination: {info.flight.finalAirport}
                </Typography>
              </Typography>
              <Typography component="hr" className={style.hr} />
              <Typography component="p" className={style.p}>
                Amount: {info.flight.price}
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h6">Continued without flight</Typography>
          )}
        </Typography>
        <Typography variant="h5" component="h5" className={style.TotalAmount}>
          Total:{" "}
          {info.flight
            ? info.flight.price +
              info.rooms.reduce((sum, room) => sum + room.price, 0)
            : info.rooms.reduce((sum, room) => sum + room.price, 0)}
          :-
        </Typography>
      </Container>
    </Box>
  );
}

export default BookingInfo;
