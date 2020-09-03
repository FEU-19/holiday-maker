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
      setShowMsg(true);
      setWhatMsgToShow(4);
    }
  }

  function handlePostUser() {
    console.log("the user i will POST ", newUser);

    axios
      .post(`http://localhost:3002/api/register`, newUser)
      .then((res) => {
        console.log(res);
        console.log("RESP is: ", res);
        console.log("res.data.msg ", res.data.msg);
        // handleInputReset();
        setShowMsg(true);
        setWhatMsgToShow(res.data.msg);

        // setTimeout(() => {
        //   // setShowMsg(false);
        //   // setWhatMsgToShow(0);
        //   console.log('You will be Login');
        //   return <Redirect to="/login" />;
        // }, 2500);
      })
      .catch((err) => {
        const error = err.response.data.error[0].msg;
        console.log("ERROR is ", err.response);
        console.log(error);
        console.log(err.response.status);

        setWhatMsgToShow(error);
        setShowMsg(true);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAnchorEl(e.currentTarget);

    let fieldsEmpty;
    for (const item of Object.values(newUser)) {
      if (item === "") {
        fieldsEmpty = false;
      } else {
        fieldsEmpty = true;
      }
    }

    if (!fieldsEmpty) {
      setShowMsg(true);
      setWhatMsgToShow(3);
    } else {
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
