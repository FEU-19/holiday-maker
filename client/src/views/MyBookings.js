import React from "react";
import styled from "styled-components";
import MyBookingComp from "../components/MyBookings/MyBookings";
import HeaderComp from "../components/common/Header/Header";
// stor bokstav på variabler i styled components
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

const MyBooking = () => {
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
