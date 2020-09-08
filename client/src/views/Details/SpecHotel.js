import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import { useParams, Redirect } from "react-router-dom";
import { Grid, Paper, Divider, Button, ThemeProvider } from "@material-ui/core";

import { useStyle, Theme } from "./styles";
import { getImage } from "../../utils/getImage";

const parser = {
  allInclusive: "All Inclusive",
  halfBoard: "Half Board",
  fullBoard: "Full Board",
  selfCatering: "Self Catering",
};

const APIWrapper = (props) => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/residents/${id}`).then((response) => {
      setData({
        ...response.data.data,
        rooms: response.data.data.rooms.map((room) => ({
          ...room,
          checked: false,

          order: {
            option: 0,
            extraBed: "",
            fullPrice: parseInt(room.price),
          },
        })),
      });
    });
  }, []);
  console.log("APIWRAPPER RERENDERS");
  return data ? <SpecHotel data={data} hotelId={id} /> : <div>loading</div>;
};

const SpecHotel = ({ data, hotelId }) => {
  const [redirect, setRedirect] = useState({ redirect: false, data: null });
  const [value, setValue] = useState({});
  const [extraBed, setExtraBed] = useState();
  const [hotel, setHotel] = useState(data);
  const style = useStyle();

  const handleChange = (roomNumber) => {
    setHotel((hotel) => ({
      ...hotel,
      rooms: hotel.rooms.map((room) =>
        roomNumber === room.roomNumber
          ? { ...room, checked: !room.checked }
          : room
      ),
    }));
  };

  // const setOptions = (roomNumber) => {
  //   setHotel((hotel) => ({
  //     ...hotel,
  //     rooms: hotel.rooms.map((room) =>
  //       roomNumber === room.roomNumber ? { ...room, options: value } : room
  //     ),
  //   }));
  // };

  const handleRadioChange = (e) => {
    console.log(Object.entries(e.target));
    let newData = {
      ...value,
      [e.target.name]: e.target.value,
    };
    setValue(newData);
    console.log(newData);
  };

  const handleDropDownChange = (e) => {
    console.log(e.target.value);
  };

  const coosenRoom = () => {
    const roomNumbersOptions = Object.keys(value);
    let result = hotel.rooms
      .filter((room) => {
        if (room.checked === true) {
          return room;
        }
      })
      .map((room) => {
        let option = "None";

        if (roomNumbersOptions.includes(room.roomNumber)) {
          const priceForOption = parseInt(value[room.roomNumber]);
          option = Object.entries(room).reduce(
            (acc, [key, value]) => {
              if (value === priceForOption) return key;
              return acc;
            },
            ["key", "value"]
          );
        }

        return {
          option: parser[option] || option,
          totalPrice: room.order.fullPrice + parseInt(value[room.roomNumber]),
          roomNumber: room.roomNumber,
        };
      });

    setRedirect({ redirect: true, data: result });
  };

  return (
    <ThemeProvider theme={Theme}>
      {redirect.redirect && (
        <Redirect
          to={{ pathname: "/checkout", state: { data: redirect.data } }}
        />
      )}
      <Grid
        container
        spacing={2}
        justify="center"
        alignContent="stretch"
        alignItems="center"
        className={style.hotelInfoCtn}
      >
        <Grid item md={4} xs={12} className={style.hotelDetails}>
          <h1>{hotel.name}</h1>
          <p>City: {hotel.city}</p>
          <p>Distance to Beach: {hotel.distanceToBeach} m</p>
          <p>Distance to City: {hotel.distanceToCity} m</p>
          <p>Pool: {hotel.pool ? "Yes" : "No"}</p>
          <p>Night Entertainment: {hotel.nightEntertainment ? "Yes" : "No"}</p>
          <p>KidsClub: {hotel.kidsClub ? "Yes" : "No"}</p>
          <p>Restaurant: {hotel.restaurant ? "Yes" : "No"}</p>
          <p>Rating: {hotel.rating}</p>
        </Grid>
        {/* <Divider orientation="vertical" flexItem /> */}
        {/* <Grid item xs={4} className={style.center}>
            <p>
              Our rooms have full-, half-board, all-inclusive or self-catering
            </p>
          </Grid>
          <Divider orientation="vertical" flexItem /> */}
        <Grid item xs={6} className={style.hotelImgCtn}>
          {hotel.rooms ? (
            <img
              src={getImage(hotel)}
              alt="a beuatiful hotel"
              className={style.hotelImg}
              // style={{ width: "110%", borderRadius: "5px" }}
            />
          ) : (
            <p>a beautiful hotel</p>
          )}
        </Grid>
      </Grid>

      {hotel.rooms ? (
        hotel.rooms.map((room, i) => (
          <Details
            key={i}
            value={value}
            setValue={setValue}
            room={room}
            handleChange={handleChange}
            handleRadioChange={handleRadioChange}
            handleDropDownChange={handleDropDownChange}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}

      <Button
        onClick={coosenRoom}
        className={style.sticky}
        color="primary"
        variant="contained"
      >
        Checkout
      </Button>
    </ThemeProvider>
  );
};

export default APIWrapper;
