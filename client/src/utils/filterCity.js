// Function description
// 
// Filter out hotels which does not match userInput

export default function filterCity(city, userInput) {
  let x = city.filter((hotel) => {
    return hotel.city.toLowerCase() === userInput.toLowerCase();
  })
  return x;
};