import React from "react";
import styled from "styled-components";

// Components
import LoginModal from "../../modals/LoginModal";

// Styles
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #162c72;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const ContainerBtns = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

const Logo = styled.img`
  object-fit: contain;
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  padding-left: 10px;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={process.env.PUBLIC_URL + "/Holidaymaker-logo-BIG.png"} />
      <ContainerBtns>
        <LoginModal />
      </ContainerBtns>
    </Container>
  );
};

export default Header;
