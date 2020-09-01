import React from "react";

const HotelInformation = ({info}) => {

  // Style variables
  const boxContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "800px",
    height: "200px",
  };

  const infoBoxes = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "200px",
    margin: "20px",
    backgroundColor: "lightgrey",
    color: "black",
    borderRadius: "10px"
  };

  return <div className="residence__hotelInformation__boxContainer" style={boxContainer}>

      <div className="residence__hotelInformation__boxContainer__about" style={infoBoxes}>
        <h3>About</h3>
        {info.restaurant && <p>Restaurant</p>}
        {info.pool && <p>Pool</p>}
      </div>
      <div className="residence__hotelInformation__boxContainer__family" style={infoBoxes}>
        <h3>For Family</h3>
        {info.kidsClub && <p>Kids Club</p>}

        </div>
      <div className="residence__hotelInformation__boxContainer__nearby" style={infoBoxes}>
      <h3>Nearby</h3>

        {info.distanceToBeach && <p>Distance to Beach: {info.distanceToBeach} m</p>}
        {info.distanceToCity && <p>Distance to City: {info.distanceToCity} m</p>}
        </div>

    </div>;
};

export default HotelInformation;
