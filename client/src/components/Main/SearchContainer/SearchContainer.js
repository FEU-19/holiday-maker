import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Componets
import DatePicker from './DatePicker';
import SelectAmountOfChildren from './SelectAmountOfChildren';
import ChildrenAgeSelects from './ChildrenAgeSelects.js';

// Filter functions
import adultChildToBedFilter from '../../../utils/adultChildToBedFilter.js';
import filterCity from '../../../utils/filterCity';

const Container = styled.div`
border: 2px solid red;
width: 90vw;
display: flex;
justify-content: center;
`;

const SearchContainer = () => {
  const [residentData, setResidentData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([]);
  const [amountOfChildren, setAmountOfChildren] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/api/residents/')
    .then((res) => {
      setResidentData(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  // whenever filterData changes console.log() runs on the filt
  useEffect(() => {
    console.log(filteredData);
  }, [filteredData])

  function onSubmit(e) {
    e.preventDefault();

    // second argument is placeholder for userInput about the specific city.
    setFilteredData(filterCity(residentData, 'Manila'));
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
          <DatePicker />
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

          </Grid>
        </form>
      </Container>
    );
  };

  export default SearchContainer;
