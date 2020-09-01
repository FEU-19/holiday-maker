import React from "react";
import data from "../components/Residence/residents.json";
import HotelInformation from "../components/Residence/HotelInformation";
const hotel = data[0];

const Residence = () => {
  console.log(data);


  return <div>
      <h1>{hotel.name}</h1>

      <HotelInformation info={hotel}/>
    </div>;
};

export default Residence;
