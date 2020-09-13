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
  setCity,
  city,
  zipcode,
  setZipCode,
  setAddress,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNum,
}) => {
  const InfoStyle = InfoFormStyle();

  return (
    <form className={InfoStyle.form} noValidate autoComplete="off">
      <Box>
        <TextInput
          className={InfoStyle.input}
          label="First name"
          onchange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextInput
          className={InfoStyle.input}
          label="Last name"
          onchange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextInput
          className={InfoStyle.input}
          label="E-mail"
          onchange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          className={InfoStyle.input}
          label="Mobile"
          onchange={(e) => setPhoneNum(e.target.value)}
          value={phoneNum}
        />

        <TextInput
          label="Adress"
          onchange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <TextInput
          label="City"
          onchange={(e) => setCity(e.target.value)}
          value={city}
        />
        <TextInput
          label="Zip code"
          onchange={(e) => setZipCode(e.target.value)}
          value={zipcode}
        />

        <CountryDropdownList />
      </Box>
    </form>
  );
};

export default InfoForm;
