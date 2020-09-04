import React, { useState } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const SelectAmountOfChildren = ({setAmountOfChildren, amountOfChildren}) => {
  const handleChange = (e) => {
    setAmountOfChildren(e.target.value);
  };

  console.log(amountOfChildren);

  return (
    <>
      <InputLabel id="selectAmountOfChildren">Amount of children</InputLabel>
      <Select
        value={amountOfChildren}
        onChange={handleChange}
        displayEmpty
        aria-label={"Select amount of children"}
        id="selectAmountOfChildren"
      >
        <MenuItem disabled>Amount of children</MenuItem>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
      </Select>
    </>
  );
};

export default SelectAmountOfChildren;
