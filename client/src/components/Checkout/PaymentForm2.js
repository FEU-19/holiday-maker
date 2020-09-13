import React from "react";

import { paymentFormStyle } from "./PaymentStyles";
import { Box, Button, InputLabel } from "@material-ui/core";
import Cleave from "cleave.js/react";

export default function PaymentForms({
  onCreditCardTypeChanged,
  handleCardNum,
  setExpire,
  setCvc,
  cardImg,
}) {
  const classes = paymentFormStyle();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <Box className={classes.wrapper}>
        <InputLabel className={classes.label} htmlFor={"cardNumber"}>
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
        <Box className={classes.imgWrapper}>
          <img className={classes.image} src={cardImg} alt="card image" />
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <InputLabel className={classes.label} htmlFor={"expiryDate"}>
          Expiry Date
          <Cleave
            placeholder="MM / YY"
            options={{ date: true, datePattern: ["m", "d"] }}
            onChange={(e) => setExpire(e.target.value)}
          />
        </InputLabel>
        <InputLabel className={classes.label} htmlFor={"cvc"}>
          CVC
          <Cleave
            placeholder="000"
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
