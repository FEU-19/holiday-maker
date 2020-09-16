import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

// Style variables
const boxContainer = {
  padding: "30px 30px 50px 30px",
  width:"1305.280", 
};

const title = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: '319px',
  height: "35px",
  backgroundColor: "#F23622",
  color: "white",
  borderBottom: "1px solid #9a9a9a",
  borderRadius: "4px 4px 0 0",
};

const box = {
  boxShadow: " 0 4px 2px -2px #263d69",
};

const contentContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  backgroundColor: "#F5F5F5",
  borderRadius: "0 0 4px 4px",
  
};

const content = {
  width: "300px",
  padding: "0 20px 20px 40px",
  boxSizing: "border-box",
  
};

const headInfo = {
  padding: "30px 40px 20px 40px",
  borderRadius: "0 4px 0 0",
  backgroundColor: "#F5F5F5",
  boxSizing: "border-box",
};

const textReset = {
 margin: "0",
 padding: "0",
};

const subTitle = {
 margin: "0",
 padding: "0 0 10px 0",
 fontWeight: "bold",
};

function getRoomInfo(key, generalInfo) {
 const tempObject = generalInfo.rooms.reduce((acc, cur) => {
  if (acc[cur[key]]) {
   acc[cur[key]] += 1;
  } else {
   acc[cur[key]] = 1;
  }
  return acc;
 }, {});
 return tempObject;
}

const GeneralInformation = ({ generalInfo }) => {
 const [info, updateInfo] = useState({});

 // Extract all room information needed to populate information boxes
 const extractRoomInfo = useCallback(() => {
  const roomAmount = generalInfo.rooms.length;
  const roomTypesObject = getRoomInfo("type", generalInfo);
  const roomTypes = Object.keys(roomTypesObject);
  const roomSizesObject = getRoomInfo("size", generalInfo);
  const roomSizes = Object.keys(roomSizesObject);

  const totalBeds = generalInfo.rooms.reduce((acc, cur) => {
   return acc + cur.beds;
  }, 0);

  const totalExtraBeds = generalInfo.rooms.reduce((acc, cur) => {
   return acc + cur.extraBed;
  }, 0);

  const roomInfoObject = {
   numberOfRooms: roomAmount,
   roomsOfTypes: roomTypesObject,
   roomTypes: roomTypes,
   roomsOfSizes: roomSizesObject,
   roomSizes: roomSizes,
   totalBeds: totalBeds,
   totalExtraBeds: totalExtraBeds,
  };
  return roomInfoObject;
 }, [generalInfo]);

 useEffect(() => {
  const roomInfoObject = extractRoomInfo();
  updateInfo(roomInfoObject);
 }, [extractRoomInfo]);

 // Extracts all unique keys from room object and counts their occurances

 // Makes sure nothing is rendered until all data has been processed
 if (Object.keys(info).length === 0) {
  return <p>Loading...</p>;
 }

 return (
  <div>
   <div className="residence__generalInformationContainer" style={boxContainer}>
    <div
     className="residence__generalInformationContainer__title"
     style={title}
    >
      <Typography variant = "h6" >Residence Overview</Typography>
    </div>
    <div className = "residence__generialInformationContainer__box"
      style = {box}>
    <Typography
     className="residence__generalInformationContainer__headInfo"
     style={headInfo}
    >
     <p style={textReset}>
      This residence has {info.numberOfRooms} rooms, {info.totalBeds} Beds and{" "}
      {info.totalExtraBeds} Extra beds.
     </p>
    </Typography>
    <div
     className="residence__generalInformationContainer__contentContainer"
     style={contentContainer}
    >
     <Typography
      className="residence__generalInformationContainer__contentContainer__content"
      style={content}
     >
      <p style={subTitle}>Type of rooms</p>
      {info.roomTypes.map((room) => {
       let value = info.roomsOfTypes[room];
       return (
        <p key={uuidv4()} style={textReset}>
         {value} {room}s
        </p>
       );
      })}
     </Typography>
     <Typography variant="body2" color="textSecondary" component="p"
      className="residence__generalInformationContainer__contentContainer__content"
      style={content}
     >
      <p style={subTitle}>Beds</p>
      <p style={textReset}>{info.totalBeds} Beds</p>
      <p style={textReset}>{info.totalExtraBeds} Extra beds</p>
     </Typography>
     <Typography
      className="residence__generalInformationContainer__contentContainer__content"
      style={content}
     >
      <p style={subTitle}>Room sizes</p>
      {info.roomSizes.map((room) => {
       let value = info.roomsOfSizes[room];
       return (
        <p key={uuidv4()} style={textReset}>
         {value} {room} rooms
        </p>
       );
      })}
     </Typography>
    </div>
    </div>
   </div>
  </div>
 );
};

export default GeneralInformation;
