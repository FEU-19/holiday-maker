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

export default function RenderFoodOptions({ roomInfo, roomOption, saveChanges }) {
  const [value, setValue] = useState({ selected: roomOption });

  const { selected } = value;
  const handleChange = (e) => {
    console.log("Clicking on ", e.target.value);
    console.log("Clicking on ", e.target);

    saveChanges(value);
  };
 

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
