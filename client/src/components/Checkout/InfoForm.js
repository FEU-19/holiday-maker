import React from "react";
import TextInput from "./TextInput";
import CountryDropdownList from "./CountryDropdownList";
import { Box } from "@material-ui/core";
import { InfoFormStyle } from "./PaymentStyles";

const InfoForm = ({
  firstName,
  address,
  lastName,
  email,
  phoneNum,
  city,
  zipcode,
  handleChange,
  country,
}) => {
  const InfoStyle = InfoFormStyle();

  return (
    <form className={InfoStyle.form} noValidate autoComplete="off">
      <Box>
        <TextInput
          className={InfoStyle.input}
          label="First name"
          onchange={handleChange}
          name="firstName"
          value={firstName}
        />
        <TextInput
          className={InfoStyle.input}
          label="Last name"
          onchange={handleChange}
          name="surname"
          value={lastName}
        />
        <TextInput
          className={InfoStyle.input}
          label="E-mail"
          onchange={handleChange}
          name="email"
          value={email}
        />
        <TextInput
          className={InfoStyle.input}
          label="Mobile"
          onchange={handleChange}
          name="phoneNumber"
          value={phoneNum}
        />

        <TextInput
          label="Adress"
          onchange={handleChange}
          name="adress"
          value={address}
        />
        <TextInput
          label="City"
          name="city"
          onchange={handleChange}
          value={city}
        />
        <TextInput
          label="Zip code"
          name="zipCode"
          onchange={handleChange}
          value={zipcode}
        />

        <CountryDropdownList handleChange={handleChange} myCountry={country} />
      </Box>
    </form>
  );
};

export default InfoForm;
