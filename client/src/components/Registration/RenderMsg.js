import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const RenderMsg = ({ whatMsgToShow, handleClose, anchorEl }) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let msg;

  if (whatMsgToShow === 1) {
    msg = <Typography>Fields can´t be empty.</Typography>;
  } else if (whatMsgToShow === 2) {
    msg = <Typography>Password doesn't match.</Typography>;
  } else {
    msg = <Typography>{whatMsgToShow}</Typography>;
  }

  return (
    <Popover
    // className={classes.typography} 
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {msg}
    </Popover>
  );
};

export default RenderMsg;
