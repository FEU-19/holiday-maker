import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SimpleDialog from "./SimpleDialog";

function ModalDialogButton({ images }) {
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
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
