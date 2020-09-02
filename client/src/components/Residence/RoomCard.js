import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { Card, CardContent, Typography,  } from "@material-ui/core";
import WifiIcon from '@material-ui/icons/Wifi';
import DirectionsCar from "@material-ui/icons/DirectionsCar";

import RoomType from "./RoomType";


const useStyle = makeStyles(() => ({
    card: {
        position: "relative",
        display: "flex",
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
         
    },
    content: {
        fontSize: 14,
        padding: 25,
        objectFit: "cover",
    }
}))

const RoomCard = ({roomsInfo}) => {
    const classes = useStyle();
    const roomInfo = roomsInfo[0];
    console.log();

    return (
        <Card className = {classes.card}>
            <RoomType/>
            <CardContent className = {classes.content}>
                <Typography className = {classes.title}>
                    Options
                </Typography>
                <Grid item xs = {8}>
                    <WifiIcon/>
                </Grid>
                <Grid>
                    <Typography item xs = {4}>
                        Free Wifi
                    </Typography>
                </Grid>
                <Grid item xs = {8}>
                    <DirectionsCar/>
                </Grid>
                <Grid>
                    <Typography item xs = {4}>
                        Free parking
                    </Typography>
                </Grid>
                <Typography> 
                    {roomInfo.extraBed && <p>Extra Bed: {roomInfo.extraBed}</p>}  
                    {roomInfo["all-inclusive"] && <p>All Inclusive: {roomInfo["all-inclusive"]}</p>} 
                    {roomInfo["full-board"] && <p>Full board: {roomInfo["full-board"]}</p>}
                    {roomInfo["half-board"] && <p>Half board: {roomInfo["half-board"]}</p>}
                    {roomInfo["self-catring"] && <p>Self catering: {roomInfo["self-catring"]}</p>}
                </Typography>
            </CardContent>
                
            
        </Card>
    )
}

export default RoomCard;