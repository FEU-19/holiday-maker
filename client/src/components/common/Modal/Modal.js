import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const ModalCtn = styled.div`
  width: 100vw;
  height: 100vh;
  position absolute;
  top: 0;
  left: 0;
  background-color: rgba(51,51,51,0.6);
`;

const StyledModal = styled.div`
  width: 30rem;
  height: 20rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 1px black;
  border-radius: 1rem;
`;

const CancelIcon = styled(CloseIcon)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  color: grey;
`;

// the parent component need to define onClose function and pass here
const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <ModalCtn>
      <StyledModal>
        <CancelIcon onClick={onClose} />
        {children}
      </StyledModal>
    </ModalCtn>,
    document.body
  );
};

export default Modal;
