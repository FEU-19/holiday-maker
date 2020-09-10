import React from "react";
import ReactDOM from "react-dom";
import { Modal, Box } from "@material-ui/core";
import { modalStyle } from "./ModalStyle";
import CloseIcon from "@material-ui/icons/Close";

const Modals = ({ onClose, children, open }) => {
  const ModalStyle = modalStyle();
  return (
    <Modal onClick={onClose} open={open}>
      <Box className={ModalStyle.content}>
        <button className={ModalStyle.closeBtn}>
          <CloseIcon className={ModalStyle.closeIcon} onClick={onClose} />
        </button>
        {children}
      </Box>
    </Modal>
  );
};

export default Modals;
