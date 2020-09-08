import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxRestaurant = ({checkedRestaurant, setCheckedRestaurant}) => {

  const handleChange = (e) => {
    setCheckedRestaurant(e.target.checked);
  }

  return (
    <>
      <FormControlLabel control={<Checkbox
        checked={checkedRestaurant === 'none' ? false : checkedRestaurant}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'restaurant' }} />}
        label="Restaurant"
      />
    </>
  )
};

export default CheckboxRestaurant;
