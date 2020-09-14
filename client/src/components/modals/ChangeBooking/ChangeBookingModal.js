import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';

import SelectAmountOfAdults from "../../Main/SearchContainer/SelectAmountOfAdults";
import SelectAmountOfChildren from "../../Main/SearchContainer/SelectAmountOfChildren";

import ChildrenAgeSelects from "../../Main/SearchContainer/ChildrenAgeSelects";

export default function ChangeBookingModal() {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Hotel name</DialogTitle>
      <DialogContent>
        <SelectAmountOfAdults />
        <SelectAmountOfChildren />
        <ChildrenAgeSelects />
        {/* Antal rum */}
        {/* Extra bed */}
        {/* flight */}
        {/* Need price */}
        <Button onClick={handleClose} color="primary">
            Book flight
          </Button>
      </DialogContent>
      <DialogActions>
      <Button onClick={handleClose} color="primary">
            Cancel changes
          </Button>
          <Button onClick={handleClose} color="primary">
            Save changes
          </Button>
      </DialogActions>
    </Dialog>
  );
}
