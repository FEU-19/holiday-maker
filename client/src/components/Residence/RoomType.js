import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";
import ModalDialogButton from './ModalDialogButton'

const useStyle = makeStyles(() => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
}))

const RoomType = ({roomType}) => {
    const classes = useStyle();
    console.log(roomType);


    
    return (
        <Card className = {classes.card}>
            <CardHeader className = {classes.header}
                        title = {roomType.type}/>
            <CardMedia className = {classes.media}
                        title = {roomType.type}
                        image = {roomType.images[0]}
                        />
            <CardContent>
                <Typography variant = "body2" color ="textSecondary" component = "p">
                    {roomType.size}
                    {roomType.information}
                </Typography>
                <ModalDialogButton/>
            </CardContent>

        </Card>
    )
}

export default RoomType;