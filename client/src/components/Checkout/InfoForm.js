import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "./TextInput";
import CountryDropdownList from "./CountryDropdownList";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

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
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h2>Account Information</h2>
      <Box>
        <TextInput
          label="First name"
          onchange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <TextInput
          label="Last name"
          onchange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <TextInput
          label="E-mail"
          onchange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          label="Mobile"
          onchange={(e) => setPhoneNum(e.target.value)}
          value={phoneNum}
        />
      </Box>
      <Box className="">
        <Box>
          <CountryDropdownList />
        </Box>

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
        <TextInput
          label="Adress"
          onchange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </Box>
    </form>
  );
};

export default InfoForm;
