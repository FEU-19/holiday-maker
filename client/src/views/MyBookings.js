import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyBookingComp from "../components/MyBookings/MyBookings"
import HeaderComp from "../components/common/Header/Header";
// stor bokstav på variabler i styled components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

const MyBooking = () => {
  const [filteredData, setFilteredData] = useState([]);

  function setFilteredDataCB(data) {
    setFilteredData(data);
  }

  return (
    <>
      <HeaderComp />
      <Container>
        <MyBookingComp />
      </Container>
    </>
  );
};

export default MyBooking;
