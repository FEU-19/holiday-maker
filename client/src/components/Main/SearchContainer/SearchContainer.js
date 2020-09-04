import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import SelectAmountOfChildren from './SelectAmountOfChildren';

import SelectCity from './SelectCity';
import CheckboxEveningEntmt from './CheckboxEveningEntmt';

import { Button } from '@material-ui/core';

import DatePicker from './DatePicker';
import SelectAmountOfAdults from './SelectAmountOfAdults';
import CheckboxKidsClub from './CheckboxKidsClub';

// Filter functions
import adultChildToBedFilter from '../../../utils/adultChildToBedFilter.js';
import filterCity from '../../../utils/filterCity';
import filterKidsClub from '../../../utils/filterKidsClub'
import filterNightEntertainment from '../../../utils/filterNightEntertainment';
import filterPool from '../../../utils/filterPool';
import filterRestaurant from '../../../utils/filterRestaurant';


const Container = styled.div`
border: 2px solid red;
width: 90vw;
display: flex;
justify-content: center;
`;

const SearchContainer = () => {
  const [residentData, setResidentData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/residents/')
    .then((res) => {
      setResidentData(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  // whenever filterData changes console.log() runs.
  useEffect(() => {
    console.log(filteredData);
  }, [filteredData])

  function onSubmit(e) {
    e.preventDefault();

    // An example of how to handle our filter functions
    // Updated task "created func which shows the filtered hotel obj"
    new Promise((resolve, reject) => {
      let c = [...residentData];

      c = filterCity(c, 'Manila');
      c = filterPool(c, true);
      c = filterNightEntertainment(c, false);
      c = filterKidsClub(c, 'default');
      c = filterRestaurant(c, 'default');

      resolve(c);
    })
    .then((res) => {
      setFilteredData(res);
    })
    .catch((err) => {
      console.error(err);
    });
    
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Grid
          className="search-top"
          container
          justify="space-around"
        >
          <SelectCity residentData={residentData} />
          <DatePicker />
          <SelectAmountOfAdults />
          <SelectAmountOfChildren />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            placeholder="Submit"
          >
            Submit
          </Button>
        </Grid>
        <Grid
          className="search-bottom"
          container
          justify="space-around"
        >

          <CheckboxKidsClub />
          <CheckboxEveningEntmt />
            

          </Grid>
        </form>
      </Container>
    );
  };

  export default SearchContainer;
