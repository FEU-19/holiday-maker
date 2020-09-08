import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
 Card,
 CardHeader,
 CardMedia,
 CardContent,
 Typography,
} from "@material-ui/core";
import ModalDialogButton from './ModalDialogButton'


const useStyle = makeStyles(() => ({
 card: {
  maxWidth: 345,
  minWidth: 316,
  margin: 10,
  backgroundColor: "rgb(234, 234, 234)",
 },
 media: {
  height: 0,
  paddingTop: "56.25%",
  margin: 20,
 },
}));

const RoomType = ({ roomType }) => {
 const classes = useStyle();
 console.log(roomType);

 return (
  <Card className={classes.card}>
   <CardHeader className={classes.header} title={roomType.type} />
   <CardMedia
    className={classes.media}
    title={roomType.type}
    image={roomType.images[0]}
   />
   <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
     Room Number: {roomType.roomNumber}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
     Size: {roomType.size}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
     Beds: {roomType.beds}
    </Typography>
    <ModalDialogButton images={roomType.images}/>
   </CardContent>
  </Card>
 );
};

export default RoomType;
