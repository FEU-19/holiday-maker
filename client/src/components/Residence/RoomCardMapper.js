import React, { useState } from "react";
import RoomCard from "./RoomCard";

const RoomCardMapper = ({ allRooms }) => {
  const [chosenRooms, setChosenRooms] = useState([]);

  const chooseRoom = (room) => {
    setChosenRooms((rooms) => {
      if (!!rooms.find((_room) => room._id === _room._id)) {
        return rooms.filter((_room) => _room._id !== room._id);
      }

      return [...rooms, room];
    });
  };

  console.log(chosenRooms);

  return (
    <div>
      {allRooms.map((room) => {
        return <RoomCard roomInfo={room} chooseRoom={chooseRoom} />;
      })}
    </div>
  );
};

export default RoomCardMapper;
