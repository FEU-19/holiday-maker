export default function filterAmountOfTravelers(c, adults, children) {
  let data = JSON.parse(JSON.stringify(c));
  let amountOfTravelers = null;

  // removes children under the age of 3
  for (let i = 0; i < children.length; i++) {
    if (children[i] < 3) {
      children.splice(i, 1);
    }
  }

  amountOfTravelers = adults + children.length;

  // removes rooms that do not contain enough beds
  for (let i = 0; i < data.length; i++) {
    data[i].rooms = data[i].rooms.filter(room => room.beds >= amountOfTravelers);
  }

  return data.filter(hotel => hotel.rooms.length !== 0);
};