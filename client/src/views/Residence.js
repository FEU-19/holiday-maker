import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ResidenceInformation from "../components/Residence/ResidenceInformation";
import GeneralInformation from "../components/Residence/GeneralInformation";
import HotelCarousel from "../components/Residence/HotelCarousel";
import RoomCardMapper from "../components/Residence/RoomCardMapper";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useLocation } from "react-router-dom";
import Star from "../components/Residence/Star";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ResidenceSpinner from "../components/Residence/ResidenceSpinner";

const useStyle = makeStyles(() => ({
  article: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
  },
  titlefavouritecontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  favourites: {
    margin: "auto",
    width: 60,
    marginRight: "6px",
    display: "flex",
    justifyContent: "center",
  },
  favouriteDiv: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 36,
    right: 20,
  },
}));

const Residence = () => {
  const classes = useStyle();
  const [value, updateValue] = useState(0);
  const [unfilteredData, updateUnfilteredData] = useState(null);
  const { state } = useLocation();
  const data = state.hotel;
  const dates = state.queryParams.date;
  //const { data._id } = useParams();

  // GET unfiltered hotel object for general information
  useEffect(() => {
    axios.defaults.withCredentials = true;
    if (document.cookie !== null) {
      axios.get(`http://localhost:8080/api/residences/${data._id}/user`).then((response) => {
        const found = response.data.findIndex((hotel) => hotel === data._id);
        updateValue(found === -1 ? 0 : 1);
      });
    }

    axios
      .get(`http://localhost:8080/api/residences/${data._id}`)
      .then((response) => {
        updateUnfilteredData(response.data.data);
      })
      .catch((error) => {
        console.error("An error occured while retrieving data from the server", error);
      });
  }, [data._id]);

  if (!data || !unfilteredData) {
    return (
      <div className={classes.spinner}>
        <ResidenceSpinner />
      </div>
    );
  }

  const onClick = () => {
    axios.defaults.withCredentials = true;
    if (value === 0) {
      axios.post(`http://localhost:8080/api/residences/${data._id}/user`).then((res) => {
        updateValue(1);
        console.log(res);
      });
    } else {
      axios.delete(`http://localhost:8080/api/residences/${data._id}/user`).then((res) => {
        updateValue(0);
      });
    }
  };

  function starRating(rating) {
    let ratingArray = [];
    for (let i = 0; i < rating; i++) {
      ratingArray.push(<StarRateIcon key={i} />);
    }
    return ratingArray;
  }

  return (
    <div className={classes.article}>
      {document.cookie ? (
        <div className={classes.favouriteDiv}>
          <Button variant="contained" color="primary" onClick={onClick}>
            Add to favourites
          </Button>
          <Star hotelId={data._id} value={value} />
        </div>
      ) : (
        <span></span>
      )}

      <div className={classes.titlecontainer}>
        <div className={classes.titlefavouritecontainer}>
          <Typography variant="h3" className={classes.title}>
            {data.name} {starRating(data.rating)}
          </Typography>
        </div>
        <HotelCarousel dataImage={data} />
        <div className={classes.info}>
          <ResidenceInformation info={data} />
        </div>
      </div>
      <div>
        <RoomCardMapper allRooms={data.rooms} dates={dates} />
      </div>
      <div>
        <GeneralInformation generalInfo={unfilteredData} />
      </div>
    </div>
  );
};

export default Residence;
