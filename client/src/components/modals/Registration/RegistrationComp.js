import React, { useState } from "react";
import axios from "axios";
import RenderInputs from "./RenderInputs";
import RenderMsg from "./RenderMsg";

const RegistrationComp = (props) => {
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
      setWhatMsgToShow(2);
    }
  }

  function handlePostUser() {
    axios
      .post(`http://localhost:8080/api/register/`, newUser)
      .then((res) => {
        console.log(res);
        handleInputReset();
        props.setValue(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAnchorEl(e.currentTarget);

    let fieldsEmpty = false;
    for (const item of Object.values(newUser)) {
      if (item.length === 0) {
        setWhatMsgToShow(1);
        return;
      }
      fieldsEmpty = true;
    }

    if (fieldsEmpty) {
      comparePassword();
    }
  }
  const handleClose = () => {
    setAnchorEl(null);
    setWhatMsgToShow(0);
  };

  return (
    <div>
      <RenderInputs handleSubmit={handleSubmit} newUser={newUser} handleInput={handleInput} />
      <RenderMsg whatMsgToShow={whatMsgToShow} handleClose={handleClose} anchorEl={anchorEl} />
    </div>
  );
};

export default RegistrationComp;
