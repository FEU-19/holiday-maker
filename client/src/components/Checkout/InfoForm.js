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
          onChange={handleChange}
          value={firstName}
        />
        <TextInput
          className={InfoStyle.input}
          label="Last name"
          onChange={handleChange}
          value={lastName}
        />
        <TextInput
          className={InfoStyle.input}
          label="E-mail"
          onChange={handleChange}
          value={email}
        />
        <TextInput
          className={InfoStyle.input}
          label="Mobile"
          onChange={handleChange}
          value={phoneNum}
        />

        <TextInput label="Adress" onChange={handleChange} value={address} />
        <TextInput label="City" onChange={handleChange} value={city} />
        <TextInput label="Zip code" onChange={handleChange} value={zipcode} />

        <CountryDropdownList myCountry={country} />
      </Box>
    </form>
  );
};

export default InfoForm;
