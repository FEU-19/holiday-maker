import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function ChangeDates({ date, setDate }) {
  const [startDate, handleStartChange] = useState(new Date('2020-06-05T00:00:00.000Z'));
  const [endDate, handleEndChange] = useState(new Date('2020-06-09T00:00:00.000Z'));

//  console.log(date)

  // useEffect(() => {
  //   let startToISO = startDate.toISOString();
  //   let endToISO = endDate.toISOString();
  //   setDate((prevState => ({...prevState, start: startToISO, end: endToISO})))
  // },[setDate, startDate, endDate])



  return (
    <div>
      <Grid container spacing={1}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item xs={6}>
        <KeyboardDatePicker
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline-start"
          label="Start"
          mr='10px'
          value={startDate}
          minDate={new Date('2020-06-01')}
          maxDate={endDate}
          onChange={date => handleStartChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <KeyboardDatePicker
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline-end"
          label="End"
          value={endDate}
          minDate={startDate}
          maxDate={new Date('2020-07-31')}
          onChange={date => handleEndChange(date)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      </MuiPickersUtilsProvider>
    </Grid>
    </div>
  );
}