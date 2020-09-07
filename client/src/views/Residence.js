import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import RoomCard from "../components/Residence/RoomCard";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from '../components/Residence/HotelCarousel'
import axios from "axios";
//const hotel = data[0];
//const rooms = data[0].rooms;

const useStyle = makeStyles(() => ({
  article: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  info: {
    
  }

}))

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const classes = useStyle();
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

  //console.log(data);
  //console.log(residence.rooms);


  if (Object.keys(data).length === 0) {
    return (<p>Loading...</p>);
  }

  console.log(data);

  return (
    <div className = {classes.article}>
      <div className = {classes.titlecontainer}>
        <h1 className = {classes.title}>{data.name}</h1>
        <HotelCarousel/>
        <div className = {classes.info}>
          <ResidenceInformation info={data} />
        </div>
      </div>
      <div>
        <RoomCard roomsInfo={data.rooms} />
      </div>
      <div>
        <GeneralInformation generalInfo={data} />
      </div>
    </div>
  );
};

export default Residence;