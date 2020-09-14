import React from "react";

import { InputContainer, InputStyle } from "./PaymentStyles";
import TextField from "@material-ui/core/TextField";

<<<<<<< HEAD
function TextInput({ label, onchange, value, name }) {
  return (
    <InputContainer>
      <TextField
        name={name}
        id="standard-basic"
        label={label}
        value={value}
        onChange={onchange}
      />
    </InputContainer>
=======
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
>>>>>>> f5855995a6c2ec5e025530231d7c0d77c41ab0cd
  );
}

export default TextInput;
