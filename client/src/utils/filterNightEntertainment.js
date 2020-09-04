export default function filterNightEntertainment(data) {
  return data.filter(hotel => hotel.nightEntertainment === true);
}