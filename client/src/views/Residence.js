import React from "react";
import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
const hotel = data[0];

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  console.log(data);


  return <div>
      <h1>{hotel.name}</h1>

      <ResidenceInformation info={hotel}/>
    </div>;
};

export default Residence;
