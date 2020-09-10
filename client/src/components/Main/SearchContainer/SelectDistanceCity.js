import React from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const distanceInterval = [
  0,
  500,
  1000,
  1500,
  2000,
  3000,
  4000,
  6000,
  8000
]

const SelectDistanceCity = ({distanceCity, setDistanceCity}) => {
  const handleChange = (e) => {
    setDistanceCity(e.target.value);
  };

  return (
    <>
      <InputLabel id="selectDistanceCity">Distance to the center</InputLabel>
      <Select
        aria-label="Select Distance To City"
        displayEmpty
        id="selectDistanceCity"
        value={ distanceCity }
        onChange={ handleChange }
      >
        <MenuItem disabled>No longer than</MenuItem>
        {
          distanceInterval.map((distance, index) =>
            distance
            ? <MenuItem value={ distance } key={index}>{ "< " + distance } m</MenuItem>
            : <MenuItem value={ distance } key={index}>N/A</MenuItem>
          )
        }

      </Select>
    </>
  )
};

export default SelectDistanceCity;
