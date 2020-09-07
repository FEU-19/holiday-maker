import React, { useState } from "react";
import DropDown from '../../components/common/DropDown/DropDown';
import DatePicker from "./DatePicker";
import {
  Grid,
  // Paper,
  // Divider,
  // Button,
  // Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BookingForm = ({ room, value, setValue }) => {
  const [bookingInfo, setBookingInfo] = useState({});

  const handleOnChange = (e) => {
    const data = { ...bookingInfo, [e.target.name]: e.target.value };
    setBookingInfo(data);
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12}>
          {/* <DatePicker handleOnChange={handleOnChange} /> */}
        </Grid>
        <Grid item xs={12}>
          {room.allInclusive ? (
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Pris på valt värde: {value}
              </FormLabel>
              <RadioGroup
                aria-label="options"
                name="options"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value={room.allInclusive.toString()}
                  control={<Radio />}
                  label="All-Inclusive"
                />
                <FormControlLabel
                  value={room.halfBoard.toString()}
                  control={<Radio />}
                  label="Half-board"
                />
                <FormControlLabel
                  value={room.fullBoard.toString()}
                  control={<Radio />}
                  label="Full-board"
                />
                <FormControlLabel
                  value={room.selfCatering.toString()}
                  control={<Radio />}
                  label="Self-catering"
                />
              </RadioGroup>
              
            </FormControl>
          ) : (
            <p>Everything is already included</p>
          )}
          <DropDown extraBed={room.extraBed} />
        </Grid>
      </Grid>
      
    </Wrapper>
  );
};

export default BookingForm;
