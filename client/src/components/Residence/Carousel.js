import React from 'react';
import styled from 'styled-components'
import { IconButton,makeStyles } from '@material-ui/core'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const DIV = styled.div`
display: flex;
width: 874px;
height: 603px;
overflow:hidden;
position: relative;
`;
const IMG = styled.img`
width: 874px;
height: 603px;
transform: translateX(${props => -props.currentPicIndex*874}px);
transition: all 0.4s ease-out;
`;

const MainDiv = styled.div`
width: 474px;
`
const DIVIMG = styled.div`
`

const Carousel = ({images,currentPicIndex,updatePicIndex, props}) => {

    const stylesForButton = makeStyles({
        buttonLeft: {
            color: 'black',
            backgroundColor: 'lightgrey',
            opacity: "0.8",
            top: '50%',
            transform: 'translateY(-50%)',
            position: 'absolute',
            "&:hover": {
                backgroundColor: "lightgrey",
                opacity: "1"
                
              },
        },
        buttonRight: {
            color: 'black',
            backgroundColor: "lightgrey",
            opacity: "0.8",
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            position: 'absolute',
            "&:hover": {
                backgroundColor: "lightgrey",
                opacity: "1",
              },
        },
    })

    const leftButton = () =>{
        if(currentPicIndex !== 0){
            updatePicIndex(currentPicIndex-1)
        }
    }

    const rightButton = () =>{
        if(currentPicIndex !== images.length-1){
            updatePicIndex(currentPicIndex+1)
        }
    }

    const classes = stylesForButton();

    return(
        <MainDiv>
        <DIV>
            {images.map((image, index) =>(
                <DIVIMG key={index}>
                <IMG src={image} alt = "image of the hotel" currentPicIndex={currentPicIndex}/>
                </DIVIMG>
            ))}
            <IconButton className={classes.buttonLeft} onClick={leftButton} title = "button left">
                <KeyboardArrowLeftIcon fontSize='large' />
             </IconButton>
            <IconButton className={classes.buttonRight} onClick={rightButton} title = "button right">
                <KeyboardArrowRightIcon fontSize='large'/>
            </IconButton>
        </DIV>
        </MainDiv>
    )
}

export default React.memo(Carousel)
