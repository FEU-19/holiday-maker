import React, { useState } from "react";
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxNightEntertainment = ({checkedNightEntertainment, setCheckedNightEntertainment}) => {

    const handleChange = (e) => {
        setCheckedNightEntertainment(e.target.checked);
    }

    return (
      <>
        <FormControlLabel control={<Checkbox
            checked={checkedNightEntertainment}
            onChange={handleChange}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }} />}
            label="Evening Entertainment "
          />
      </>
    )
};

export default CheckboxNightEntertainment;