import React, { useEffect } from "react";
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxTheme, checkboxStyle } from "./CheckboxTheme";
import { ThemeProvider } from '@material-ui/core/styles';

const CheckboxKidsClub = ({checkedKidsClub, setCheckedKidsclub}) => {
  const theme = checkboxStyle();

  useEffect(() => {
    if (!checkedKidsClub) {
      setCheckedKidsclub('none');
    }
  }, [checkedKidsClub, setCheckedKidsclub])

  const handleChange = (e) => {
    setCheckedKidsclub(e.target.checked);
  }

  return (
    <>
    <ThemeProvider theme={checkboxTheme}>
      <FormControlLabel control={<Checkbox
          className={theme.root}
          checkedIcon={<span className={clsx(theme.icon, theme.checkedIcon)} />}
          icon={<span className={theme.icon} />}
          checked={checkedKidsClub === 'none' ? false : checkedKidsClub}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'kids club' }} />}
          label="Kids club "
        />
      </ThemeProvider>
    </>
)
};

export default CheckboxKidsClub;
