export default function filterNightEntertainment(data, userInput = 'none') {
  if (userInput === 'none') return data;

  return data.filter(hotel => hotel.nightEntertainment === userInput);
}