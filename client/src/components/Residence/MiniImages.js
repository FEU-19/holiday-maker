import React from "react";
import Img from './Img'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
//import uuidv4 from "uuid/v4";


const MiniImages = ({images,index,updatePicIndex}) =>{

    return(
        <>
        {images.map((image,index) => (
            <Img //key={uuidv4()} 
                 image={image} 
                 index={index} 
                 updatePicIndex={updatePicIndex}/>
        ))}
        </>
    )
}

export default React.memo(MiniImages)
