export default function filterRestaurant(data, userInput) {
  return data.filter(hotel => hotel.restaurant === userInput);
}