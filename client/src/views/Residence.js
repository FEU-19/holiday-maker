import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from "../components/Residence/HotelCarousel";
import RoomCardMapper from "../components/Residence/RoomCardMapper";
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
  },
  info: {
    padding: "2vw",
  },
}));

// Hotel ID will come as props from search team, but not yet implemented
const Residence = () => {
  const classes = useStyle();
  const [data, updateData] = useState(null);
  const { hotelId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${hotelId}`)
      .then((response) => {
        updateData(response.data.data);
      })
      .catch((error) => {
        console.error(
          "An error occured while retrieving data from the server",
          error
        );
      });
  }, [hotelId]);

  if (!data) {
    return <p>Loading...</p>;
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
