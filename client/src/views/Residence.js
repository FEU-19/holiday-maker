import React, {useEffect, useState} from "react";
import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import RoomCard from "../components/Residence/RoomCard";
const hotel = data[0];
const rooms = data[0].rooms;

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const [residence, updateResidence] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/residents/5f4e2b510ae3bf21d48b0aaf")
      .then(response => {
        console.log(response);
      });
  },[]);

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
