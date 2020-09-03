import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { Card, CardContent, Typography,  } from "@material-ui/core";
import WifiIcon from '@material-ui/icons/Wifi';
import DirectionsCar from "@material-ui/icons/DirectionsCar";

import RoomType from "./RoomType";
import RoomPrice from "./RoomPrice";


const useStyle = makeStyles(() => ({
    card: {
        position: "relative",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        margintop: 20,
        marginBottom: 20,
        //marginLeft: "20vw",
        //marginRight: "20vw",
    },
    title: {
        marginTop: 5,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bolder",
    },
    content: {
        fontSize: 14,
        padding: 25,
        objectFit: "cover",
    },
    icons: {
        margin: 10,
        display: "flex",
        alignItems: "center"
    },
    options: {
        margin: 10,
    },
}))

const RoomCard = ({roomsInfo}) => {
    const classes = useStyle();
    const roomInfo = roomsInfo[0];
    console.log(roomsInfo);

    return (
        <Card className = {classes.card}>
            <RoomType roomType = {roomInfo}/>
            <CardContent className = {classes.content}>
                <Typography className = {classes.title}>
                    Options
                </Typography>
                <Grid className = {classes.icons}>
                    <Grid item xs = {4}>
                        <WifiIcon/>
                    </Grid>
                    <Grid>
                        <Typography item xs = {8}>
                            Free Wifi
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className = {classes.icons}>
                    <Grid item xs = {4}>
                        <DirectionsCar/>
                    </Grid>
                    <Grid>
                        <Typography item xs = {8}>
                            Free parking
                        </Typography>
                    </Grid>
                </Grid>
                <Typography component = "span"> 
                    <Grid className = {classes.options}>
                        {roomInfo.extraBed && <p>Extra Bed: {roomInfo.extraBed}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["all-inclusive"] && <p>All Inclusive: {roomInfo["all-inclusive"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["full-board"] && <p>Full board: {roomInfo["full-board"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["half-board"] && <p>Half board: {roomInfo["half-board"]}</p>}
                    </Grid>
                    <Grid className = {classes.options}>
                        {roomInfo["self-catring"] && <p>Self catering: {roomInfo["self-catring"]}</p>}
                    </Grid>
                </Typography>
            </CardContent>
                <RoomPrice roomType = {roomInfo} />
        </Card>
    )
}

export default RoomCard;