import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Typography, Checkbox } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    boxShadow:  "3px 3px 4px #162C72",
  },
  header: {
    textAlign: "right",
    paddingBottom: 0,
  },
  text: {
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
    title={totalPrice + ":- SEK"}
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
