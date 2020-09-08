import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios'


function ModalDialogBook({images}) {
  const [open, setOpen] = React.useState(false);

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
        BOOK
      </Button>
    </div>
  );
}

export default React.memo(ModalDialogBook)
