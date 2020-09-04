import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxRestaurant = () => {
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
        inputProps={{ 'aria-label': 'restaurant' }} />}
        label="Restaurant"
      />
    </>
  )
};

export default CheckboxRestaurant;
