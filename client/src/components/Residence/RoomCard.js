import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    FormControlLabel,
    Checkbox,
    FormControl,
    RadioGroup,
    Radio,
} from "@material-ui/core";
import { Card, CardContent, Typography } from "@material-ui/core";
import WifiIcon from "@material-ui/icons/Wifi";
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import DirectionsCar from "@material-ui/icons/DirectionsCar";

import RoomType from "./RoomType";
import RoomPrice from "./RoomPrice";

const useStyle = makeStyles(() => ({
    card: {
        position: "relative",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginBottom: 20,
        margintop: 20,
        //marginLeft: "20vw",
       // marginRight: "20vw",
    },
    title: {
        marginTop: 5,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: "bolder",
    },
    content: {
        minWidth: 500,
        fontSize: 14,
        padding: 25,
        objectFit: "cover",
    },
    icons: {
        margin: 10,
        display: "flex",
        alignItems: "center",
    },
    options: {
        margin: 10,
        borderTopWidth: 1,
        borderColor: "#ccd9dd",
        borderStyle: "solid",
    },
}));




const RoomCard = ({ roomsInfo }) => {
    const roomInfo = roomsInfo[0];
    const classes = useStyle();
    const [value, setValue] = useState({selected: "" });
 
    

    const handleChange = (e) => {
        setValue( {selected: e.target.value});
    };

    const {selected} = value;
    
    return (
        <Card className={classes.card}>
            <RoomType roomType={roomInfo} />
            <CardContent className={classes.content}>
                <Typography className={classes.title}>Options</Typography>
                <Grid container spacing={2} justify="center">
                    <Grid className={classes.icons}>
                        <Grid item xs={4}>
                            <WifiIcon />
                        </Grid>
                        <Grid>
                            <Typography item xs={8}>
                                Free Wifi
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.icons}>
                        <Grid item xs={4}>
                            <FreeBreakfastIcon />
                        </Grid>
                        <Grid>
                            <Typography item xs={8}>
                                Free breakfast for 2 people
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.icons}>
                        <Grid item xs={4}>
                            <DirectionsCar />
                        </Grid>
                        <Grid>
                            <Typography item xs={8}>
                                Free parking
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="extraBed"
                                control={<Checkbox color="default" />}
                                label={
                                    <p style={{ paddingRight: "10vw" }}>Extra Bed: {roomInfo.extraBed}</p>
                                }
                                labelPlacement="start"
                            />
                            <RadioGroup
                                aria-label="price"
                                name="price"
                                value={selected}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    style={{ borderTop: "1px solid #ccd9dd" }}
                                    value= {roomInfo.allInclusive.toString()}
                                    control={<Radio color="default" />}
                                    disabled={roomInfo.allInclusive ? "" : "disabled"}
                                    label={
                                        roomInfo.allInclusive ? (
                                            <p style={{ paddingRight: "10vw" }}>
                                            All Inclusive: {roomInfo.allInclusive + ":-"}
                                            </p>
                                            ) : (
                                            <p style={{ paddingRight: "10vw" }}>All Inclusive: {"N/A"}</p>
                                            )
                                        }
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    style={{ borderTop: "1px solid #ccd9dd" }}
                                    value={roomInfo.fullBoard.toString()}
                                    control={<Radio color="default" />}
                                    disabled={roomInfo.fullBoard ? "" : "disabled"}
                                    label={
                                        roomInfo.fullBoard ? (
                                            <p style={{ paddingRight: "10vw" }}>
                                            Half Board: {roomInfo.fullBoard + ":-"}
                                            </p>
                                            ) : (
                                            <p style={{ paddingRight: "10vw" }}>Full Board: {"N/A"}</p>
                                            )
                                        }
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    style={{ borderTop: "1px solid #ccd9dd" }}
                                    value={roomInfo.halfBoard.toString()}
                                    control={<Radio color="default" />}
                                    disabled={roomInfo.halfBoard ? "" : "disabled"}
                                    label={
                                        roomInfo.halfBoard ? (
                                            <p style={{ paddingRight: "10vw" }}>
                                            Half Board: {roomInfo.halfBoard + ":-"}
                                            </p>
                                            ) : (
                                            <p style={{ paddingRight: "10vw" }}>Half Board: {"N/A"}</p>
                                            )
                                        }
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    style={{ borderTop: "1px solid #ccd9dd" }}
                                    value={roomInfo.selfCatering.toString()}
                                    control={<Radio color="default" />}
                                    label={
                                    (<p style={{ paddingRight: "10vw" }}>
                                    Self Catering
                                    </p>)
                                    }
                                    labelPlacement="start"
                                    />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
            <RoomPrice roomType={roomInfo} selected = {selected}/>
        </Card>
    );
};

export default RoomCard;
