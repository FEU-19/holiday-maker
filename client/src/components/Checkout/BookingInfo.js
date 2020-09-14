import React from "react";

import {
  BookingInfoDiv,
  BookingInfoContainer,
  BookingInfoBoxDiv,
  BookingInfoTextAlign,
  BookingInfoTitle,
  BookingInfoText,
  BookingInfoList,
  BookingInfoItems,
  Title,
  SmlHR,
} from "./PaymentStyles";
import Hotel from "@material-ui/icons/Hotel";
import Flight from "@material-ui/icons/Flight";

function BookingInfo() {
  return (
    <BookingInfoDiv>
      <Title>Booking Information</Title>

      <BookingInfoContainer>
        <BookingInfoTitle>
          <Hotel style={{ marginRight: "5px" }} /> Resident
        </BookingInfoTitle>
        <BookingInfoBoxDiv>
          <BookingInfoList>
            <BookingInfoItems>Check-In: 2020/09/09</BookingInfoItems>
            <BookingInfoItems>Check-Out: 2020/09/20</BookingInfoItems>
            <BookingInfoItems> Room Type: Full-Board</BookingInfoItems>
            <BookingInfoItems> Rooms: 4</BookingInfoItems>
            <BookingInfoItems> Adults: 2 </BookingInfoItems>
            <BookingInfoItems> Children: 2 </BookingInfoItems>
            <BookingInfoItems> Extra Bed: 0</BookingInfoItems>
          </BookingInfoList>
          <SmlHR />
          <BookingInfoText>Amount: 20000kr</BookingInfoText>
        </BookingInfoBoxDiv>
        <BookingInfoTitle>
          <Flight style={{ marginRight: "5px" }} /> Flight
        </BookingInfoTitle>
        <BookingInfoBoxDiv>
          <BookingInfoList>
            <BookingInfoItems>Departure Time:2020/09/08 12:20</BookingInfoItems>
            <BookingInfoItems> Arrival Time:2020/09/09 14:20 </BookingInfoItems>
            <BookingInfoItems>Departure: Copenhagen</BookingInfoItems>
            <BookingInfoItems>Destination: Miami</BookingInfoItems>
            <BookingInfoItems> Adults: 2 </BookingInfoItems>
            <BookingInfoItems> Children: 2 </BookingInfoItems>
          </BookingInfoList>
          <SmlHR />
          <BookingInfoText>Amount: 22200kr</BookingInfoText>
        </BookingInfoBoxDiv>
        <h2
          style={{
            alignSelf: "flex-end",
            marginRight: "40px",
            color: "#E55B5B",
          }}
        >
          Total: 42200 kr
        </h2>
      </BookingInfoContainer>
    </BookingInfoDiv>
  );
}

export default BookingInfo;
