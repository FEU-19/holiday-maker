import React, { useState, useEffect } from "react";

// Style variables
const boxContainer = {
  //width: "600px",
  width: "1305.280",
  padding: "30px 30px 50px 30px",
};

const title = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "319px",
  height: "35px",
  backgroundColor: "lightgrey",
  color: "#464646",
  borderBottom: "1px solid #9a9a9a",
  borderRadius: "4px 4px 0 0",
};

const contentContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  width: "1200px",
  
  //alignSelf: "flex-start",
  //justifyContent: "center",
  //width: "600px",
  backgroundColor: "#EAEAEA",
  color: "#464646",
  borderRadius: "0 0 4px 4px",
};

const content = {
 width: "300px",
 padding: "0 20px 20px 40px",
 color: "#464646",
 boxSizing: "border-box",
};

const headInfo = {
  //width: "600px",
  padding: "30px 40px 20px 40px",
  borderRadius: "0 4px 0 0",
  color: "#464646",
  backgroundColor: "#EAEAEA",
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

/*const subTitleBeds = {
  margin: "0",
  padding: "20px 0 10px 0",
  fontWeight: "bold",
};*/


const GeneralInformation = ({generalInfo}) => {
  const [info, updateInfo] = useState({});

  useEffect(() => {
    const roomInfoObject = extractRoomInfo();
    updateInfo(roomInfoObject);
  },[]);

  // Extract all room information needed to populate information boxes
  function extractRoomInfo(){
    const roomAmount = generalInfo.rooms.length;
    const roomTypesObject = getRoomInfo("type");
    const roomTypes = Object.keys(roomTypesObject);
    const roomSizesObject = getRoomInfo("size");
    const roomSizes = Object.keys(roomSizesObject);

    const totalBeds = generalInfo.rooms.reduce(
      (acc, cur) => {
        return acc + cur.beds;
      },0);

    const totalExtraBeds = generalInfo.rooms.reduce(
      (acc, cur) => {
        return acc + cur.extraBed;
      },0);

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
  }

  // Extracts all unique keys from room object and counts their occurances
  function getRoomInfo(key){
    const tempObject = generalInfo.rooms.reduce(
    (acc, cur) => {
        if (acc[cur[key]]) {
            acc[cur[key]] += 1;
        } else {
          acc[cur[key]] = 1;
        }
        return acc;
      }, {}
    );
    return tempObject;
  }

 // Makes sure nothing is rendered until all data has been processed
  if (Object.keys(info).length === 0){
    return(<p>Loading...</p>);
  }


console.log(info);

  return(
    <div>
      <div className="residence__generalInformationContainer" style={boxContainer}>
        <div className="residence__generalInformationContainer__title" style={title}>
          <h4>Residence Overview</h4>
        </div>
        <div className="residence__generalInformationContainer__headInfo" style={headInfo}>
          <p style={textReset}>This residence has {info.numberOfRooms} rooms.</p>
        </div>
        <div className="residence__generalInformationContainer__contentContainer" style={contentContainer}>
          <div className="residence__generalInformationContainer__contentContainer__content" style={content}>
            <p style={subTitle}>Type of rooms</p>
            {info.roomTypes.map(room => {
              let value = info.roomsOfTypes[room];
              return(
                <p style={textReset}>{value} {room}s</p>
              );
            })}
            </div>
            <div className="residence__generalInformationContainer__contentContainer__content" style={content}>
            <p style={subTitle}>Beds</p>
            <p style={textReset}>{info.totalBeds} Beds</p>
            <p style={textReset}>{info.totalExtraBeds} Extra beds</p>
          </div>
          <div className="residence__generalInformationContainer__contentContainer__content" style={content}>
            <p style={subTitle}>Room sizes</p>
            {info.roomSizes.map(room => {
              let value = info.roomsOfSizes[room];
              return(
                <p style={textReset}>{value} {room} rooms</p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default GeneralInformation;
