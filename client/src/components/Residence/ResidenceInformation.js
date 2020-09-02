import React from "react";

// Style variables
const boxContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "700px",
  height: "200px",
};

const infoContainer = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  width: "220px",
  paddingLeft: "25px",
  paddingTop: "20px",
  paddingBottom: "20px",
  marginLeft: "5px",
  marginRight: "5px",
  backgroundColor: "#EAEAEA",
  color: "black",
  borderRadius: "10px",
  boxSizing: "border-box"
};

const infoContent = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  color: "black",
  boxSizing: "border-box"
};

const textReset = {
  margin: "0",
  padding: "0",
};



const ResidenceInformation = ({info}) => {
  return (
    <div className="residence__residenceInformation__boxContainer" style={boxContainer}>
      <div className="residence__residenceInformation__boxContainer__aboutContainer" style={infoContainer}>
        <h3 style={textReset}>About</h3>
        <div className="residence__residenceInformation__boxContainer__aboutContent" style={infoContent}>
          {info.restaurant && <p style={textReset}>Restaurant</p>}
          {info.pool && <p style={textReset}>Pool</p>}
        </div>
      </div>
      <div className="residence__residenceInformation__boxContainer__familyContainer" style={infoContainer}>
        <h3 style={textReset}>For Family</h3>
        <div className="residence__residenceInformation__boxContainer__familyContent" style={infoContent}>
          {info.kidsClub && <p style={textReset}>Kids Club</p>}
        </div>
      </div>
      <div className="residence__residenceInformation__boxContainer__nearbyContainer" style={infoContainer}>
        <h3 style={textReset}>Nearby</h3>
        <div className="residence__residenceInformation__boxContainer__nearbyContent" style={infoContent}>
          {info.distanceToBeach && <p style={textReset}>Distance to Beach: {info.distanceToBeach} m</p>}
          {info.distanceToCity && <p style={textReset}>Distance to City: {info.distanceToCity} m</p>}
        </div>
      </div>
    </div>
  );
};

export default ResidenceInformation;
