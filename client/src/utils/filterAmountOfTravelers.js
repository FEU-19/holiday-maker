export default function filterAmountOfTravelers(c, adults, children) {
  let data = JSON.parse(JSON.stringify(c));
  let childrenOverAgeOfThree = [];
  let amountOfTravelers = null;

  // filter out children under the age of 3
  childrenOverAgeOfThree = children.filter(data => typeof data === 'number');

  amountOfTravelers = adults + childrenOverAgeOfThree.length;

  // removes rooms that do not contain enough beds
  for (let i = 0; i < data.length; i++) {
    data[i].rooms = data[i].rooms.filter(room => room.beds >= amountOfTravelers);
  }

  return data.filter(hotel => hotel.rooms.length !== 0);
};