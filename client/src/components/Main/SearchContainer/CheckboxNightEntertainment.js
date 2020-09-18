import React, { useEffect } from "react";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { checkboxTheme, checkboxStyle } from "./CheckboxTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const CheckboxNightEntertainment = ({
  checkedNightEntertainment,
  setCheckedNightEntertainment,
}) => {
  const theme = checkboxStyle();
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
      <ThemeProvider theme={checkboxTheme}>
        <FormControlLabel
          control={
            <Checkbox
              className={theme.root}
              checkedIcon={<span className={clsx(theme.icon, theme.checkedIcon)} />}
              icon={<span className={theme.icon} />}
              checked={checkedNightEntertainment === "none" ? false : checkedNightEntertainment}
              onChange={handleChange}
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
          }
          label="Evening Entertainment"
        />
      </ThemeProvider>
    </>
  );
};

export default CheckboxNightEntertainment;
