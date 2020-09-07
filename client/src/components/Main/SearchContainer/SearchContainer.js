import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Componets
import DatePicker from './DatePicker';
import SelectCity from './SelectCity';
import CheckboxNightEntertainment from './CheckboxNightEntertainment';
import SelectAmountOfChildren from './SelectAmountOfChildren';
import ChildrenAgeSelects from './ChildrenAgeSelects.js';
import SelectAmountOfAdults from './SelectAmountOfAdults';
import CheckboxKidsClub from './CheckboxKidsClub';
import CheckboxPool from './CheckboxPool';
import CheckboxRestaurant from './CheckboxRestaurant';



// Filter functions
import adultChildToBedFilter from '../../../utils/adultChildToBedFilter.js';
import filterCity from '../../../utils/filterCity';
import filterKidsClub from '../../../utils/filterKidsClub'
import filterNightEntertainment from '../../../utils/filterNightEntertainment';
import filterPool from '../../../utils/filterPool';
import filterRestaurant from '../../../utils/filterRestaurant';
import dateFilter from '../../../utils/dateFilter.js';


const Container = styled.div`
border: 2px solid red;
width: 90vw;
display: flex;
justify-content: center;
`;

const SearchContainer = ({ setFilteredDataCB }) => {
  const [residentData, setResidentData] = useState([{}]);
  const [amountOfChildren, setAmountOfChildren] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/residents/')
    .then((res) => {
      setResidentData(res.data.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    new Promise((resolve, reject) => {
      let c = [...residentData];

      c = filterCity(c, 'default');
      c = filterPool(c, 'default');
      c = filterNightEntertainment(c, false);
      c = filterKidsClub(c, 'default');
      c = filterRestaurant(c, 'default');

      resolve(c);
    })
    .then((res) => {
      setFilteredDataCB(res);
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
          <SelectAmountOfChildren
            setAmountOfChildren={ setAmountOfChildren }
            amountOfChildren={ amountOfChildren }
          />
          <ChildrenAgeSelects amountOfChildren={ amountOfChildren } />
          <SelectCity residentData={residentData} />
          <DatePicker
          residentData={residentData}/>
          <SelectAmountOfAdults />
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
          <CheckboxRestaurant />
          <CheckboxKidsClub />
          <CheckboxNightEntertainment />
          <CheckboxPool />
         </Grid>
        </form>
      </Container>
    );
  };

  export default SearchContainer;
