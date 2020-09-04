export default function filterNightEntertainment(data, userInput) {
  return data.filter(hotel => hotel.nightEntertainment === userInput);
}