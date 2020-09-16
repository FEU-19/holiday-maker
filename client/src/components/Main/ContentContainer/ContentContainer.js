import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import StarRateIcon from '@material-ui/icons/StarRate';

// Functions
import sortRating from "../../../utils/sortRating.js";
import sortPrice from "../../../utils/sortPrice.js";
import getAveragePrice from "../../../utils/getAveragePrice.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '85vw',
  },
  paper: {
    padding: theme.spacing(4),
    margin: 20,
    height: 200,
    backgroundColor: '#F5F5F5',
    border: '#162C72',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 160,
    marginLeft: 50,
    marginRight: 30,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 2,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F23622',
    width: 120,
    '&:hover': {
      backgroundColor: '#990000',
    }
  },
  link: {
    textDecoration: 'none',
    color: '#F5F5F5',
  },
  name: {
    color: '#F23622',
    fontSize: 20,
    margin: 0,
  },
  checkIcon: {
    fontSize: 20,
    color: ' #4AB0BD',
  },
  bottom: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  checkLabel:{
    paddingRight: 7,
  },
  rating: {
    color: 'yellow',
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

const ContentContainer = ({ filteredData, sortOn, searching, queryParams }) => {

  const [sortedData, setSortedData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setSortedData([...filteredData]);
  }, [sortOn, filteredData])

  useEffect(() => {
    // If the option 'None' was selected
    if (!sortOn) return setSortedData([...filteredData]);

    if (sortOn === 'Price low to high') {
      setSortedData(sortPrice(sortedData, true));
    }

    if (sortOn === 'Rating high to low') {
      setSortedData(sortRating(sortedData, true));
    }
    // eslint-disable-next-line
  }, [sortOn, filteredData, setSortedData])

  return (
    <div className={classes.root}>
      {sortedData.map((hotel) => {
        return (
          <div key={hotel._id}>
            <Paper className={classes.paper}>
              <Grid container spacing={5}>
                <Grid item xs className={classes.image}>
                  <img className={classes.img} alt="hotels" src={hotel.rooms[0].images[0]} />
                </Grid>
                <Grid item xs={9} >
                  <Typography  className={classes.name} gutterBottom variant="subtitle1">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {hotel.rating === 1 && (
                      <StarRateIcon className={classes.rating}/>
                    )}
                    {hotel.rating === 2 && (
                      <>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                      </>
                    )}
                    {hotel.rating === 3 && (
                      <>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                      </>
                    )}
                    {hotel.rating === 4 && (
                      <>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                      </>
                    )}
                    {hotel.rating === 5 && (
                      <>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
                        <StarRateIcon className={classes.rating}/>
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
              </Grid>
              <Grid container className={classes.bottom}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={5}>
                  {hotel.restaurant && (
                    <Typography variant="caption" className={classes.checkLabel}>
                      <CheckCircleIcon className={classes.checkIcon}/> Restaurant
                    </Typography>
                  )}
                  {hotel.pool && (
                    <Typography variant="caption" className={classes.checkLabel}>
                      <CheckCircleIcon className={classes.checkIcon}/> Pool
                    </Typography>
                  )}
                  {hotel.kidsClub && (
                    <Typography variant="caption" className={classes.checkLabel}>
                      <CheckCircleIcon  className={classes.checkIcon}/> Kids club
                    </Typography>
                  )}
                  {hotel.nightEntertainment && (
                    <Typography variant="caption" className={classes.checkLabel}>
                      <CheckCircleIcon className={classes.checkIcon}/> Evening entertainment
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle1">
                    <b>SEK {getAveragePrice(hotel)}</b> avg/night
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button className={classes.button}
                    variant="contained"
                  >
                    <Link className={classes.link}
                      to={{ pathname: `/residence/${hotel._id}`, state: { hotel, queryParams } }}
                    >
                      Select
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
