import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';


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
    fill: '#162C72',
  },
  border: {
    width: 150,
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
    margin: '7px 20px 7px 7px',
  }
}));


const SelectAmountOfChildren = ({setAmountOfChildren, amountOfChildren}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setAmountOfChildren(e.target.value);
  };

  return (
    <>   
    <Box className={classes.border} border={3}>
        <FormControl classes={{ root: classes.root }} >

       <p className={classes.p}>Children</p>
        <Select
        value={amountOfChildren}
        onChange={handleChange}
        displayEmpty
        aria-label={"Select amount of children"}
        id="selectAmountOfChildren"
      >
        <MenuItem disabled>Amount of children</MenuItem>
        <MenuItem value={0}>0</MenuItem>
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

export default SelectAmountOfChildren;
