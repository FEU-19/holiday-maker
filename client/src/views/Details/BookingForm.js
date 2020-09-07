import React, { useState } from "react";
import DropDown from "../../components/common/DropDown/DropDown";
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

const BookingForm = ({
  room,
  value,
  setValue,
  handleRadioChange,
  handleDropDownChange,
}) => {
  const [bookingInfo, setBookingInfo] = useState({});

  const handleOnChange = (e) => {
    const data = { ...bookingInfo, [e.target.name]: e.target.value };
    setBookingInfo(data);
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
              <FormLabel component="label">
                Pris på valt värde: {value[`${room.roomNumber}`]}
              </FormLabel>
              <RadioGroup
                aria-label={room.roomNumber}
                name={room.roomNumber}
                value={value}
                onChange={(e) => handleRadioChange(e)}
              >
                <FormControlLabel
                  value={room.allInclusive.toString()}
<<<<<<< HEAD
                  control={<Radio />}
=======
                  control={
                    <Radio
                      checked={
                        value[`${room.roomNumber}`] ===
                        room.allInclusive.toString()
                      }
                    />
                  }
>>>>>>> 7c328cd0168240510dc07bef059a89d8da69c0b5
                  label="All-Inclusive"
                />
                <FormControlLabel
                  value={room.halfBoard.toString()}
                  control={
                    <Radio
                      checked={
                        value[`${room.roomNumber}`] ===
                        room.halfBoard.toString()
                      }
                    />
                  }
                  label="Half-board"
                />
                <FormControlLabel
                  value={room.fullBoard.toString()}
                  control={
                    <Radio
                      checked={
                        value[`${room.roomNumber}`] ===
                        room.fullBoard.toString()
                      }
                    />
                  }
                  label="Full-board"
                />
                <FormControlLabel
                  value={room.selfCatering.toString()}
                  control={
                    <Radio
                      checked={
                        value[`${room.roomNumber}`] ===
                        room.selfCatering.toString()
                      }
                    />
                  }
                  label="Self-catering"
                />
              </RadioGroup>
            </FormControl>
          ) : (
            <p>Everything is already included</p>
          )}
          <DropDown
            handleDropDownChange={handleDropDownChange}
            extraBed={room.extraBed}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default BookingForm;
