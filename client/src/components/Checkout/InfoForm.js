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
          value={surname}
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
          value={phoneNumber}
        />

        <TextInput label="Street" onchange={handleChange} name="street" value={street} />
        <TextInput label="City" name="city" onchange={handleChange} value={city} />
        <TextInput label="Zip code" name="zipCode" onchange={handleChange} value={zipCode} />

        <CountryDropdownList handleChange={handleChange} myCountry={country} />
      </Box>
    </form>
  );
};

export default InfoForm;
