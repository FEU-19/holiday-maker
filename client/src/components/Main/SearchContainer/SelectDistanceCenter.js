import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const distanceInterval = [
  '',
  500,
  1000,
  1500,
  2000,
  3000,
  4000,
  6000,
  8000
]

const SelectDistanceCenter = ({distanceCenter, setDistanceCenter}) => {
  const handleChange = (e) => {
    setDistanceCenter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <InputLabel id="selectDistanceCenter">Distance to center</InputLabel>
      <Select
        aria-label="Select Distance To Center"
        displayEmpty
        id="selectDistanceCenter"
        value={ distanceCenter }
        onChange={ handleChange }
      >
        <MenuItem disabled>Distance</MenuItem>
        {
          distanceInterval.map((distance, index) =>
            distance === ''
            ? <MenuItem value={ distance } key={index}>None</MenuItem>
            : <MenuItem value={ distance } key={index}>{ "< " + distance } m</MenuItem>
          )
        }

      </Select>
    </>
  )
};

export default SelectDistanceCenter;
