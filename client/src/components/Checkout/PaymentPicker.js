import React from "react";

import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  MuiThemeProvider,
} from "@material-ui/core";
import { paymentPicker, radioTheme } from "./PaymentStyles";

function PaymentPicker({ handleChange, option }) {
  const style = paymentPicker();

  return (
    <MuiThemeProvider theme={radioTheme}>
      <Box className={style.box}>
        <RadioGroup
          aria-label="paymentPicker"
          name="paymentPicker"
          value={option}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Invoice"
            control={<Radio color="primary" />}
            label="Invoice"
            className={style.radio}
          />
          <FormControlLabel
            value="credit card"
            control={<Radio color="primary" />}
            label="Credit Card"
            className={style.radio}
          />
        </RadioGroup>
      </Box>
    </MuiThemeProvider>
  );
}

export default PaymentPicker;
