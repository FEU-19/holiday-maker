import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker() {
  const classes = useStyles();
  const [date, setDate] = useState({start: '', end: ''})



  function StartDateChange (e) {
    e.persist();
    setDate(prevState => ({ ...prevState, start: e.target.value}))
  }

  function EndDateChange (e) {
    e.persist();
    setDate(prevState => ({ ...prevState, end: e.target.value}))
  }

  console.log(date);
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local-start"
        label="Start"
        type="datetime-local"
        onChange={StartDateChange}
        defaultValue="2020-08-01T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-local-end"
        label="End"
        type="datetime-local"
        onChange={EndDateChange}
        defaultValue="2020-08-07T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
