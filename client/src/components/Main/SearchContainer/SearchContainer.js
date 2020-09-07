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
import SelectDistanceCity from './SelectDistanceCity.js';
import SelectDistanceBeach from './SelectDistanceBeach';

// Filter functions
import adultChildToBedFilter from '../../../utils/adultChildToBedFilter.js';
import filterCity from '../../../utils/filterCity';
import filterKidsClub from '../../../utils/filterKidsClub'
import filterNightEntertainment from '../../../utils/filterNightEntertainment';
import filterPool from '../../../utils/filterPool';
import filterRestaurant from '../../../utils/filterRestaurant';
import filterDate from '../../../utils/filterDate.js';
import filterDistanceBeach from '../../../utils/filterDistanceBeach';
import filterDistanceCity from '../../../utils/filterDistanceCity';


const Container = styled.div`
border: 2px solid red;
width: 90vw;
display: flex;
justify-content: center;
`;

const SearchContainer = ({ setFilteredDataCB }) => {
  const [residentData, setResidentData] = useState([{}]);
  const [city, setCity] = useState('');
  const [amountOfChildren, setAmountOfChildren] = useState(0);
  const [distanceCity, setDistanceCity] = useState('');
  const [distanceBeach, setDistanceBeach] = useState('');
  const [date, setDate] = useState({start: '2020-06-02T10:30:00.000Z', end: '2020-06-08T10:00:00.000Z'})

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
<<<<<<< HEAD

      c = filterCity(c, 'default');
=======
      
      c = filterCity(c, city);
>>>>>>> ee99966e615694a29620c6e7964e7c493289126e
      c = filterPool(c, 'default');
      c = filterNightEntertainment(c, false);
      c = filterKidsClub(c, 'default');
      c = filterRestaurant(c, 'default');
      c = filterDistanceBeach(c, distanceBeach );
      c = filterDistanceCity(c, distanceCity)
      // c = filterDate(c, date);

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
          <SelectCity residentData={residentData} city={city} setCity={setCity} />
          <DatePicker
            residentData={residentData}
            date={date}
            setDate={setDate}/>
          <SelectAmountOfAdults />
          <SelectDistanceCity
            distanceCity={ distanceCity }
            setDistanceCity={ setDistanceCity }
          />
          <SelectDistanceBeach
            distanceBeach={distanceBeach}
            setDistanceBeach={setDistanceBeach} />
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
