import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SimpleDialog from "./SimpleDialog";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  button: {
    backgroundColor: "#162C72",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#162C72",
      color: "#FFFFFF",
      opacity: "0.8",
    },
  },
}))

function ModalDialogButton({ images }) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [currentPicIndex, updatePicIndex] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button  className = {classes.button} 
        variant="outlined"  
        onClick={handleClickOpen}>
        Show room images
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        images={images}
        currentPicIndex={currentPicIndex}
        updatePicIndex={updatePicIndex}
      />
    </div>
  );
}

export default React.memo(ModalDialogButton);
