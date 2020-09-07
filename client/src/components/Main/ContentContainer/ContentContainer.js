import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  width: 90vw;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  .map-container {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

// *************************************************************
//
// .map-container is a placeholder for future material-UI design
//
// *************************************************************

const ContentContainer = ({ filteredData }) => {
  console.log(filteredData)

  return (
    <Container>
      {filteredData.map(hotel => {
        return (
          <div className="map-container" key={hotel._id}>
            <p>hotelname: {hotel.name}</p>
            <p><b>*** Placeholders ***</b></p>
            <p>city: {hotel.city}</p>
          </div>
        )
      })}
    </Container>
  )
};
  
  export default ContentContainer;
  