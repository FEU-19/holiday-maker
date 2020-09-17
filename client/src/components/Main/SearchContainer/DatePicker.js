import React, { useState, useEffect } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  container: {
  },
  icon: {
    fill: '#162C72',
  },
  border: {
    height: 40,
    width: '20rem',
    borderRadius: 7,
    background: 'white',
    borderColor: '#162C72',
    display: 'flex',
    alignItems: 'flex-end',
    paddingLeft: 3,
  },
}));

export default function DatePicker({ residentData, date, setDate }) {
  const [startDate, handleStartChange] = useState(new Date(date.start));
  const [endDate, handleEndChange] = useState(new Date(date.end));
  const classes = useStyles();

  useEffect(() => {
    let startToISO = startDate.toISOString();
    let endToISO = endDate.toISOString();
    setDate((prevState => ({ ...prevState, start: startToISO, end: endToISO })))
  }, [setDate, startDate, endDate])

  return (
    <Box className={classes.border} border={3} >
      <MuiPickersUtilsProvider className={classes.container} utils={DateFnsUtils}>
        <KeyboardDatePicker
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline-start"
          label=""
          mr='10px'
          value={startDate}
          minDate={new Date('2020-06-01')}
          maxDate={endDate}
          onChange={date => handleStartChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline-end"
          label=""
          value={endDate}
          minDate={startDate}
          maxDate={new Date('2020-07-31')}
          onChange={date => handleEndChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
}
