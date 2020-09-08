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


const Container = styled.div`
border: 2px solid red;
width: 90vw;
display: flex;
justify-content: center;
`;

const SearchContainer = ({ setFilteredDataCB }) => {
  const [residentData, setResidentData] = useState([{}]);
  const [city, setCity] = useState('');
  const [checkedKidsClub, setCheckedKidsclub] = useState(false);
  const [checkedNightEntertainment, setCheckedNightEntertainment] = useState(false);
  const [checkedPool, setCheckedPool] = useState(false);
  const [checkedRestaurant, setCheckedRestaurant] = useState(false);
  const [amountOfChildren, setAmountOfChildren] = useState(0);
  const [amountOfAdults, setAmountOfAdults] = useState(1);
  const [distanceCity, setDistanceCity] = useState('');
  const [beachDistance, setBeachDistance] = useState('');
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

      c = filterCity(c, city);
      c = filterPool(c, 'default');
      c = filterNightEntertainment(c, false);
      c = filterKidsClub(c, 'default');
      c = filterRestaurant(c, 'default');
      c = filterDistanceBeach(c, beachDistance );
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
          <SelectAmountOfAdults amountOfAdults= {amountOfAdults} setAmountOfAdults= {setAmountOfAdults}/>
          <SelectDistanceCity
            distanceCity={ distanceCity }
            setDistanceCity={ setDistanceCity }
          />
          <SelectDistanceBeach
            beachDistance={beachDistance}
            setBeachDistance={setBeachDistance} />
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
          <CheckboxRestaurant checkedRestaurant= {checkedRestaurant} setCheckedRestaurant= {setCheckedRestaurant}/>
          <CheckboxKidsClub checkedKidsClub= {checkedKidsClub} setCheckedKidsclub= {setCheckedKidsclub} />
          <CheckboxNightEntertainment checkedNightEntertainment= {checkedNightEntertainment} setCheckedNightEntertainment= {setCheckedNightEntertainment}/>
          <CheckboxPool checkedPool= {checkedPool} setCheckedPool= {setCheckedPool}/>

         </Grid>
        </form>
      </Container>
    );
  };

  export default SearchContainer;
