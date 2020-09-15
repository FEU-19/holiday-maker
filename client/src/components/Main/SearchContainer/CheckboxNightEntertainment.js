import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxNightEntertainment = ({
  checkedNightEntertainment,
  setCheckedNightEntertainment,
}) => {
  useEffect(() => {
    console.log(checkedNightEntertainment);
    if (!checkedNightEntertainment) {
      setCheckedNightEntertainment("none");
    }
  }, [checkedNightEntertainment, setCheckedNightEntertainment]);

  const handleChange = (e) => {
    setCheckedNightEntertainment(e.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedNightEntertainment === "none" ? false : checkedNightEntertainment}
            onChange={handleChange}
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
        }
        label="Evening Entertainment"
      />
    </>
  );
};

export default CheckboxNightEntertainment;
