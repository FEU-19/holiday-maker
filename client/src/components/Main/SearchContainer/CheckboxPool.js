import React, { useEffect } from "react";
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkboxTheme, checkboxStyle } from "./CheckboxTheme";
import { ThemeProvider } from '@material-ui/core/styles';

const CheckboxPool = ({checkedPool, setCheckedPool}) => {
  const theme = checkboxStyle();

  useEffect(() => {
    if (!checkedPool) {
      setCheckedPool('none');
    }
  }, [checkedPool, setCheckedPool])

  const handleChange = (e) => {
    setCheckedPool(e.target.checked);
  }

  return (
    <>
    <ThemeProvider theme={checkboxTheme}>
      <FormControlLabel control={<Checkbox
          className={theme.root}
          checkedIcon={<span className={clsx(theme.icon, theme.checkedIcon)} />}
          icon={<span className={theme.icon} />}
          checked={checkedPool === 'none' ? false : checkedPool}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'pool' }} />}
          label="Pool "
        />
      </ThemeProvider>
    </>
)
};

export default CheckboxPool;
