import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const distanceInterval = [
  0,
  500,
  1000,
  1500,
  2000,
  3000,
  4000,
  6000,
  8000,
]

export default function SelectDistanceBeach({distanceBeach, setDistanceBeach}) {
  const classes = useStyles();


  function handleBeachChange (e) {
    setDistanceBeach(e.target.value)
  }

  return (
    <div>
      <InputLabel id="distance-beach-label">Distance to beach</InputLabel>
      <Select
        labelId="distance-beach-label"
        id="distance-beach"
        value={distanceBeach}
        onChange={handleBeachChange}
        >
          <MenuItem disabled >Distance</MenuItem>
          {distanceInterval.map((distance, index) =>
            distance === '' ?
            <MenuItem value={distance} key={index}>None</MenuItem>
            :
            <MenuItem value={distance} key={index}>{ '< ' + distance + 'm'}</MenuItem>
          )}
        </Select>
      </div>
    );
  }
