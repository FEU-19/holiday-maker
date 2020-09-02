import React from "react";
import data from "../components/Residence/residents.json";
import HotelInformation from "../components/Residence/HotelInformation";
import RoomCard from "../components/Residence/RoomCard";
const hotel = data[0];
const rooms = data[0].rooms;

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  console.log(data);


  return <div>
    <div>
      <h1>{hotel.name}</h1>

      <ResidenceInformation info={hotel}/>
    </div>;
    <div>
    <RoomCard roomsInfo = {rooms}/>
    </div>
  </div>
};

export default Residence;
import React from "react";
import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
const hotel = data[0];
const room = data[0]

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  console.log(data);


  return <div>
      <div>
        <h1>{hotel.name}</h1>

        <ResidenceInformation info={hotel}/>
      </div>
      <div>
        <RoomCard  roominfo = {room}/>
      </div>
    </div>
};

export default Residence;