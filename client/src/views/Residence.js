import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from "../components/Residence/HotelCarousel";
import RoomCardMapper from "../components/Residence/RoomCardMapper";
import ResidenceSpinner from "../components/Residence/ResidenceSpinner";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    color: "#F23622",
    padding: "2vw",
  },
  info: {
    padding: "2vw",
  },
  spinner: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}));

let wait = null;
// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  const classes = useStyle();
  const [data, updateData] = useState(null);
  const { hotelId } = useParams();


  useEffect(() => {
    wait = setTimeout(() => {
      setShouldSpin(true);
    },500);

    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((response) => {
        updateData(response.data.data);
      })
      .then(() => {
       clearTimeout(wait);
       wait = null;
       setShouldSpin(false);
     })
     .catch((error) => {
      console.error(
       "An error occured while retrieving data from the server",
       error
      );
     });
    }, []);


    if (!data && !shouldSpin){
     return <div />;
   }

   if (shouldSpin){
       return (
         <div className={classes.spinner}>
           <ResidenceSpinner />
         </div>);
   }

  return (
    <div className={classes.article}>
      <div className={classes.titlecontainer}>
        <Typography variant = "h3" className={classes.title}>{data.name}</Typography>
        <HotelCarousel dataImage={data} />
        <div className={classes.info}>
          <ResidenceInformation info={data} />
        </div>
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
