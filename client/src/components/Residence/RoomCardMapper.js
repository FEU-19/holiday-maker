import React from "react";
import RoomCard from "./RoomCard";

const RoomCardMapper = ({allRooms}) => {
  return(
    <div>
      {allRooms.map(room => {
        return(
          <RoomCard key={room._id} roomInfo={room} />
        );
      })}
    </div>
  );
};

export default RoomCardMapper;
