import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const SelectAmountOfAdults = () => {
  const [amountOfAdultsadults, setAmountOfAdults] = React.useState(1);

  const handleChange = (e) => {
    setAmountOfAdults(e.target.value);
  };

  console.log(amountOfAdultsadults);

  return (
    <>
      <InputLabel id="selectAmountOfAdults">Amount of adults</InputLabel>
      <Select
        aria-label={"Select amount of adults"}
        displayEmpty
        id="selectAmountOfAdults"
        value={amountOfAdultsadults}
        onChange={handleChange}
      >
        <MenuItem disabled>Amount of adults</MenuItem>
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
  )
};

export default SelectAmountOfAdults;
