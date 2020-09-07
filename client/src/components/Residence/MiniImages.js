import React from "react";
import Img from './Img'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const MiniImages = ({images,index,updatePicIndex}) =>{

    return(
        <>
        {images.map((image,index) => (
            <Img image={image} index={index} updatePicIndex={updatePicIndex}/>
        ))}
        </>
    )
}

export default React.memo(MiniImages)
