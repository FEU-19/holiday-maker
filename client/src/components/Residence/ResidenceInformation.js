import React from "react"; 
import { Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

// Style variables
const boxContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",

};

const infoContainer = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  width: "240px",
  paddingLeft: "25px",
  paddingTop: "20px",
  paddingBottom: "20px",
  backgroundColor: "#F5F5F5",
  color: "#F23622",
  borderRadius: "10px",
  boxSizing: "border-box",
  boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.14)", 
};

const infoContent = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  color: "#000000",
  boxSizing: "border-box",
};

const textReset = {
  margin: "0",
  padding: "0",
  fontWeight: "bold",
};

const defaultText = {
  margin: "0",
  padding: "0",
  fontStyle: "italic",
};

const check = {
  fontSize: "15px",
  transform: "translateY(3px)",
};

const text = {
  margin: "0",
  padding: "0",
  fontWeight: "bold",
  fontSize: "15px"
};

const ResidenceInformation = ({ info }) => {
  return (
    <div
      className="residence__residenceInformation__boxContainer"
      style={boxContainer}
    >
      <div
        className="residence__residenceInformation__boxContainer__aboutContainer"
        style={infoContainer}
      >
        <Typography variant= "subtitle1" style={textReset}>About</Typography>
        <div
          className="residence__residenceInformation__boxContainer__aboutContent"
          style={infoContent}
        >
          {/*<p style={textReset}>{info.rooms.length} Rooms</p>*/}
          {info.restaurant && (
            <p style={textReset}>
              <CheckIcon style={check} /> Restaurant
            </p>
          )}
          {info.pool && (
            <p style={textReset}>
              <CheckIcon style={check} /> Pool
            </p>
          )}
          {info.nightEntertainment && (
            <p style={textReset}>
              <CheckIcon style={check} /> Night Entertainment
            </p>
          )}
          {!info.restaurant && !info.pool && !info.nightEntertainment && (
            <p style={defaultText}>
              Please contact the residence for more information.
            </p>
          )}
        </div>
      </div>
      <div
        className="residence__residenceInformation__boxContainer__familyContainer"
        style={infoContainer}
      >
        <Typography variant = "subtitle1" style={textReset}>For Family</Typography>
        <div
          className="residence__residenceInformation__boxContainer__familyContent"
          style={infoContent}
        >
          {info.kidsClub && (
            <p style={textReset}>
              <CheckIcon style={check} /> Kids Club
            </p>
          )}
          {!info.kidsClub && (
            <p style={defaultText}>
              Please contact the residence for more information.
            </p>
          )}
        </div>
      </div>
      <div
        className="residence__residenceInformation__boxContainer__nearbyContainer"
        style={infoContainer}
      >
        <Typography variant = "subtitle1" style={textReset}>Nearby</Typography>
        <Typography  component = "p"
          className="residence__residenceInformation__boxContainer__nearbyContent"
          style={infoContent}
        >
          {info.distanceToBeach && (
            <span style={text}>Distance to Beach: {info.distanceToBeach} m</span>
          )}
          {info.distanceToCity && (
            <span style={text}>Distance to City: {info.distanceToCity} m</span>
          )}
          {!info.distanceToBeach && !info.distanceToCity && (
            <span style={defaultText}>
              Please contact the residence for more information.
            </span>
          )}
        </Typography>
      </div>
    </div>
  );
};

export default ResidenceInformation;
