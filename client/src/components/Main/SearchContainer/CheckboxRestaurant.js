import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const FormControl = styled(FormControlLabel)`

  .checkbox {
    
  }
`
//  kolla strl på ikoner


const CheckboxRestaurant = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <>
      <FormControl control={<Checkbox
        className="checkbox"
        checked={checked}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'restaurant' }} />}
        label="Restaurant"
      />
    </>
  )
};

export default CheckboxRestaurant;
