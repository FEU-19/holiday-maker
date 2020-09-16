import React, { useEffect, useState } from "react";
import MiniImages from "./MiniImages";
import Carousel from "./Carousel";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
 shit: {
  width: "884px",
 },
});

const HotelCarousel = ({ dataImage }) => {
 const [images, updateImages] = useState([]);
 const [currentPicIndex, updatePicIndex] = useState(0);

 useEffect(() => {
  let picArray = dataImage.rooms.map((item) => item.images);
  updateImages(picArray);
 }, [dataImage.rooms]);

 const classes = useStyles();

 return (
  <>
   <Box
    component="div"
    display="flex"
    className={classes.shit}
    flexWrap="wrap"
    justifyContent="flex-start"
   >
    <Carousel
     images={images}
     currentPicIndex={currentPicIndex}
     updatePicIndex={updatePicIndex}
    />
    <MiniImages images={images} updatePicIndex={updatePicIndex} />
   </Box>
  </>
 );
};

export default React.memo(HotelCarousel);
