import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
 Card,
 CardHeader,
 CardContent,
 Typography,
 TableCell,
 Table,
} from "@material-ui/core";
import ModalDialogBook from "./ModalDialogBook";

const useStyle = makeStyles(() => ({
 card: {
  maxWidth: 345,
  margin: 10,
  backgroundColor: "rgb(234, 234, 234)",
  display: "flex",
  flexDirection: "column",
  //justifyContent: "space-between",
  alignItems: "flex-end",
 },
 header: {
    textAlign:"right",
    paddingBottom: 0,
 },
 text: {
  padding: 16,
  paddingTop: 0,
  fontSize: 16,
  fontWeight: "bolder",
  textAlign:"right",
 },
 container: {
   margin: "0 auto",
   padding: "20px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   overflow: "auto",
   paddingTop: 260,
   padding: 0,
 },
 button: {
   overflow: "auto",

 },
}));

const RoomPrice = ({ roomType, selected, price, extraBed }) => {
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
    subheader={"for 1 room for 1 night"}
   />
   <Typography className={classes.text}  component="p">
         Today's Price including taxes and fees
   </Typography>
   <CardContent className = {classes.container}>
      <ModalDialogBook className = {classes.button}/>
   </CardContent>

   
  </Card>
 );
};

export default RoomPrice;
