import React, { useState } from "react";
import RoomCard from "./RoomCard";
import { Button, makeStyles } from "@material-ui/core";
import { Redirect, useLocation } from "react-router-dom";

const useStyle = makeStyles({
  sticky: {
    position: "sticky",
    bottom: 0,
    left: 0,
    padding: "10px 0",
    width: "100%",
    margin: "0 auto",
  },
});

const RoomCardMapper = ({ allRooms, dates }) => {
  const [chosenRooms, setChosenRooms] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { state } = useLocation();

  const styles = useStyle();

  const chooseRoom = (room) => {
    setChosenRooms((rooms) => {
      if (!!rooms.find((_room) => room._id === _room._id)) {
        return rooms.filter((_room) => _room._id !== room._id);
      }

      return [...rooms, room];
    });
  };

  return (
    <div>
      {redirect && (
        <Redirect
          to={{
            pathname: "/flight",
            state: {
              rooms: chosenRooms,
              queryParams: state.queryParams,
              hotel: state.hotel,
            },
          }}
        />
      )}
      {allRooms.map((room, index) => {
        return <RoomCard key={index} roomInfo={room} chooseRoom={chooseRoom} dates={dates} />;
      })}
      <Button
        variant="contained"
        color="primary"
        className={styles.sticky}
        onClick={() => setRedirect(true)}
      >
        PROCEED
      </Button>
    </div>
  );
};

export default RoomCardMapper;
