import React, { useState, useEffect } from 'react';
import { styled } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import axios from 'axios';




const MyFormControl = styled(FormControl)({
        minWidth: 120,
        marginBottom: 20
});

const MyBox = styled(Box)({
    width: '200px',
    display: 'flex',
    flexDirection: 'column'
})

const DropDown = () => {
    const [state, setState] = React.useState(0);
    const [roomsArr, setRoomsArr] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/residents/5f5230fafd504a310c8184dd/')
            .then((res) => {
                setRoomsArr(res.data.data.rooms);
            })
      }, []);

    const handleChange = (event) => {
        setState(event.target.value)
    };

    return (
        <MyBox>
            { roomsArr.map(v => {
                return (
                    <>
                        <p>{v.roomNumber}</p>
                        {   v.extraBed > 0
                            ?   <MyFormControl>
                                    <InputLabel htmlFor="native-simple">
                                    Extra beds
                                    </InputLabel>
                                    <NativeSelect
                                        value={state}
                                        onChange={handleChange}
                                    >
                                        <option aria-label="" value="" />
                                        {   Array.from(Array(v.extraBed), (_, i) => i + 1).map( val => {
                                            return <option value={val} key={val}>{val}</option>
                                        })

                                        }

                                    </NativeSelect>
                                </MyFormControl>
                            :   <MyFormControl>
                                    <InputLabel htmlFor="name-native-disabled" disabled>Extra beds</InputLabel>
                                    <NativeSelect disabled>
                                    </NativeSelect>
                                </MyFormControl>
                        }
                    </>
                ) 
            })
            }
        </MyBox>
        
    )    
}
 
export default DropDown;