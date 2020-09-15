<<<<<<< HEAD
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SimpleDialog({
  onClose,
  open,
  currentPicIndex,
  updatePicIndex,
  images,
}) {
  const useStyles = makeStyles(() => ({
    div: {
      height: 450,
      width: 800,
      display: "flex",
      overflow: "hidden",
    },
    dialog: {
      position: "relative",
    },
    img: {
      height: 450,
      width: 800,
      flexShrink: 0,
      transition: "transform 0.4s ease-in-out",
      transform: (props) => `translateX(-${props.index * 800}px)`,
    },
    leftbutton: {
      position: "absolute",
      borderRadius: "50%",
      height: 60,
      width: 60,
      padding: 0,
      minWidth: 0,
      backgroundColor: "gray",
      top: "50%",
      transform: "translateY(-50%)",
    },
    rightbutton: {
      position: "absolute",
      borderRadius: "50%",
      height: 60,
      width: 60,
      padding: 0,
      minWidth: 0,
      backgroundColor: "gray",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
    },
  }));

  const handleClose = () => {
    onClose();
  };

  // const handleListItemClick = () => {
  //   onClose();
  // };

  const onClickLeftButton = () => {
    if (currentPicIndex !== 0) {
      updatePicIndex(currentPicIndex - 1);
    }
  };

  const onClickRightButton = () => {
    if (currentPicIndex !== images.length - 1) {
      updatePicIndex(currentPicIndex + 1);
    }
  };

  const props = { index: currentPicIndex };

  const classes = useStyles(props);

  return (
    <>
      <Dialog
        className={classes.dialog}
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Box component="div" className={classes.div}>
          {images.map((image) => (
            <CardMedia className={classes.img} component="img" src={image} />
          ))}
        </Box>
        <Button className={classes.leftbutton} onClick={onClickLeftButton}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </Button>
        <Button className={classes.rightbutton} onClick={onClickRightButton}>
          <KeyboardArrowRightIcon fontSize="large" />
        </Button>
      </Dialog>
    </>
  );
}

export default React.memo(SimpleDialog);
=======
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SimpleDialog({
  onClose,
  open,
  currentPicIndex,
  updatePicIndex,
  images,
}) {
  const useStyles = makeStyles(() => ({
    div: {
      height: 450,
      width: 800,
      display: "flex",
      overflow: "hidden",
    },
    dialog: {
      position: "relative",
    },
    img: {
      height: 450,
      width: 800,
      flexShrink: 0,
      transition: "transform 0.4s ease-in-out",
      transform: (props) => `translateX(-${props.index * 800}px)`,
    },
    leftbutton: {
      position: "absolute",
      borderRadius: "50%",
      height: 60,
      width: 60,
      padding: 0,
      minWidth: 0,
      backgroundColor: "gray",
      top: "50%",
      transform: "translateY(-50%)",
    },
    rightbutton: {
      position: "absolute",
      borderRadius: "50%",
      height: 60,
      width: 60,
      padding: 0,
      minWidth: 0,
      backgroundColor: "gray",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
    },
  }));

  const handleClose = () => {
    onClose();
  };

  // const handleListItemClick = () => {
  //   onClose();
  // };

  const onClickLeftButton = () => {
    if (currentPicIndex !== 0) {
      updatePicIndex(currentPicIndex - 1);
    }
  };

  const onClickRightButton = () => {
    if (currentPicIndex !== images.length - 1) {
      updatePicIndex(currentPicIndex + 1);
    }
  };

  const props = { index: currentPicIndex };

  const classes = useStyles(props);

  return (
    <>
      <Dialog
        className={classes.dialog}
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Box component="div" className={classes.div}>
          {images.map((image) => (
            <CardMedia className={classes.img} component="img" src={image} />
          ))}
        </Box>
        <Button className={classes.leftbutton} onClick={onClickLeftButton}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </Button>
        <Button className={classes.rightbutton} onClick={onClickRightButton}>
          <KeyboardArrowRightIcon fontSize="large" />
        </Button>
      </Dialog>
    </>
  );
}

export default React.memo(SimpleDialog);
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
