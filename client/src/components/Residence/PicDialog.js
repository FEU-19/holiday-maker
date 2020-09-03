import React from 'react';
import Dialog from '@material-ui/core/Dialog';

function PicDialog({ onClose, selectedValue, open }){
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <h1>LOL</h1>
    </Dialog>
  );
}

export default React.memo(PicDialog)