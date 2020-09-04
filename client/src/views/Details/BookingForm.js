import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { Checkbox } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const BookingForm = () => {
  const [bookingInfo, setBookingInfo] = useState({});

  const handleOnChange = (e) => {
    const data = { ...bookingInfo, [e.target.name]: e.target.value };
    setBookingInfo(data);
  };

  return (
    <Wrapper>
      <DatePicker handleOnChange={handleOnChange} />
      <Checkbox name="" />
    </Wrapper>
  );
};
export default BookingForm;
