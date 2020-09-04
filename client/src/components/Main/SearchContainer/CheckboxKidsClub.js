import React, { useState } from "react";
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxKidsClub = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <>
      <FormControlLabel control={<Checkbox
        checked={checked}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'kids club' }} />}
        label="Kids club "
      />
    </>
  )
};

export default CheckboxKidsClub;
