import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePicker({ residentData, date, setDate }) {
  const classes = useStyles();

  function StartDateChange(e) {
    e.persist();
    setDate((prevState) => ({
      ...prevState,
      start: e.target.value + "T00:00:00.000Z",
    }));
  }

  function EndDateChange(e) {
    e.persist();
    setDate((prevState) => ({
      ...prevState,
      end: e.target.value + "T00:00:00.000Z",
    }));
  }

  return (
    <div className={classes.container}>
      <TextField
        id="datetime-start"
        label="Start"
        type="date"
        onChange={StartDateChange}
        defaultValue="2020-06-02"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="datetime-end"
        label="End"
        type="date"
        onChange={EndDateChange}
        defaultValue="2020-06-08"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}
