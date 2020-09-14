import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import StarRateIcon from '@material-ui/icons/StarRate';
import CancelIcon from '@material-ui/icons/Cancel';


// Functions
import sortRating from "../../../utils/sortRating.js";
import sortPrice from "../../../utils/sortPrice.js";
import getAveragePrice from "../../../utils/getAveragePrice.js";

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
  },
  noResult: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',

    '& > p': {
      fontWeight: 'bold',
      fontSize: '2em',
    },

    '& > hr': {
      width: '200px',
      border: '1px solid black',
      marginLeft: 0,
      marginRight: 0,
      margin: '2em',
    },

    '& > svg': {
      color: '#e23131',
      fontSize: '64px',
    }
  }
}));

const ContentContainer = ({ filteredData, sortOn, searching }) => {
  const [sortedData, setSortedData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setSortedData([...filteredData]);
  }, [filteredData])

  useEffect(() => {
    // If the option 'None' was selected
    if (!sortOn) return setSortedData([...filteredData]);

    if (sortOn === 'Price low to high') {
      // ...
    }

    if (sortOn === 'Rating high to low') {
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
  {!sortedData.length && searching ?

    <div className={classes.noResult}>
      <Typography> No available hotels </Typography>
      <hr></hr>
      <CancelIcon></CancelIcon>
    </div>

    : null }
  </div>

);
};
export default ContentContainer;
