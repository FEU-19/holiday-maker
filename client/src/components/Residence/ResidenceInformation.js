import React, { useEffect, useState } from "react";

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

const defaultText = {
  margin: "0",
  padding: "0",
  fontStyle: "italic"
}



const ResidenceInformation = ({info}) => {
  const [roomInfo, updateRoomInfo] = useState({});

  useEffect(() => {
   const roomAmount = info.rooms.length;
   const roomTypesObject = findRoomTypes();

   const roomTypes = Object.keys(roomTypesObject);



   const roomInfoObject = {
     numberOfRooms: roomAmount,
     roomsOfTypes: roomTypesObject,
     roomTypes: roomTypes,
   };

   updateRoomInfo(roomInfoObject);

  }, [] );

  function findRoomTypes(){
    const roomTypesObject = info.rooms.reduce(
    (acc, cur) => {
        if (acc[cur.type]) {
            acc[cur.type] += 1;
        } else {
          acc[cur.type] = 1;
        }
        return acc;
      }, {}
    );


    console.log(roomTypesObject);
    return roomTypesObject;
  }

  console.log(roomInfo);

  return (
    <div className="residence__residenceInformation__boxContainer" style={boxContainer}>
      <div className="residence__residenceInformation__boxContainer__aboutContainer" style={infoContainer}>
        <h3 style={textReset}>About</h3>
        <div className="residence__residenceInformation__boxContainer__aboutContent" style={infoContent}>
          {info.restaurant && <p style={textReset}>Restaurant</p>}
          {info.pool && <p style={textReset}>Pool</p>}
          {info.nightEntertainment && <p style={textReset}>Night Entertainment</p>}
          {!info.restaurant && !info.pool && !info.nightEntertainment && <p style={defaultText}>Please contact the residence for more information.</p>}
        </div>
      </div>
      <div className="residence__residenceInformation__boxContainer__familyContainer" style={infoContainer}>
        <h3 style={textReset}>For Family</h3>
        <div className="residence__residenceInformation__boxContainer__familyContent" style={infoContent}>
          {info.kidsClub && <p style={textReset}>Kids Club</p>}
          {!info.kidsClub && <p style={defaultText}>Please contact the residence for more information.</p>}
        </div>
      </div>
      <div className="residence__residenceInformation__boxContainer__nearbyContainer" style={infoContainer}>
        <h3 style={textReset}>Nearby</h3>
        <div className="residence__residenceInformation__boxContainer__nearbyContent" style={infoContent}>
          {info.distanceToBeach && <p style={textReset}>Distance to Beach: {info.distanceToBeach} m</p>}
          {info.distanceToCity && <p style={textReset}>Distance to City: {info.distanceToCity} m</p>}
          {!info.distanceToBeach && !info.distanceToCity && <p style={defaultText}>Please contact the residence for more information.</p>}
        </div>
      </div>
    </div>
  );
};

export default ResidenceInformation;
