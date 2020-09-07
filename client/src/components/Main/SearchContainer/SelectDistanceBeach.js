import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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
  '',
  500,
  1000,
  1500,
  2000,
  3000,
  4000,
  6000,
  8000,
]

export default function SelectDistanceBeach({beachDistance, setBeachDistance}) {
  const classes = useStyles();


  function handleBeachChange (e) {
    setBeachDistance(e.target.value)
  }

  return (
    <div>
      <InputLabel id="distance-beach-label">Distance</InputLabel>
      <Select
        labelId="distance-beach-label"
        id="distance-beach"
        value={beachDistance}
        onChange={handleBeachChange}
        >
          <MenuItem disabled >Distance</MenuItem>
          {distanceInterval.map((distance) =>
            distance === '' ?
            <MenuItem value={distance}>None</MenuItem>
            :
            <MenuItem value={distance}>{ '< ' + distance + 'm'}</MenuItem>
          )}
        </Select>
      </div>
    );
  }
