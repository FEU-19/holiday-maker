import React from "react";
import data from "./residents.json";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";



const useStyle = makeStyles(() => ({
    card: {
        maxWidth: 345,
        margin: 10,
        backgroundColor: "rgb(234, 234, 234)",
    },
    text: {
        margin: 20,
        fontSize: 16,
        fontWeight: "bolder",
    }
}))

const RoomPrice = ({roomType}) => {
    const classes = useStyle();
    console.log(roomType);

    return (
        <Card className = {classes.card}>
            <Typography  className = {classes.text} 
                         component = "p">
                Today's Price including taxes and fees
            </Typography>
            <CardHeader className = {classes.header}
                        title = {roomType.price}/>
            

        </Card>
    )
}

export default RoomPrice;

