import React from "react";
import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    background: 'white',
    width: 40,
  },
  icon: {
    fill: '#162C72',
  },
  menuItem: {
    fontSize: 20, // font size i drop down kommer jag ej åt
  },
  border: {
    width: 100,
    height: 40,
    borderRadius: 7,
    background: 'white',
    borderColor: '#162C72',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  p: {
    fontWeight: 20, 
    fontSize: 16,
    color: 'red',
  }
}));



const SelectAmountOfAdults = ({ amountOfAdults, setAmountOfAdults }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setAmountOfAdults(e.target.value);
  };

  return (
    <>
      <Box className={classes.border} border={3}>
        <p className={classes.p}>Adults</p>
        <FormControl classes={{ root: classes.root }} >

{/*           <InputLabel id="selectAmountOfAdults">Adults</InputLabel>
 */}          <Select
            classes={{ select: classes.select}}
            aria-label={"Adults"}
            displayEmpty
            id="selectAmountOfAdults"
            value={amountOfAdults}
            onChange={handleChange}
          >
            <MenuItem  disabled value={1}>1</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectAmountOfAdults;
