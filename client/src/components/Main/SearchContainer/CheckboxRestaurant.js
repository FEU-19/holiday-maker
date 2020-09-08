import React, { useEffect } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxRestaurant = ({checkedRestaurant, setCheckedRestaurant}) => {

  const handleChange = (e) => {
    setCheckedRestaurant(e.target.checked);
  }

  useEffect(() => {
    if (!checkedRestaurant) {
      setCheckedRestaurant('none');
    }
  }, [checkedRestaurant, setCheckedRestaurant])

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
