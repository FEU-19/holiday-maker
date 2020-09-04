export default function filterKidsClub(data) {
  return data.filter(hotel => hotel.kidsClub === true);
}