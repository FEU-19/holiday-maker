import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyItems: 'space-around',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    background: 'white',
    width: 40,
  },
  icon: {
    fill: '#4AB0BD',
  },
  border: {
    width: 235,
    height: 30,
    borderRadius: 7,
    background: 'white',
    borderColor: '#4AB0BD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  p: {
    fontWeight: 20, 
    fontSize: 16,
    margin: '7px 20px 7px 7px',
  }
}));


const distanceInterval = [0, 500, 1000, 1500, 2000, 3000, 4000, 6000, 8000];

export default function SelectDistanceBeach({
  distanceBeach,
  setDistanceBeach,
}) {
  const classes = useStyles();

  function handleBeachChange(e) {
    setDistanceBeach(e.target.value);
  }

  return (
    <Box className={classes.border} border={3}>
        <FormControl classes={{ root: classes.root }} >
          <p className={classes.p}>Distance to beach</p>

      <Select
        classes={{icon: classes.icon}}

        labelId="distance-beach-label"
        id="distance-beach"
        value={distanceBeach}
        onChange={handleBeachChange}
      >
        <MenuItem disabled>No longer than:</MenuItem>
        {distanceInterval.map((distance, index) =>
          distance ? (
            <MenuItem value={distance} key={index}>
              {"< " + distance + "m"}
            </MenuItem>
          ) : (
              <MenuItem value={distance} key={index}>None</MenuItem>
            )
        )}
      </Select>
      </FormControl>
      </Box>
  );
}
