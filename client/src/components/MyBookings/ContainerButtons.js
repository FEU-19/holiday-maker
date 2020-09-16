import React, { useEffect } from "react";
import axios from "axios";
import getToken from "../../utils/getToken";

const ContainerButtons = (props) => {
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/", {
        headers: { "x-auth-token": getToken() },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/myBooking/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:8080/api/myBooking/${props.id}`)
      .then((res) => {
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
