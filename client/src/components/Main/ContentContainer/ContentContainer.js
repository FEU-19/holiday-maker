import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";


// Functions
import sortRating from "../../../utils/sortRating.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65vw',
    padding: 50,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    height: 200,
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));




const ContentContainer = ({ filteredData, sortOn }) => {
  const [sortedData, setSortedData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setSortedData([...filteredData]);
  }, [filteredData])

  useEffect(() => {
    // If the option 'None' was selected
    if (!sortOn) return setSortedData([...filteredData]);

    if (sortOn === 'Price') {
      // ...
    }

    if (sortOn === 'Rating') {
      // ...
    }
  }, [sortOn, filteredData])

  return (
    <div className={classes.root}>
      {sortedData.map((hotel) => {
        return (
          <div key={hotel._id}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="hotels" src={hotel.rooms[0].images[0]} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={4} >
                  <Typography gutterBottom variant="subtitle1">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {hotel.rating}
                  </Typography>
                  <Typography variant="body2">
                    City: {hotel.city}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Distance to the beach {hotel.distanceToBeach} m.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Distance to the center {hotel.distanceToCity} m.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {hotel.restaurant && (
                    <p>
                      <CheckIcon /> Restaurant
                    </p>
                  )}
                  {hotel.pool && (
                    <p>
                      <CheckIcon /> Pool
                    </p>
                  )}
                  {hotel.kidsClub && (
                    <p>
                      <CheckIcon /> Kids club
                    </p>
                  )}
                  {hotel.nightEntertainment && (
                    <p>
                      <CheckIcon/> Evening entertainment
                    </p>
                  )}
                    <Button
                      variant="contained"
                      color="default"
                    >
                      <Link
                        to={{ pathname: `/residence/${hotel._id}`, state: { hotel } }}
                      >
                      More Info
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};
export default ContentContainer;
