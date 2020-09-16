import React from "react";
import TextInput from "./TextInput";
import CountryDropdownList from "./CountryDropdownList";
import { Box } from "@material-ui/core";
import { InfoFormStyle } from "./PaymentStyles";

const InfoForm = ({
  firstName,
  street,
  surname,
  email,
  phoneNumber,
  city,
  zipCode,
  handleUser,
  country,
}) => {
  const InfoStyle = InfoFormStyle();

  return (
    <form className={InfoStyle.form} noValidate autoComplete="off">
      <Box>
        <TextInput
          className={InfoStyle.input}
          label="First name"
          onchange={handleUser}
          name="firstName"
          value={firstName}
        />
        <TextInput
          className={InfoStyle.input}
          label="Last name"
          onchange={handleUser}
          name="surname"
          value={surname}
        />
        <TextInput
          className={InfoStyle.input}
          label="E-mail"
          onchange={handleUser}
          name="email"
          value={email}
        />
        <TextInput
          className={InfoStyle.input}
          label="Mobile"
          onchange={handleUser}
          name="phoneNumber"
          value={phoneNumber}
        />
        <TextInput
          label="Street"
          onchange={handleUser}
          name="street"
          value={street}
        />
        <TextInput
          label="City"
          name="city"
          onchange={handleUser}
          value={city}
        />
        <TextInput
          label="Zip code"
          name="zipCode"
          onchange={handleUser}
          value={zipCode}
        />

        <CountryDropdownList handleUser={handleUser} country={country} />
      </Box>
    </form>
  );
};

export default InfoForm;
