import React from "react";
import Img from "./Img";

const MiniImages = ({ images, index, updatePicIndex }) => {
  return (
    <>
      {images.map((image, index) => (
        <Img image={image} index={index} updatePicIndex={updatePicIndex} />
      ))}
    </>
  );
};

export default React.memo(MiniImages);
