export default function filterKidsClub(data, userInput = 'none') {
  if (userInput === 'none') return data;

  return data.filter(hotel => hotel.kidsClub === userInput);
}