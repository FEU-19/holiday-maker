/*import React from "react";
import data from "./residents.json";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";

const room = data[0].rooms[0].images[0];

import React from "react";
import data from "./residents.json";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";


const room = data[0].rooms[0].images[0];
const roomInfo


const useStyle = makeStyles(() => ({
    root: {
        position: "relative",
        display: "flex",
        marginBottom: 20,
    },
    card: {
        minWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56,25%"
    },
    content: {
        padding: 25,
        objectFit: "cover"
    }
}))

export default function RoomCard(){
    const classes = useStyle();
    console.log(room);

    return (
        <div className = {classes.root}>
        <Card className = {classes.card}>
            <CardHeader 
                title = "Single"
                />
            <CardMedia 
                className = {classes.image}
                image = {room}
                src = "single"
                title = "room image"
                
            />
            <CardContent className = {classes.content}>
                <Typography
                    variant = "body2"
                    color = "textSecondary"
                    component = "p">
                        {}
                </Typography>
                <Typography>

                </Typography>
            </CardContent>

        </Card>
        </div>
    )

}*/