import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
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

export default function RenderFoodOptions({
  initiallySelected,
  newRoomOptions,
  setNewRoomOptions,
  data,
}) {
  const [selectedValue, setSelectedValue] = useState(initiallySelected);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);

    setNewRoomOptions({
      ...newRoomOptions,
      ...data.find((room) => room.option === e.target.value),
    });
  };

  const renderFormControl = (room) => {
    const labelText = `${room.name}: ${
      room.price > 0 || room.option === "selfCatering" ? room.price : "N/A"
    }`;
    const disabled = room.price === 0 && room.option !== "selfCatering";

    return (
      <FormControlLabel
        key={room.option}
        style={{ borderTop: "1px solid #ccd9dd" }}
        value={room.option}
        control={<CustomRadio />}
        disabled={disabled}
        label={<p style={{ paddingRight: "10vw" }}>{labelText}</p>}
        labelPlacement="start"
      />
    );
  };

  return (
    <>
      <RadioGroup
        aria-label="food option"
        name="food option"
        value={selectedValue}
        onChange={handleChange}
        checked={selectedValue}
      >
        {data.map(renderFormControl)}
      </RadioGroup>
    </>
  );
}
