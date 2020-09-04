import React, { useState } from "react";
import axios from "axios";
import RenderInputs from "./RenderInputs";
import RenderMsg from "./RenderMsg";

const RegistrationComp = (props) => {
  const [showMsg, setShowMsg] = useState(true);
  const [whatMsgToShow, setWhatMsgToShow] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newUser, setNewUser] = useState({
    email: "",
    firstName: "",
    surname: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    socialSecurityNumber: "",
    password: "",
    confirmPassword: "",
  });

  function handleInput(e) {
    const { value } = e.target;
    const { name } = e.target;
    setNewUser({ ...newUser, [name]: value.trimStart() });
  }

  function handleInputReset() {
    setNewUser({
      email: "",
      firstName: "",
      surname: "",
      street: "",
      zipCode: "",
      city: "",
      country: "",
      phoneNumber: "",
      socialSecurityNumber: "",
      password: "",
      confirmPassword: "",
    });
  }

  function comparePassword() {
    if (newUser.confirmPassword === newUser.password) {
      handlePostUser();
    } else {
      setShowMsg(true);
      setWhatMsgToShow(4);

      setTimeout(() => {
        setShowMsg(false);
      }, 2500);
    }
  }

  function handlePostUser() {
    const url = "";

    axios
      .post(`http://localhost:3002/api/register`, newUser)
      .then((res) => {
        console.log(res);
        handleInputReset();
        setWhatMsgToShow(1);
        props.setValue(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("From submit form ", newUser);
    setAnchorEl(e.currentTarget);

    let fieldsEmpty;
    for (const item of Object.values(newUser)) {
      console.log(item);
      if (item === "") {
        fieldsEmpty = false;
      } else {
        fieldsEmpty = true;
      }
    }

    if (!fieldsEmpty) {
      setShowMsg(true);
      setWhatMsgToShow(3);

      setTimeout(() => {
        setShowMsg(false);
      }, 2500);
    } else {
      comparePassword();
    }
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <RenderInputs
        handleSubmit={handleSubmit}
        newUser={newUser}
        handleInput={handleInput}
      />
      <RenderMsg
        whatMsgToShow={whatMsgToShow}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </div>
  );
};

export default RegistrationComp;
