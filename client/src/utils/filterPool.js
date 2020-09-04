export default function filterPool(data, userInput) {
  return data.filter(hotel => hotel.pool === userInput);
}