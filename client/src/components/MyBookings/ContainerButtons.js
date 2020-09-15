import React, { useEffect } from "react";
import axios from "axios";
import getToken from "../../utils/getToken";

const ContainerButtons = (props) => {
  const hårdkokt = {
      _id: "5f60813ed87e4b922de1ff72",
      userId: "5f588b8e7413ee42ec88e991",
      adults: 3,
      children: 1337,
      hotel: "caslte vania",
      totalPrice: "399",
      rooms: [
        {
          _id: "mongoose.Schema.Types.ObjectID",
          roomNumber: "String",
          option: "String",
          extraBed: "yes",
          price: "2000kr",
        },
      ],
      bookingDates: {
        start: "new Date.toISOString()",
        end: "new Date.toISOString()",
      },
      hotel : "MIT HOTTELLL"
    }
  

  const handleDelete = () => {
    console.log(props.orderId)
    axios
      .delete(`http://localhost:8080/api/myBooking/${props.orderId}`)
      .then((res) => {
        props.setUpdate(props.update + 1);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:8080/api/myBooking/${props.orderId}`, hårdkokt)
      .then((res) => {
        props.setUpdate(props.update + 1);
        console.log("UPDATED BUT STILL THE SAME")
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Change</button>
    </div>
  );
};

export default ContainerButtons;
