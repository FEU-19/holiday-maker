//import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import React from 'react'

const Star = ({hotelID}) => {

  function addBookmark(){
    // Make post to server and save hotel ID in user bookmarkedHotels[]
    console.log(hotelID);
  }

    return(
        <>
        <Rating
        max={1}
        onClick={addBookmark}
        />
        </>
    )
}

export default Star
