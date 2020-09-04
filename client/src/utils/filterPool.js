export default function filterPool(data, userInput = 'default') {
  if (userInput === 'default') return data;

  return data.filter(hotel => hotel.pool === userInput);
}