export default function filterRestaurant(data, userInput = 'none') {
  if (userInput === 'none') return data;

  return data.filter(hotel => hotel.restaurant === userInput);
}