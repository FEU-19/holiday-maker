import React, { useEffect, useState } from "react";
import {box} from "@material-ui/core/box";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from '../components/Residence/HotelCarousel';
import RoomCardMapper from '../components/Residence/RoomCardMapper';
import axios from "axios";


// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const [data, updateData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/residents/5f5230fbfd504a310c818546")
      .then(response => {
        updateData(response.data.data);
      })
      .catch(error => {
        console.error("An error occured while retrieving data from the server", error);
      });
  }, []);

  if (Object.keys(data).length === 0) {
    return (<p>Loading...</p>);
  }

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <HotelCarousel/>
        <ResidenceInformation info={data} />
      </div>
      <div>
        <RoomCardMapper allRooms={data.rooms} />
      </div>
      <div>
        <GeneralInformation generalInfo={data} />
      </div>
    </div>
  );
};

export default Residence;
