import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Typography, Checkbox } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: "rgb(234, 234, 234)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  header: {
    textAlign: "right",
  },
  text: {
    margin: 20,
    fontSize: 16,
    fontWeight: "bolder",
  },
}));

const RoomPrice = ({
  roomType,
  selected,
  price,
  extraBed,
  chooseRoom,
  roomInfo,
}) => {
  const classes = useStyle();
  const selectedToInt = parseInt(selected) || 0;
  const extraBedToInt = parseInt(extraBed.extraBedPrice) || 0;
  const totalPrice = price + selectedToInt + extraBedToInt;
  //const finalPrice = roomType.price + price.extras;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        // eslint-disable-next-line
        title={totalPrice + ":-" + " SEK"}
        //title = {selected}
        subheader={"for 1 room for 1 night"}
      />
      <Checkbox onChange={() => chooseRoom(roomInfo)} />
      <Typography className={classes.text} component="p">
        Today's Price including taxes and fees
      </Typography>
    </Card>
  );
};

export default RoomPrice;
