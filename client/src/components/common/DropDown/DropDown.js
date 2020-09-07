import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Box from "@material-ui/core/Box";
import axios from "axios";

const MyFormControl = styled(FormControl)({
  minWidth: 120,
  marginBottom: 20,
});

const MyBox = styled(Box)({
  width: "150px",
  display: "flex",
  flexDirection: "column",
});

const DropDown = ({ extraBed, handleDropDownChange }) => {
  const [state, setState] = React.useState(0);

  const handleChange = (event) => {
    setState(event.target.value);
    handleDropDownChange(event);
  };

  return (
    <MyBox>
      {extraBed > 0 ? (
        <MyFormControl>
          <InputLabel htmlFor="native-simple">Extra beds</InputLabel>
          <NativeSelect value={state} onChange={handleChange}>
            <option aria-label="" value="" />
            {Array.from(Array(extraBed), (_, i) => i + 1).map((val) => {
              return (
                <option value={val} key={val}>
                  {val}
                </option>
              );
            })}
          </NativeSelect>
        </MyFormControl>
      ) : (
        <MyFormControl>
          <InputLabel htmlFor="name-native-disabled" disabled>
            Extra beds
          </InputLabel>
          <NativeSelect disabled></NativeSelect>
        </MyFormControl>
      )}
    </MyBox>
  );
};

export default DropDown;
