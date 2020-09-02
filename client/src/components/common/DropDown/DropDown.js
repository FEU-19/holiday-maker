import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    formGroup: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '200px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    dropdownBox: {
        
    }
}));

const roomsArr = Array.from(Array(20), (_, i) => i + 1);

const extraBedArr = Array.from(Array(Math.floor(Math.random() * 10)), (_, i) => i + 1);

console.log('extraBedArr', extraBedArr)
const DropDown = () => {
    const classes = useStyles();

    let arr = [];
    
    for (let i = 1; i <= arr.length; i++) {
        arr.push(i);
    }

    const [state, setState] = React.useState(0);

    const handleChange = (event) => {
        setState(event.target.value)
    };

    const handleClick = () => {
        console.log(state);
    }


    return (
        <FormGroup 
            className={classes.formGroup}
            display="flex"
            flexDirection="column"
        >
                <InputLabel htmlFor="native-simple">
                    № rooms
                </InputLabel>
                <NativeSelect
                    value={state}
                    onChange={handleChange}
                >
                    <option aria-label="" value="" />
                    { roomsArr.map(v => {
                        return <option value={v} key={v}>{v}</option>
                    })}
                </NativeSelect>
            {
            extraBedArr.length < 0
            ?   
                <>
                    <InputLabel htmlFor="native-simple">
                        Extra beds
                    </InputLabel>
                    <NativeSelect
                        value={state}
                        onChange={handleChange}
                    >
                        <option aria-label="" value="" />
                        { extraBedArr.map(v => {
                            return <option value={v} key={v}>{v}</option>
                        })}
                    </NativeSelect>
                </>
            :   <>
                    <InputLabel htmlFor="name-native-disabled" disabled>Extra beds</InputLabel>
                    <NativeSelect disabled>
                    </NativeSelect>
                </>
        }
        </FormGroup>
        
    )    
}
 
export default DropDown;

