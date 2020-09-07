import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import SimpleDialog from './SimpleDialog';
import data from './residents.json';


function ModalDialogButton() {
  const [open, setOpen] = React.useState(false);
  const [images, updateImages] = useState([]);
  const [currentPicIndex, updatePicIndex] = useState(0)

  useEffect(()=>{
    updateImages(data[0].rooms[0].images)
  },[])

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
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} images={images} currentPicIndex={currentPicIndex} updatePicIndex={updatePicIndex} />
    </div>
  );
}

export default React.memo(ModalDialogButton)
