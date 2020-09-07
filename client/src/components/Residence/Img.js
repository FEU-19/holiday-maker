import React from "react";
import styled from 'styled-components'


const Button = styled.img`
width: 75px;
height: 75px;
cursor: pointer;
transition: all 0.4s ease-out;
margin: 5px;
margin-left: 0;
&:hover {
  transform: scale(1.1)
}
`;

const Img = ({image, index, updatePicIndex}) =>{

    const clickPicture = () =>{
        updatePicIndex(index)
    }

    return(
        <>
        <Button src={image} onClick={clickPicture}/>
        </>
    )
}

export default React.memo(Img)
