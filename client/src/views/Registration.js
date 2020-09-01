import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Popover from '@material-ui/core/Popover';
import axios from "axios";

const Registration = () => {
  const [showMsg, setShowMsg] = useState(true);
  const [whatMsgToShow, setWhatMsgToShow] = useState(1);
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
    });
  }

  function handlePostUser() {
    const url = "";
    axios
      .post(`${url}register`, newUser)
      .then((res) => {
        console(res);
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
        //   setWhatMsgToShow(3);
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
    //setAnchorEl(event.currentTarget);
    handlePostUser();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  let msg;
  if(whatMsgToShow === 1){
    msg = <p>Account was created.</p>;
  }  else if (whatMsgToShow === 2) {
    msg = <p>Account with this email already exists.</p>
  }
  else {
    msg = <p>Something went wrong.. try again later.</p>
  }

  return (
    <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
            {/* className={classes.root} noValidate */}
            
      <TextField
        id="email"
        label="Email"
        type="email"
        name="email"
        value={newUser.email}
        onChange={handleInput}
        // required
      />
            
      <TextField
        id="password"
        label="Password"
        type="password"
        name="password"
        value={newUser.password}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="12"
      />
            
      <TextField
        id="first_name"
        label="First name="
        type="text"
        name="first_name"
        value={newUser.first_name}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="30"
      />
            
      <TextField
        id="surname"
        label="Surname"
        type="text"
        name="surname"
        value={newUser.surname}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="12"
      />
            
      <TextField
        id="street"
        label="Street"
        type="text"
        name="street"
        value={newUser.street}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="20"
      />
            
      <TextField
        id="zip_code"
        label="Zip code"
        type="text"
        name="zip_code"
        value={newUser.zip_code}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="10"
      />
            
      <TextField
        id="city"
        label="City"
        type="text"
        name="city"
        value={newUser.city}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="30"
      />
            
      <TextField
        id="country"
        label="Country"
        type="text"
        name="country"
        value={newUser.country}
        onChange={handleInput}
        // required
        minLength="1"
        maxLength="30"
      />
            
      <TextField
        id="phone_number"
        label="Phone number"
        type="text"
        name="phone_number"
        value={newUser.phone_number}
        onChange={handleInput}
        // required
        minLength="1" //10
        maxLength="15" 
      />
            
      <TextField
        id="social_security_number"
        label="social security number"
        type="text"
        name="social_security_number"
        value={newUser.social_security_number}
        onChange={handleInput}
        // required
        minLength="1" //8
        maxLength="12"
      />
      <Button type='submit' variant="contained" color="primary" >
        Register
      </Button>




      {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography >{msg}</Typography>
        {/* className={classes.typography} */}
      {/* </Popover> */} 
          
    </form>
  );
};

export default Registration;