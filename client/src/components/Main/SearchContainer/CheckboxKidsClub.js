import React, { useEffect } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const CheckboxKidsClub = ({checkedKidsClub, setCheckedKidsclub}) => {

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
      <FormControlLabel control={<Checkbox
        checked={checkedKidsClub === 'none' ? false : checkedKidsClub}
        onChange={handleChange}
        color="default"
        inputProps={{ 'aria-label': 'kids club' }} />}
        label="Kids club "
      />
    </>
  )
};

export default CheckboxKidsClub;
