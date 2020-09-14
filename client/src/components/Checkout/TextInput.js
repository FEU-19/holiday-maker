import React from "react";

import { InputContainer, InputStyle } from "./PaymentStyles";
import TextField from "@material-ui/core/TextField";

function TextInput({ label, onchange, value, name }) {
  const inputStyles = InputStyle();

  return (
    <TextField
      id="standard-basic"
      name={name}
      label={label}
      value={value}
      onChange={onchange}
      className={inputStyles.input}
    />
  );
}

export default TextInput;
