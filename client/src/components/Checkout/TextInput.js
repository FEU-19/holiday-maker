import React from "react";

import { InputContainer } from "./PaymentStyles";
import TextField from "@material-ui/core/TextField";

function TextInput({ label, onchange, value }) {
  return (
    <InputContainer>
      <TextField
        id="standard-basic"
        label={label}
        value={value}
        onChange={onchange}
      />
    </InputContainer>
  );
}

export default TextInput;
