import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Typography, Checkbox } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 10,
    //backgroundColor: "rgb(234, 234, 234)",
    backgroundColor: "#9db0c6",
    display: "flex",
    flexDirection: "column",
    //justifyContent: "space-between",
    alignItems: "flex-end",
  },
  header: {
    textAlign: "right",
    paddingBottom: 0,
  },
  text: {
    //margin: 20,
    padding: 16,
    paddingTop:0,
    fontSize: 16,
    fontWeight: "bolder",
    textAlign: "right",
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
        title={totalPrice + ":-" + " SEK"}
        //title = {selected}
        subheader={"for 1 room for 1 night"}
      />
      <Typography className={classes.text} component="p">
        Today's Price including taxes and fees
      </Typography>
      <Checkbox onChange={() => chooseRoom(roomInfo)} />
    </Card>
  );
};

export default RoomPrice;
