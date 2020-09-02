import React,{useEffect, useState} from "react";
import data from './residents.json';
import MiniImages from './MiniImages'
import Carousel from './Carousel'

const HotelCarousel = () =>{
    const [images, updateImages] = useState([])
    const [currentPicIndex, updatePicIndex] = useState(0)
    
    useEffect(()=>{
        updateImages(data[0].rooms[0].images)
    },[])
    console.log(currentPicIndex)

    return(
        <>
        <Carousel images={images} currentPicIndex={currentPicIndex} updatePicIndex={updatePicIndex}/>
        <MiniImages images={images} updatePicIndex={updatePicIndex}/>
        </>
    )
}

export default React.memo(HotelCarousel)
