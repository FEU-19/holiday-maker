export default function filterPool(data) {
  return data.filter(hotel => hotel.pool === true);
}