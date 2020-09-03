import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import RenderInputs from "./RenderInputs";
import RenderMsg from "./RenderMsg";

const RegistrationComp = () => {
  const [showMsg, setShowMsg] = useState(false);
  const [whatMsgToShow, setWhatMsgToShow] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newUser, setNewUser] = useState({
    email: "",
    first_name: "",
    surname: "",
    street: "",
    zip_code: "",
    city: "",
    country: "",
    phone_number: "",
    social_security_number: "",
    password: "",
    confirm_password: "",
  });

  function handleInput(e) {
    const { value } = e.target;
    const { name } = e.target;
    setNewUser({ ...newUser, [name]: value.trimStart() });
  }

  function handleInputReset() {
    setNewUser({
      email: "",
      first_name: "",
      surname: "",
      street: "",
      zip_code: "",
      city: "",
      country: "",
      phone_number: "",
      social_security_number: "",
      password: "",
      confirm_password: "",
    });
  }

  function comparePassword() {
    if (newUser.confirm_password === newUser.password) {
      handlePostUser();
    } else {
      setWhatMsgToShow(2);
      setShowMsg(true);
    }
  }

  function handlePostUser() {
    axios
      .post(`http://localhost:3002/api/register`, newUser)
      .then((res) => {
        console.log("RESP is: ", res);
        handleInputReset();
        setWhatMsgToShow(res.data.msg);
        setShowMsg(true);

        // setTimeout(() => {
        //   // setShowMsg(false);
        //   // setWhatMsgToShow(0);
        //   console.log('You will be Login');
        //   return <Redirect to="/login" />;
        // }, 2500);
      })
      .catch((err) => {
        const errorMsg = err.response.data.error[0].msg;
        console.log("ERROR is ", err.response);

        setWhatMsgToShow(errorMsg);
        setShowMsg(true);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAnchorEl(e.currentTarget);

    let fieldsEmpty = false;
    for (const item of Object.values(newUser)) {
      if (item.length === 0) {
        setWhatMsgToShow(1);
        setShowMsg(true);
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
