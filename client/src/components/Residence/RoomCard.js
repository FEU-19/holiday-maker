import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
 Grid,
 FormControlLabel,
 Checkbox,
 FormControl,
 RadioGroup,
 Radio,
} from "@material-ui/core";
import { Card, CardContent, Typography } from "@material-ui/core";
import WifiIcon from "@material-ui/icons/Wifi";
import DirectionsCar from "@material-ui/icons/DirectionsCar";

import RoomType from "./RoomType";
import RoomPrice from "./RoomPrice";

const useStyle = makeStyles(() => ({
 card: {
  position: "relative",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  margintop: 20,
  marginBottom: 20,
  // marginLeft: "20vw",
  // marginRight: "20vw",
 },
 title: {
  marginTop: 5,
  marginBottom: 20,
  fontSize: 16,
  fontWeight: "bolder",
 },
 content: {
  minWidth: 500,
  fontSize: 14,
  padding: 25,
  objectFit: "cover",
 },
 icons: {
  margin: 10,
  display: "flex",
  alignItems: "center",
 },
 options: {
  margin: 10,
  borderTopWidth: 1,
  borderColor: "#ccd9dd",
  borderStyle: "solid",
 },
}));

const RoomCard = ({ roomsInfo }) => {
 const classes = useStyle();
 const [value, setValue] = useState({});
 const roomInfo = roomsInfo[0];
 console.log();

 const handleChange = (event) => {
  setValue(event.target.value);
 };

 return (
  <Card className={classes.card}>
   <RoomType roomType={roomInfo} />
   <CardContent className={classes.content}>
    <Typography className={classes.title}>Options</Typography>
    <Grid container spacing={2} justify="center">
     <Grid className={classes.icons}>
      <Grid item xs={4}>
       <WifiIcon />
      </Grid>
      <Grid>
       <Typography item xs={8}>
        Free Wifi
       </Typography>
      </Grid>
     </Grid>
     <Grid className={classes.icons}>
      <Grid item xs={4}>
       <DirectionsCar />
      </Grid>
      <Grid>
       <Typography item xs={8}>
        Free parking
       </Typography>
      </Grid>
     </Grid>
     <Grid>
      <FormControl conponent="fieldset">
       <FormControlLabel
        value="extraBed"
        control={<Checkbox color="primary" />}
        label={
         <p style={{ paddingRight: "10vw" }}>Extra Bed: {roomInfo.extraBed}</p>
        }
        labelPlacement="start"
       />
       <RadioGroup
        aria-label="price"
        name="price"
        value={value}
        onChange={handleChange}
       >
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd" }}
         value="allInclusive"
         control={<Radio color="default" />}
         label={
          roomInfo["all-inclusive"] && (
           <p style={{ paddingRight: "10vw" }}>
            All Inclusive: {roomInfo["all-inclusive"]}
           </p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd" }}
         value="fullBoard"
         control={<Radio color="default" />}
         label={
          roomInfo["full-board"] && (
           <p style={{ paddingRight: "10vw" }}>
            Full board: {roomInfo["full-board"]}
           </p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd" }}
         value="half-board"
         control={<Radio color="default" />}
         label={
          roomInfo["half-board"] && (
           <p style={{ paddingRight: "10vw" }}>
            Half board: {roomInfo["half-board"]}
           </p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd" }}
         value="selfCatring"
         control={<Radio color="default" />}
         label={
          roomInfo["self-catering"] && (
           <p style={{ paddingRight: "10vw" }}>
            Half board: {roomInfo["half-board"]}
           </p>
          )
         }
         labelPlacement="start"
        />
       </RadioGroup>
      </FormControl>
     </Grid>
    </Grid>
    {/*<Typography component = "span" > 
                    <Grid className = {classes.options}>
                        {roomInfo.extraBed && <p>Extra Bed: {roomInfo.extraBed}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["all-inclusive"] && <p>All Inclusive: {roomInfo["all-inclusive"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["full-board"] && <p>Full board: {roomInfo["full-board"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["half-board"] && <p>Half board: {roomInfo["half-board"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["self-catring"] && <p>Self catering: {roomInfo["self-catring"]}</p>}
                    </Grid>
                </Typography>*/}
   </CardContent>
   <RoomPrice roomType={roomInfo} />
  </Card>
 );
};

export default RoomCard;
