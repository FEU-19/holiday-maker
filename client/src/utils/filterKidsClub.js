export default function filterKidsClub(data, userInput) {
  return data.filter(hotel => hotel.kidsClub === userInput);
}