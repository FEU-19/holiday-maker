export default function filterPool(data, userInput = 'none') {
  if (userInput === 'none') return data;

  return data.filter(hotel => hotel.pool === userInput);
}