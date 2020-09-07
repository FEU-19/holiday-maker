import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import axios from "axios";

const MyBookings = () => {
     const [myBookings, setMyBookings] = useState({});
     const [clickedBookings, setClickedBookings] = useState(false);
    
    const showMyBookings = () => {

        setClickedBookings(true);

        if(clickedBookings) {
            console.log("myBookings");

            let url = "http://localhost:3002/api/MyBookings";
            axios
                .get(url)
                .then((res) => {
                    console.log(res);
                   // myBookings.push(res.data...);
                   setMyBookings(res);
                
                })
        }
    }
    
    return (
        <div>
            <Button onClick={showMyBookings} >My Bookings </Button>
            {MyBookings.map(MyBooking => {
                <ul>
                    <li>{MyBookings.name}</li>
                    <li>{MyBookings.num}</li>
                    <li></li>
                    <li></li>
                </ul>
            })}
        </div>
    )
}

export default MyBookings
