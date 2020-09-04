import React, { useState } from "react";
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxNightEntertainment = () => {
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
            inputProps={{ 'aria-label': 'checkbox with default color' }} />}
            label="Evening Entertainment "
          />
      </>
    )
};

export default CheckboxNightEntertainment;
