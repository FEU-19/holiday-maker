import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalCtn = styled.div`
  width: 100vw;
  height: 100vh;
  position absolute;
  top: 0;
  left: 0;
  background-color: rgba(51,51,51,0.6);
`;

const AnimatedSpinner = styled.div`
  width: 10rem;
  height: 10rem;
  display: inline-block;
  border: 3px solid rgba(0, 255, 127, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  margin-bottom: 10rem;
  animation: 1s spin infinite ease-in-out;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledModal = styled.div`
  width: 30rem;
  height: 20rem;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 0px 1px black;
  border-radius: 1rem;
`;

const Spinner = () => {
  return ReactDOM.createPortal(
    <ModalCtn>
      <StyledModal>
        <h3>Vänligen vänta tills betalning genomförs.</h3>
        <p>Refresha inte sidan.</p>
        <AnimatedSpinner />
      </StyledModal>
    </ModalCtn>,
    document.body
  );
};

export default Spinner;
