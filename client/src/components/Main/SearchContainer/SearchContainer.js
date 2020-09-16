import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';




// Componets
import DatePicker from "./DatePicker";
import SelectCity from "./SelectCity";
import CheckboxNightEntertainment from "./CheckboxNightEntertainment";
import SelectAmountOfChildren from "./SelectAmountOfChildren";
import ChildrenAgeSelects from "./ChildrenAgeSelects.js";
import SelectAmountOfAdults from "./SelectAmountOfAdults";
import CheckboxKidsClub from "./CheckboxKidsClub";
import CheckboxPool from "./CheckboxPool";
import CheckboxRestaurant from "./CheckboxRestaurant";
import SelectDistanceCity from "./SelectDistanceCity.js";
import SelectDistanceBeach from "./SelectDistanceBeach";


// Filter functions
import filterPresentCrib from '../../../utils/filterPresentCrib';
import filterAmountOfTravelers from "../../../utils/filterAmountOfTravelers";
import filterCity from "../../../utils/filterCity";
import filterKidsClub from "../../../utils/filterKidsClub";
import filterNightEntertainment from "../../../utils/filterNightEntertainment";
import filterPool from "../../../utils/filterPool";
import filterRestaurant from "../../../utils/filterRestaurant";
import filterDistanceBeach from "../../../utils/filterDistanceBeach";
import filterDistanceCity from "../../../utils/filterDistanceCity";
import filterDate from "../../../utils/filterDate";
/*
const StyledContainer = styled(Container)`
  padding-top: 60px;
  background-color: #F5F5F5;
`; */

const useStyles = makeStyles((theme) => ({
  backgroundColor: {
    backgroundColor: '#F5F5F5',
    paddingTop: 70,
    minHeight: 350,
  },

}));


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ButtonContainer = styled(Grid)`
  border-bottom: 1px solid grey;
  padding: 30px;
`;

const theme = createMuiTheme({
  palette: {
    primary: { main: '#F23622' },
    secondary: { main: '#F23622' },
  },
});


const SearchContainer = ({ setFilteredDataCB, setSearching, setQueryParams }) => {
  const [residentData, setResidentData] = useState([]);
  const [city, setCity] = useState("");
  const [checkedKidsClub, setCheckedKidsclub] = useState("none");
  const [checkedNightEntertainment, setCheckedNightEntertainment] = useState(
    "none"
  );
  const [checkedPool, setCheckedPool] = useState("none");
  const [checkedRestaurant, setCheckedRestaurant] = useState("none");
  const [amountOfChildren, setAmountOfChildren] = useState(0);
  const [ageOfChildren, setAgeOfChildren] = useState([]);
  const [distanceCity, setDistanceCity] = useState(0);
  const [distanceBeach, setDistanceBeach] = useState(0);
  const [amountOfAdults, setAmountOfAdults] = useState(1);
  const [date, setDate] = useState({
    start: "2020-06-02T00:00:00.000Z",
    end: "2020-06-08T00:00:00.000Z",
  });
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/residences/")
      .then((res) => {
        setResidentData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    let queryParams = {
      city: city ? city : 'none',
      checkedKidsClub,
      checkedNightEntertainment,
      checkedRestaurant,
      checkedPool,
      distanceBeach: distanceBeach ? distanceBeach : 'none',
      distanceCity: distanceCity ? distanceCity : 'none',
      amountOfAdults,
      amountOfChildren,
      ageOfChildren,
      date,
      presentCrib: filterPresentCrib(ageOfChildren) || false
    };

    setQueryParams(queryParams);

    let c = [...residentData];

    c = filterAmountOfTravelers(c, amountOfAdults, ageOfChildren);
    c = filterCity(c, city);
    c = filterPool(c, checkedPool);
    c = filterNightEntertainment(c, checkedNightEntertainment);
    c = filterKidsClub(c, checkedKidsClub);
    c = filterRestaurant(c, checkedRestaurant);
    c = filterDistanceBeach(c, distanceBeach);
    c = filterDistanceCity(c, distanceCity);
    c = filterDate(c, date)

    setFilteredDataCB(c);
    setSearching(true);

  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} className={classes.backgroundColor} >
        <Form onSubmit={onSubmit}>
          <Grid
            className="search-top"
            container
            spacing={1}
            justify="space-around"
          >
            <Grid item xs={2}>
              <SelectCity
                residentData={residentData}
                city={city}
                setCity={setCity}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePicker
                residentData={residentData}
                date={date}
                setDate={setDate}
              />
            </Grid>
            <Grid item xs={2}>
              <SelectAmountOfAdults
                setAmountOfAdults={setAmountOfAdults}
                amountOfAdults={amountOfAdults}
              />
            </Grid>
            <Grid item xs={2}>
              <SelectAmountOfChildren
                setAmountOfChildren={setAmountOfChildren}
                amountOfChildren={amountOfChildren}
              />
            </Grid>
            <Grid
              style={{
                minHeight: 110,
                minWidth: 210,
                marginTop: 10,
                marginBottom: -70
              }}
              container
              spacing={1}
              item xs={4}
            >
              <ChildrenAgeSelects
                amountOfChildren={amountOfChildren}
                setAgeOfChildren={setAgeOfChildren}
              />
            </Grid>
          </Grid>
          <ButtonContainer
            className="search-top"
            container
            spacing={1}
            justify="flex-end"
          >
            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                placeholder="Submit"
              >
                Search
            </Button>
            </Grid>
          </ButtonContainer>
          <Grid
            className="search-bottom"
            container
            spacing={1}
            justify="space-around"
          >
            <Grid item xs={2}>
              <CheckboxRestaurant
                checkedRestaurant={checkedRestaurant}
                setCheckedRestaurant={setCheckedRestaurant}
              />
            </Grid>
            <Grid item xs={2}>
              <CheckboxKidsClub
                checkedKidsClub={checkedKidsClub}
                setCheckedKidsclub={setCheckedKidsclub}
              />
            </Grid>
            <Grid item xs={2}>
              <CheckboxNightEntertainment
                checkedNightEntertainment={checkedNightEntertainment}
                setCheckedNightEntertainment={setCheckedNightEntertainment}
              />
            </Grid>
            <Grid item xs={2}>
              <CheckboxPool
                checkedPool={checkedPool}
                setCheckedPool={setCheckedPool}
              />
            </Grid>
            <Grid item xs={2}>
              <SelectDistanceCity
                distanceCity={distanceCity}
                setDistanceCity={setDistanceCity}
              />
            </Grid>
            <Grid item xs={2}>
              <SelectDistanceBeach
                distanceBeach={distanceBeach}
                setDistanceBeach={setDistanceBeach}
              />
            </Grid>
          </Grid>
        </Form>
      </Container>
    </ThemeProvider>
  );
};

export default SearchContainer;
