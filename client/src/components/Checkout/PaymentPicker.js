import React from "react";

import { Box, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { paymentPicker } from "./PaymentStyles";

function PaymentPicker({ handleChange, option }) {
  const style = paymentPicker();

  return (
    <Box className={style.box}>
      <RadioGroup
        aria-label="paymentPicker"
        name="paymentPicker"
        value={option}
        onChange={handleChange}
      >
        <FormControlLabel
          value="Invoice"
          control={<Radio />}
          label="Invoice"
          className={style.radio}
        />
        <FormControlLabel
          value="credit card"
          control={<Radio />}
          label="Credit Card"
          className={style.radio}
        />
      </RadioGroup>
    </Box>
  );
}

export default PaymentPicker;
