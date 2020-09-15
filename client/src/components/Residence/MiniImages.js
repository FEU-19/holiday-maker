<<<<<<< HEAD
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
=======
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
>>>>>>> 0f43906bf01a459c1f895cbd098cdd22963c54bf
