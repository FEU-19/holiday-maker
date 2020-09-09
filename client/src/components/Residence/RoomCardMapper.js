import React from "react";
import RoomCard from "./RoomCard";

const RoomCardMapper = ({allRooms}) => {
  console.log(allRooms);
  return(
    <div>
      {allRooms.map(room => {
        return(
          <RoomCard roomInfo={room} />
        );
      })}
    </div>
  );
};

export default RoomCardMapper;
