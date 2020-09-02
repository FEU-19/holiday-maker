import React from "react";
import styled from 'styled-components'
import Img from './Img'

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.imgLength*75 + props.imgLength*3}px;
`;

const MiniImages = ({images,index,updatePicIndex}) =>{

    return(
        <Wrapper imgLength={images.length}>
        {images.map((image,index) => (
            <Img image={image} index={index} updatePicIndex={updatePicIndex}/>
        ))}
        </Wrapper>
    )
}

export default React.memo(MiniImages)