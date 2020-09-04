export default function filterRestaurant(data, userInput = 'default') {
  if (userInput === 'default') return data;

  return data.filter(hotel => hotel.restaurant === userInput);
}