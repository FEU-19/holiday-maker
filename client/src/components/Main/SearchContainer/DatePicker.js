import React, { useState, useEffect} from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import dateFilter from '../../../utils/dateFilter'

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

export default function DatePicker({residentData}) {
  const classes = useStyles();
  const [date, setDate] = useState({start: '2020-06-02T10:30:00.000Z', end: '2020-06-08T10:00:00.000Z'})

  function StartDateChange (e) {
    e.persist();
    setDate(prevState => ({ ...prevState, start: e.target.value + ":00.000Z"}))
  }

  function EndDateChange (e) {
    e.persist();
    setDate(prevState => ({ ...prevState, end: e.target.value + ":00.000Z"}))
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local-start"
        label="Start"
        type="datetime-local"
        onChange={StartDateChange}
        defaultValue="2020-06-02T00:00"
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
        defaultValue="2020-06-08T00:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
