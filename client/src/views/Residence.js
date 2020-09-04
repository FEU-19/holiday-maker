import React, {useEffect, useState} from "react";
//import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import RoomCard from "../components/Residence/RoomCard";
import HotelCarousel from '../components/Residence/HotelCarousel'
import GeneralInformation from "../components/Residence/GeneralInformation";
import axios from "axios";
const hotel = data[0];
const rooms = data[0].rooms;



// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const [data, updateData] = useState({});


  useEffect(() => {
    axios.get("http://localhost:8080/api/residents/5f4e2b510ae3bf21d48b0aaf")
      .then(response => {
        updateData(response.data.data);
      })
      .catch(error => {
        console.error("An error occured while retrieving data from the server", error);
      });
  },[]);

  //console.log(data);
  //console.log(residence.rooms);


  if (Object.keys(data).length === 0){
    return(<p>Loading...</p>);
  }

  console.log(data);

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <HotelCarousel/>
        <ResidenceInformation info={data}/>
      </div>
      <div>
        <RoomCard roomsInfo = {data.rooms}/>
      </div>
      <div>
        <GeneralInformation generalInfo={data} />
      </div>
    </div>
  );
};

export default Residence;
