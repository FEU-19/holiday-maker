import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectCity = ({ residentData, city, setCity }) => {

  function handleChange(e) {
    let userInput = e.target.value;

    if (userInput === 'None') return setCity('');

    setCity(userInput);
  }

  let uniqueCity = residentData.reduce((unique, item) => unique.includes(item.city) ? unique : [...unique, item.city], []);
  uniqueCity.unshift('None');

  return (
    <>
      <InputLabel id="selectcity">City</InputLabel>
      <Select
        value={city || 'None'}
        id="selectcity"
        onChange={handleChange}
      >
        {uniqueCity.map((city, i) => {
          return (
            <MenuItem
              key={city + i}
              value={city}
              onChange={handleChange}
              >{city}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
};

export default SelectCity;
