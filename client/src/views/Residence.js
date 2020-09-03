import React, {useEffect, useState} from "react";
import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import axios from "axios";
const hotel = data[5];



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


  return (
    <div>
      <h1>{hotel.name}</h1>

      <ResidenceInformation info={hotel}/>

      <GeneralInformation info={hotel} />
    </div>
  );
};

export default Residence;
