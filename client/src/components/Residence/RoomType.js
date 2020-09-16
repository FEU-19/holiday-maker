import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
 Card,
 CardHeader,
 CardMedia,
 CardContent,
 Typography,
 Grid,
} from "@material-ui/core";
import ModalDialogButton from "./ModalDialogButton";

const useStyle = makeStyles(() => ({
  card: {
    maxWidth: 345,
    minWidth: 316,
    margin: 10,
    backgroundColor: "#e8e8e8",
    //boxShadow: "3px 3px 4px #162C72",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    margin: 15,
    marginTop: 0,
    borderRadius: "4px",
  },
  container: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
 }
}));

const RoomType = ({ roomType }) => {
 const classes = useStyle();

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
    <Grid className={classes.container}>
     <ModalDialogButton className={classes.button} images={roomType.images} />
    </Grid>
   </CardContent>
  </Card>
 );
};

export default RoomType;
