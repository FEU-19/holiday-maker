import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



const SelectCity = ({ residentData, city, setCity }) => {

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const mapCities = residentData.map((city, i) => {
        return <MenuItem key={city + i} value={city.city} onChange={handleChange}>{city.city}</MenuItem>
    })

    return (
        <>
            <InputLabel id="selectcity">City</InputLabel>
            <Select
                value={city}
                displayEmpty
                id="selectcity"
                onChange={handleChange}
            >
                {mapCities}
            </Select>
        </>
    )
};

export default SelectCity;

