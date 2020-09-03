import React, { useState } from "react";
import axios from "axios";
import RenderInputs from "./RenderInputs";
import RenderMsg from "./RenderMsg";

const RegistrationComp = () => {
  const [showMsg, setShowMsg] = useState(true);
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
      confirm_passwrod: "",
    });
  }

  function comparePassword() {
    if (newUser.confirm_password === newUser.password) {
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
        setShowMsg(true);
        setWhatMsgToShow(1);

        setTimeout(() => {
          setShowMsg(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        // account finns redan
        setWhatMsgToShow(2);
        // // Beroende på vilken felmeddelande vi får ska vi ändra till 2:a eller 3:
        // if(){
        //   setWhatMsgToShow(2);
        // } else {
        //   setWhatMsgToShow(5); // denna siffran ska alltid vara högst
        // }
        setShowMsg(true);
        setTimeout(() => {
          setShowMsg(false);
        }, 2500);
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
