import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from "../components/Residence/HotelCarousel";
import RoomCardMapper from "../components/Residence/RoomCardMapper";
import StarRateIcon from '@material-ui/icons/StarRate';
import { useParams, useLocation } from "react-router-dom";
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


const Residence = () => {
  const classes = useStyle();
  const [unfilteredData, updateUnfilteredData] = useState(null);
  const {state} = useLocation();
  const data = state.hotel;
  //const { hotelId } = useParams();

 // GET unfiltered hotel object for general information
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/residences/${data._id}`)
      .then((response) => {
        updateUnfilteredData(response.data.data);
      })
     .catch((error) => {
      console.error(
       "An error occured while retrieving data from the server",
       error
      );
     });
    }, []);

    if (!data || !unfilteredData){
      return <div />
    }

  function starRating(rating){
    let ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push(<StarRateIcon key={i}/>);
    }
    return ratingArray;
  }

  return (
    <div className={classes.article}>
      <div className={classes.titlecontainer}>
        <Typography variant = "h3" className={classes.title}>{data.name} {starRating(data.rating)}</Typography>
        <HotelCarousel dataImage={data} />
        <div className={classes.info}>
          <ResidenceInformation info={data} />
        </div>
      </div>
      <div>
        <RoomCardMapper allRooms={data.rooms} />
      </div>
      <div>
        <GeneralInformation generalInfo={unfilteredData} />
      </div>
    </div>
  );
};

export default Residence;
