import React from "react";
import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import RoomCard from "../components/Residence/RoomCard";
import HotelCarousel from '../components/Residence/HotelCarousel'
const hotel = data[0];
const rooms = data[0].rooms;


// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {

  return <div>
    <div>
      <h1>{hotel.name}</h1>
      <HotelCarousel/>
      <ResidenceInformation info={hotel}/>
    </div>;
    <div>
    <RoomCard roomsInfo = {rooms}/>
    </div>
  </div>
};

export default Residence;