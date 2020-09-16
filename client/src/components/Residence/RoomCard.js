import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import DirectionsCar from "@material-ui/icons/DirectionsCar";

import RoomType from "./RoomType";
import RoomPrice from "./RoomPrice";

const CustomCheckbox = withStyles({
  root: {
   color: "#4AB0BD",
 
   "&$checked": {
    color: "#4AB0BD",
   },
  },
  checked: {},
 })((props) => <Checkbox color="default" {...props} />);
 
 const CustomRadio = withStyles({
  root: {
   color: "#4AB0BD",
   "&$selected": {
    color: "#4AB0BD",
   },
  },
  checked: {},
 })((props) => <Radio color="default" {...props} />);

const useStyle = makeStyles(() => ({
  card: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    marginBottom: 20,
    margintop: 20,
    marginLeft: "3vw",
    marginRight: "3vw",
    backgroundColor: " #F5F5F5",
    boxShadow: " 0 4px 2px -2px #162C72",
  },
  title: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bolder",
    textAlign: "center",
    color: "#000000",
  },
  content: {
    minWidth: 500,
    fontSize: 14,
    padding: 25,
    objectFit: "cover",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  icons: {
    margin: "0.5vw",
    display: "flex",
    alignItems: "center",
    color: "#4AB0BD",
  },
  options: {
    margin: 10,
    borderTopWidth: 1,
    borderColor: "#4AB0BD",
    borderStyle: "solid",
  },
}));

const RoomCard = ({ roomInfo, chooseRoom }) => {
 const classes = useStyle();
 const [value, setValue] = useState({ selected: "selfCatering" });
 const [extraBedValue, setExtraBedValue] = useState(0);
 

 const handleChange = (e) => {
  setValue({ selected: e.target.value });
 };

 const handleCheck = (e) => {
  if (e.target.checked) {
   const toInt = parseInt(e.target.value);
   setExtraBedValue(toInt);
  } else {
   setExtraBedValue(0);
  }
 };

 const { selected } = value;
 return (
  <Card elevation={4} className={classes.card}>
   <RoomType roomType={roomInfo} />
   <CardContent className={classes.content}>
    <Grid container spacing={2} justify="center">
     <Grid className={classes.grid}>
      <Typography className={classes.title}>Included</Typography>
      <Grid className={classes.icons}>
       <Grid item xs={2}>
        <WifiIcon />
       </Grid>
       <Grid>
        <Typography xs={8}>Free Wifi</Typography>
       </Grid>
      </Grid>
      <Grid className={classes.icons}>
       <Grid item xs={2}>
        <FreeBreakfastIcon />
       </Grid>
       <Grid>
        <Typography xs={8}>Free breakfast for 2 people</Typography>
       </Grid>
      </Grid>
      <Grid className={classes.icons}>
       <Grid item xs={2}>
        <DirectionsCar />
       </Grid>
       <Grid>
        <Typography xs={8}>Free parking</Typography>
       </Grid>
      </Grid>
     </Grid>
     <Grid>
      <FormControl component="fieldset">
       <Typography className={classes.title}>Options</Typography>
       <FormControlLabel
        style = {{justifyContent: "space-between"}}
        value={roomInfo.presentCrib}
        control={<CustomCheckbox />}
        onChange={handleCheck}
        disabled={roomInfo.presentCrib ? false : true}
        label={
          roomInfo.presentCrib ? (
         <p style={{ paddingRight: "10vw" }} >Crib: 100:- {roomInfo.presentCrib}</p>
        ) : (
          <p style={{ paddingRight: "10vw" }}>Crib: {"N/A"}</p>
          )
        } 
        labelPlacement="start"
       />
       <FormControlLabel
        style = {{justifyContent: "space-between"}}
        value={roomInfo.extraBed}
        control={<CustomCheckbox />}
        onChange={handleCheck}
        label={
         <p style={{ paddingRight: "10vw" }} >Extra Bed: {roomInfo.extraBed}</p>
        }
        labelPlacement="start"
       />
       <RadioGroup
        aria-label="price"
        name="price"
        value={selected}
        onChange={handleChange}
       >
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd" , justifyContent: "space-between" }}
         value= "allInclusive"
         control={<CustomRadio />}
         disabled={roomInfo.allInclusive ? false : true}
         label={
          roomInfo.allInclusive ? (
           <p style={{ paddingRight: "10vw" }}>
            All Inclusive: {roomInfo.allInclusive + ":-"}
           </p>
          ) : (
           <p style={{ paddingRight: "10vw" }}>All Inclusive: {"N/A"}</p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd", justifyContent: "space-between" }}
         value="fullBoard"
         control={<CustomRadio />}
         disabled={roomInfo.fullBoard ? false : true}
         label={
          roomInfo.fullBoard ? (
           <p style={{ paddingRight: "10vw" }}>
            Full Board: {roomInfo.fullBoard + ":-"}
           </p>
          ) : (
           <p style={{ paddingRight: "10vw" }}>Full Board: {"N/A"}</p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd", justifyContent: "space-between" }}
         value="halfBoard"
         control={<CustomRadio />}
         disabled={roomInfo.halfBoard ? false : true}
         label={
          roomInfo.halfBoard ? (
           <p style={{ paddingRight: "10vw" }}>
            Half Board: {roomInfo.halfBoard + ":-"}
           </p>
          ) : (
           <p style={{ paddingRight: "10vw" }}>Half Board: {"N/A"}</p>
          )
         }
         labelPlacement="start"
        />
        <FormControlLabel
         style={{ borderTop: "1px solid #ccd9dd", justifyContent: "space-between" }}
         value="selfCatering"
         control={<CustomRadio />}
         label={
          roomInfo.selfCatering || (
           <p style={{ paddingRight: "10vw" }}>
            Self Catering: {roomInfo.selfCatering + ":-"}
           </p>
          )
         }
         labelPlacement="start"
        />
       </RadioGroup>
      </FormControl>
     </Grid>
    </Grid>
   </CardContent>
   <RoomPrice
    roomType={roomInfo}
    price={roomInfo.price}
    selected={selected}
    extraBed={extraBedValue}
    chooseRoom={chooseRoom}
    roomInfo={roomInfo}
   />
  </Card>
 );
};

export default RoomCard;
