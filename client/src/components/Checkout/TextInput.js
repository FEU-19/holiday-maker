import React from "react";

import { InputContainer, InputStyle } from "./PaymentStyles";
import TextField from "@material-ui/core/TextField";

function TextInput({ label, onchange, value }, props) {
  const inputStyles = InputStyle();

  return (
    <TextField
      id="standard-basic"
      label={label}
      value={value}
      onChange={onchange}
      {...props}
      className={inputStyles.input}
    />
  );
}

export default TextInput;
