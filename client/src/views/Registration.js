import React, { useState } from "react";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Registration = () => {
  const [input, setInput] = useState(null);
  const [newUser, setNewUser] = useState({
    email: "",
    first_name: "",
    surname: "",
    street: "",
    zip_code: "",
    city: "",
    country: "",
    phone_number: "",
    social_security_number: "",
  });
  function handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    setNewUser({ ...newUser, [name]: value });
    console.log(newUser);
  }
  return (
    <form autoComplete="off">
      {/* className={classes.root} noValidate */}
      <TextField
        id="email"
        label="Email"
        type="email"
        name="email"
        value={newUser.email}
        onChange={handleInput}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        name="password"
        value={newUser.password}
        onChange={handleInput}
      />
      <TextField
        id="first_name"
        label="First name="
        type="text"
        name="first_name"
        value={newUser.first_name}
        onChange={handleInput}
      />
      <TextField
        id="surname"
        label="Surname"
        type="text"
        name="surname"
        value={newUser.surname}
        onChange={handleInput}
      />
      <TextField
        id="street"
        label="Street"
        type="text"
        name="street"
        value={newUser.street}
        onChange={handleInput}
      />
      <TextField
        id="zip_code"
        label="Zip code"
        type="text"
        name="zip_code"
        value={newUser.zip_code}
        onChange={handleInput}
      />
      <TextField
        id="city"
        label="City"
        type="text"
        name="city"
        value={newUser.city}
        onChange={handleInput}
      />
      <TextField
        id="country"
        label="Country"
        type="text"
        name="country"
        value={newUser.country}
        onChange={handleInput}
      />
      <TextField
        id="phone_number"
        label="Phone number"
        type="text"
        name="phone_number"
        value={newUser.phone_number}
        onChange={handleInput}
      />
      <TextField
        id="social_security_number"
        label="social security number"
        type="text"
        name="social_security_number"
        value={newUser.social_security_number}
        onChange={handleInput}
      />
    </form>
  );
};

export default Registration;
