import React,{useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import SimpleDialog from './SimpleDialog';
import data from './residents.json';
import axios from 'axios'


function ModalDialogButton() {
  const [open, setOpen] = React.useState(false);
  const [images, updateImages] = useState([]);
  const [currentPicIndex, updatePicIndex] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:8080/api/residents/5f5230fbfd504a310c818546")
      .then(response => {
        let picArray = response.data.data.rooms.map(item => item.images)
        updateImages(picArray)
      })
      .catch(error => {
        console.error("An error occured while retrieving data from the server", error);
      });
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
