import React from "react";
import Img from "./Img";
import { v4 as uuidv4 } from "uuid";
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const MiniImages = ({ images, index, updatePicIndex }) => {
 return (
  <>
   {images.map((image, index) => (
    <Img
     key={uuidv4()}
     image={image}
     index={index}
     updatePicIndex={updatePicIndex}
    />
   ))}
  </>
 );
};

export default React.memo(MiniImages);
