export default function filterKidsClub(data, userInput = 'default') {
  if (userInput === 'default') return data;

  return data.filter(hotel => hotel.kidsClub === userInput);
}