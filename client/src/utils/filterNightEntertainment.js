export default function filterNightEntertainment(data, userInput = 'default') {
  if (userInput === 'default') return data;

  return data.filter(hotel => hotel.nightEntertainment === userInput);
}