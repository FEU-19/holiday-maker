import React, { useState } from "react";
import RoomCard from "./RoomCard";
import { Button, makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyle = makeStyles({
  sticky: {
    position: "fixed",
    bottom: 0,
    left: 0,
    padding: "10px 0",
    width: "100%",
    margin: "0 auto",
    background: "#4db51d",
  },
});

const RoomCardMapper = ({ allRooms }) => {
  const [chosenRooms, setChosenRooms] = useState([]);
  const [redirect, setRedirect] = useState(false);

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
      {redirect && <Redirect to={{ pathname: "/flight", state: { rooms: chosenRooms } }} />}
      {allRooms.map((room) => {
        return <RoomCard roomInfo={room} chooseRoom={chooseRoom} />;
      })}
      <Button color="primary" className={styles.sticky} onClick={() => setRedirect(true)}>
        CHECKOUT
      </Button>
    </div>
  );
};

export default RoomCardMapper;
