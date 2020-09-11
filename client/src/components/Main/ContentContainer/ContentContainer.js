import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Functions
import sortRating from "../../../utils/sortRating.js";

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 7px;
  width: 90vw;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;

  .map-container {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// *************************************************************
//
// .map-container is a placeholder for future material-UI design
//
// *************************************************************

const ContentContainer = ({ filteredData, sortOn }) => {
  const [sortedData, setSortedData] = useState([]);
  
  useEffect(() => {
    setSortedData([...filteredData]);
  }, [filteredData])

  useEffect(() => {
    // If the option 'None' was selected
    if (!sortOn) return setSortedData([...filteredData]);

    if (sortOn === 'Price low to high') { 
      // ...
    }

    if (sortOn === 'Rating low to high') {
      // ...
    }
  }, [sortOn, filteredData])

  return (
    <Container>
      {sortedData.map((hotel) => {
        return (
          <div className="map-container" key={hotel._id}>
            <Link
              to={{ pathname: `/residence/${hotel._id}`, state: { hotel } }}
            >
              hotelname: {hotel.name}
            </Link>
            <p>
              <b>*** Placeholders ***</b>
            </p>
            <p>city: {hotel.city}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default ContentContainer;
