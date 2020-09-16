import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Radio, RadioGroup } from "@material-ui/core";

const CustomRadio = withStyles({
  root: {
    color: "#4AB0BD",
    "&$selected": {
      color: "#4AB0BD",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RenderFoodOptions({ roomInfo, roomOption }) {
  const [value, setValue] = useState({ selected: roomOption });

  const { selected } = value;
  const handleChange = (e) => {
    console.log("Clicking on ", e.target.value);
    setValue({ selected: e.target.value });
  };
  //  console.log('startvärdet ',  roomOption);
  console.log(
    `value.selected = ${value.selected}    roomInfo.allInclusive = ${roomInfo.allInclusive}. selected = ${selected} value = ${value} roomInfo = ${roomInfo} roomOption = ${roomOption}`
  );

  return (
    <>
      <RadioGroup
        aria-label="price"
        name="price"
        value={selected}
        onChange={handleChange}
        checked={value.selected}
      >
        <FormControlLabel
          style={{ borderTop: "1px solid #ccd9dd" }}
          value={roomInfo.allInclusive.toString()}
          control={<CustomRadio />}
          disabled={!roomInfo.allInclusive}
          // checked={value.selected === roomInfo.allInclusive ? true : false}
          label={
            roomInfo.allInclusive ? (
              <p style={{ paddingRight: "10vw" }}>
                All Inclusive: {`${roomInfo.allInclusive}:-`}
              </p>
            ) : (
              <p style={{ paddingRight: "10vw" }}>All Inclusive: N/A</p>
            )
          }
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ borderTop: "1px solid #ccd9dd" }}
          value={roomInfo.fullBoard.toString()}
          control={<CustomRadio />}
          // checked={value.selected === roomInfo.fullBoard ? true : false}
          disabled={!roomInfo.fullBoard}
          label={
            roomInfo.fullBoard ? (
              <p style={{ paddingRight: "10vw" }}>
                Full Board: {`${roomInfo.fullBoard}:-`}
              </p>
            ) : (
              <p style={{ paddingRight: "10vw" }}>Full Board: N/A</p>
            )
          }
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ borderTop: "1px solid #ccd9dd" }}
          value={roomInfo.halfBoard.toString()}
          control={<CustomRadio />}
          // checked={value.selected === roomInfo.halfBoard ? true : false}
          disabled={!roomInfo.halfBoard}
          label={
            roomInfo.halfBoard ? (
              <p style={{ paddingRight: "10vw" }}>
                Half Board: {`${roomInfo.halfBoard}:-`}
              </p>
            ) : (
              <p style={{ paddingRight: "10vw" }}>Half Board: N/A</p>
            )
          }
          labelPlacement="start"
        />
        <FormControlLabel
          style={{ borderTop: "1px solid #ccd9dd" }}
          value={roomInfo.selfCatering.toString()}
          control={<CustomRadio />}
          // checked={value.selected === roomInfo.selfCatering ? true : false}
          label={
            roomInfo.selfCatering || (
              <p style={{ paddingRight: "10vw" }}>
                Self Catering: {`${roomInfo.selfCatering}:-`}
              </p>
            )
          }
          labelPlacement="start"
        />
      </RadioGroup>
    </>
  );
}
