import React, { useEffect } from "react";
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxTheme, checkboxStyle } from "./CheckboxTheme";
import { ThemeProvider } from '@material-ui/core/styles';

const CheckboxRestaurant = ({checkedRestaurant, setCheckedRestaurant}) => {
  const theme = checkboxStyle();

  const handleChange = (e) => {
    setCheckedRestaurant(e.target.checked);
  }

  useEffect(() => {
    if (!checkedRestaurant) {
      setCheckedRestaurant('none');
    }
  }, [checkedRestaurant, setCheckedRestaurant])

  return (
    <>
    <ThemeProvider theme={checkboxTheme}>
      <FormControlLabel control={<Checkbox
          className={theme.root}
          checkedIcon={<span className={clsx(theme.icon, theme.checkedIcon)} />}
          icon={<span className={theme.icon} />}
          checked={checkedRestaurant === 'none' ? false : checkedRestaurant}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'restaurant' }} />}
          label="Restaurant"
        />
      </ThemeProvider>
    </>
)
};

export default CheckboxRestaurant;
