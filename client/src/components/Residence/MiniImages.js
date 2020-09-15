import React from "react";
import Img from "./Img";
import { v4 as uuidv4 } from "uuid";

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
