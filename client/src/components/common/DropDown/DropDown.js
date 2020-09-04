import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dropdownBox: {
    width: "200px",
  },
}));

const roomsArr = Array.from(Array(20), (_, i) => i + 1);

const extraBedArr = Array.from(
  Array(Math.floor(Math.random() * 10)),
  (_, i) => i + 1
);

const DropDown = () => {
  const classes = useStyles();

  let arr = [];

  for (let i = 1; i <= arr.length; i++) {
    arr.push(i);
  }

  const [state, setState] = React.useState(0);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  //   const handleClick = () => {
  //     console.log(state);
  //   };

  return (
    <Box className={classes.dropdownBox} display="flex" flexDirection="column">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="native-simple">№ rooms</InputLabel>
        <NativeSelect value={state} onChange={handleChange}>
          <option aria-label="" value="" />
          {roomsArr.map((v) => {
            return (
              <option value={v} key={v}>
                {v}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      {extraBedArr.length < 0 ? (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="native-simple">Extra beds</InputLabel>
          <NativeSelect value={state} onChange={handleChange}>
            <option aria-label="" value="" />
            {extraBedArr.map((v) => {
              return (
                <option value={v} key={v}>
                  {v}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      ) : (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-native-disabled" disabled>
            Extra beds
          </InputLabel>
          <NativeSelect disabled></NativeSelect>
        </FormControl>
      )}
    </Box>
  );
};

export default DropDown;
