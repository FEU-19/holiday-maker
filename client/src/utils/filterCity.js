// Function description
// 
// Filter out hotels which does not match userInput

export default function filterCity(data, userInput = '') {
  if (!userInput) return data;

  return data.filter((hotel) => {
    return hotel.city.toLowerCase() === userInput.toLowerCase();
  });
};