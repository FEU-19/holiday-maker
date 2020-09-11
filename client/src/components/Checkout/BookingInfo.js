import React from "react";

import {
  BookingInfoDiv,
  BookingInfoContainer,
  BookingInfoBoxDiv,
  BookingInfoTextAlign,
  BookingInfoH1,
} from "./PaymentStyles";

function BookingInfo() {
  return (
    <BookingInfoDiv>
      <BookingInfoContainer>
        <BookingInfoBoxDiv>
          <BookingInfoTextAlign>
            <BookingInfoH1>Resident</BookingInfoH1>
            <p>Dep: kastrup</p>
            <p>Arrival: Manilla</p>
            <p>adults: (1x)</p>
            <p>children: (0)</p>
            <p>Dep-date: 2020-02-06 13:42</p>
            <p>Back home: 2020-02-17 14:00</p>
            <br />
            <h2>Price: 1500:-</h2>
          </BookingInfoTextAlign>
        </BookingInfoBoxDiv>

        <BookingInfoBoxDiv>
          <BookingInfoTextAlign>
            <BookingInfoH1>Flight</BookingInfoH1>
            <p>Hotel name...</p>
            <p>Booked rooms: (2x)</p>
            <p>adults: (1x)</p>
            <p>children: (0)</p>
            <p>Extras: ...</p>
            <p>From: 2020-02-06</p>
            <p>To: 2020-02-17</p>
            <br />
            <h2>Price: 1500:-</h2>
          </BookingInfoTextAlign>
        </BookingInfoBoxDiv>
      </BookingInfoContainer>
    </BookingInfoDiv>
  );
}

export default BookingInfo;
