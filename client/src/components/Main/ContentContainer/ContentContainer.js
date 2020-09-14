import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import StarRateIcon from '@material-ui/icons/StarRate';


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
    width: 200,
    height: 170,
    marginLeft: 30,
    marginRight: 30,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 2,
  },
  button: {
    marginTop: 30,
  }
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
                    {hotel.rating === 1 && (
                      <StarRateIcon />
                    )}
                    {hotel.rating === 2 && (
                      <>
                        <StarRateIcon />
                        <StarRateIcon />
                      </>
                    )}
                    {hotel.rating === 3 && (
                      <>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </>
                    )}
                    {hotel.rating === 4 && (
                      <>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </>
                    )}
                    {hotel.rating === 5 && (
                      <>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                      </>
                    )}
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
                    <Typography variant="body2">
                      <CheckIcon /> Restaurant
                    </Typography>
                  )}
                  {hotel.pool && (
                    <Typography variant="body2">
                      <CheckIcon/> Pool
                    </Typography>
                  )}
                  {hotel.kidsClub && (
                    <Typography variant="body2">
                      <CheckIcon /> Kids club
                    </Typography>
                  )}
                  {hotel.nightEntertainment && (
                    <Typography variant="body2">
                      <CheckIcon/> Evening entertainment
                    </Typography>
                  )}
                    <Button className={classes.button}
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
