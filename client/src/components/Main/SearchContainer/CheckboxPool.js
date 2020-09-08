import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxPool = ({checkedPool, setCheckedPool}) => {

  const handleChange = (e) => {
    setCheckedPool(e.target.checked);
  }

  return (
    <>
      <FormControlLabel control={<Checkbox
        checked={checkedPool === 'none' ? false : checkedPool}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'pool' }} />}
        label="Pool "
      />
    </>
  )
};

export default CheckboxPool;
