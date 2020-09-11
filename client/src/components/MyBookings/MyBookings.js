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

            let url = "https://3d73abdd-8709-4745-bb97-43b5a50dd7ce.mock.pstmn.io/api/mybookings";
            axios
                .get(url)
                .then((res) => {
                    console.log(res.adults);
                   // myBookings.push(res.data...);
                   setMyBookings(res);
                
                })
        }
    }
    
    return (
        <div>
            <Button onClick={showMyBookings} >My Bookings </Button>
            {/* {myBookings.map(myBooking => 
                    <ul>
                        <li>{myBooking.roomNumber}</li>
                        <li>{myBooking.price}</li>
                    </ul>
            )} */}
        </div>
    )
}

export default MyBookings