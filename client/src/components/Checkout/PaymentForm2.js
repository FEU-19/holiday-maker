import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, InputLabel } from "@material-ui/core";
import Cleave from "cleave.js/react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function PaymentForms(
  onCreditCardTypeChanged,
  handleCardNum,
  setExpire,
  setCvc,
  cardImg
) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box>
        <InputLabel htmlFor={"cardNumber"}>
          Card Number
          <Cleave
            placeholder="0000 0000 0000 0000"
            options={{
              creditCard: true,
              onCreditCardTypeChanged,
            }}
            onChange={handleCardNum}
          />
        </InputLabel>
        <Box>
          <img src={cardImg} alt="card image" />
        </Box>
      </Box>
      <Box>
        <InputLabel htmlFor={"expiryDate"}>
          Expiry Date
          <Cleave
            placeholder="MM / YY"
            options={{ date: true, datePattern: ["m", "d"] }}
            onChange={(e) => setExpire(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor={"cvc"}>
          CVC
          <Cleave
            placeholder="CVV"
            options={{
              blocks: [3],
              numericOnly: true,
            }}
            onChange={(e) => setCvc(e.target.value)}
          />
        </InputLabel>
      </Box>
    </form>
  );
}
