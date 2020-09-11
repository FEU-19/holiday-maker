import React from "react";

import { InputContainer, InputStyles } from "./PaymentStyles";
import TextField from "@material-ui/core/TextField";

function TextInput({ label, onchange, value }) {
  const inputStyles = InputStyles();

  return (
    <InputContainer>
      <TextField
        id="standard-basic"
        label={label}
        value={value}
        onChange={onchange}
        InputLabelProps={{
          classes: {
            root: inputStyles.label,
            focused: inputStyles.focusedLabel,
          },
        }}
      />
    </InputContainer>
  );
}

export default TextInput;
