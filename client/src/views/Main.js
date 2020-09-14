import React, { useState } from "react";
import styled from "styled-components";

import SearchContainer from "../components/Main/SearchContainer/SearchContainer";
import ContentContainer from "../components/Main/ContentContainer/ContentContainer";
import ChangeBookingModal from '../components/modals/ChangeBooking/ChangeBookingModal';
import HeaderComp from "../components/common/Header/Header";
// stor bokstav på variabler i styled components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

const Main = () => {
  const [filteredData, setFilteredData] = useState([]);

  function setFilteredDataCB(data) {
    setFilteredData(data);
  }

  return (
    <>
      <HeaderComp />
      <ChangeBookingModal />
      <Container>
        <SearchContainer setFilteredDataCB={setFilteredDataCB} />
        <ContentContainer filteredData={filteredData} />
      </Container>
    </>
  );
};

export default Main;
