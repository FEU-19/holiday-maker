import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Typography, Checkbox } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    margin: 10,
    backgroundColor: "#e8e8e8",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    //boxShadow:  "3px 3px 4px #162C72",
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
 dates
}) => {

  function calculateNights(){
    let index = dates.start.indexOf("T");

    let dateStartExTime = dates.start.substring(0, index);
    let dateEndExTime = dates.end.substring(0, index);

    let dateStart = new Date(dateStartExTime);
    let dateEnd = new Date(dateEndExTime);

    let differenceInTime = dateEnd.getTime() - dateStart.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  }

 const classes = useStyle();
 const totalPrice = price + roomInfo[selected] + extraBed;
 return (
  <Card elevation={0} className={classes.card}>
   <CardHeader
    className={classes.header}
    title={totalPrice * calculateNights() + ":- SEK"}
    subheader={"for 1 room for " + calculateNights() + " night(s)"}
   />
   <Typography className={classes.text} component="p">
    Today's Price including taxes and fees
   </Typography>
   <Checkbox onChange={() => chooseRoom(roomInfo)} />
  </Card>
 );
};

export default RoomPrice;
