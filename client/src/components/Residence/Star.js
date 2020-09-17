import Rating from '@material-ui/lab/Rating';
import React from 'react';

  
const Star = ({value}) => {

    return(
        <>
        <Rating
        max={1}
        value={value}
        disabled
        />
        </>
        
 
    )
}

export default Star