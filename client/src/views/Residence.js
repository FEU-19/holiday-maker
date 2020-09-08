import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import data from "../components/Residence/residents.json";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from "../components/Residence/HotelCarousel";
import RoomCardMapper from "../components/Residence/RoomCardMapper";
import ResidenceSpinner from "../components/Residence/ResidenceSpinner";
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
  },
  info: {
    padding: "2vw"
  },
  spinner: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}))

let wait = null;
// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  //const [wait, setWait] = useState(null);
  const classes = useStyle();

  const [data, updateData] = useState({});

  useEffect(() => {
    wait = setTimeout(() => {
      setShouldSpin(true);
    },500);

  axios
   .get("http://localhost:8080/api/residents/5f574c1fee5d854ae893f216")
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



  if (Object.keys(data).length === 0 && !shouldSpin){
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
    <h1 className={classes.title}>{data.name}</h1>
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
