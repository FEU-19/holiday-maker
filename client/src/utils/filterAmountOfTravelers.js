export default function filterAmountOfTravelers(c, adults, children) {
  let data = JSON.parse(JSON.stringify(c));

  for (let i = 0; i < data.length; i++) {
    data[i].rooms = data[i].rooms.filter(room => room.beds >= adults);
  }

  return data.filter(hotel => hotel.rooms.length !== 0);
};