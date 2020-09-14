const getAveragePrice = (hotel) => {
  let averagePrice = 0;

  for(let room of hotel.rooms) {
    averagePrice = averagePrice + room.price;
  }

  return Math.floor(averagePrice / hotel.rooms.length)
  
}

export default getAveragePrice;
