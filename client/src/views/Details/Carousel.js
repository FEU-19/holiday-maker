import React, { useState } from "react";
import { Modal, Button, Box } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useStyle } from "./styles";

// const images = [
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ajorifSUT7IuwtVpeJJrogHaFE%26pid%3DApi&f=1",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DAPu4smgcBr_VoXN_agCQgHaFj%26pid%3DApi&f=1",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._apAl_KumMvX7l6POqdAPAHaEW%26pid%3DApi&f=1",
// ];

const Carousel = ({ openModal, setOpenModal, images }) => {
  const [current, setCurrent] = useState(0);
  const style = useStyle();

  const handleClick = (direction) => {
    if (direction < 0) {
      if (current >= 1) {
        setCurrent(current + direction);
      } else {
        setCurrent(2);
      }
    } else if (direction > 0) {
      if (current <= 1) {
        setCurrent(current + direction);
      } else {
        setCurrent(0);
      }
    }

    // switch (direction) {
    //   case direction < 0:
    //     if (current >= 1) {
    //       setCurrent(current + direction);
    //     } else {
    //       setCurrent(2);
    //     }
    //   case direction > 0:
    //     if (current <= 1) {
    //       setCurrent(current + direction);
    //     } else {
    //       setCurrent(0);
    //     }
    // }
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      className={style.carousel}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center" className={style.carousel}>
          <Button onClick={() => handleClick(-1)}>
            <KeyboardArrowLeftIcon />
          </Button>
          <img src={images[current]} alt="residence" />
          <Button onClick={() => handleClick(1)}>
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
        <Button onClick={() => setOpenModal(false)}>Close</Button>
      </Box>
    </Modal>
  );
};

export default Carousel;
