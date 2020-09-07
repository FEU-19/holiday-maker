import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
 Card,
 CardHeader,
 CardMedia,
 CardContent,
 Typography,
} from "@material-ui/core";

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
 text: {
  margin: 20,
  fontSize: 16,
  fontWeight: "bolder",
 },
}));

const RoomPrice = ({ roomType, selected ,}) => {
 const classes = useStyle();
 console.log(selected);
 //const finalPrice = roomType.price + price.extras;

 return (
  <Card className={classes.card}>
   <CardHeader
    className={classes.header}
    title={roomType.price + ":-" + " SEK"}
    //title = {selected}
    subheader={"for 1 room for 1 night"}
   />
   <Typography className={classes.text} component="p">
    Today's Price including taxes and fees
   </Typography>
  </Card>
 );
};

export default RoomPrice;
