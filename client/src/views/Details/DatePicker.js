import React from "react";
import { TextField } from "@material-ui/core";

export default function DatePicker({ handleOnChange }) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  const ahead = (parseInt(mm) + 1).toString().padStart(2, "0");

  const now = yyyy + "-" + mm + "-" + dd;

  const oneWeekAhead = yyyy + "-" + ahead + "-" + dd;

  return (
    <React.Fragment>
      <p>Från</p>
      <TextField
        name="start"
        id="date"
        label="Från"
        type="date"
        defaultValue={now}
        onChange={handleOnChange}
      />
      <p>Till</p>
      <TextField
        name="end"
        id="date"
        label="Till"
        type="date"
        defaultValue={oneWeekAhead}
        onChange={handleOnChange}
      />
    </React.Fragment>
  );
}
