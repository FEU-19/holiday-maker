export default function filterAmountOfTravelers(c, adults, children) {
  let data = JSON.parse(JSON.stringify(c));
  let childrenOverAgeOfThree = [];
  let amountOfTravelers = null;

  // removes whitespace
  childrenOverAgeOfThree = children.filter(data => typeof data === 'number');

  // removes children under the age of 3
  for (let i = 0; i < childrenOverAgeOfThree.length; i++) {
    if (childrenOverAgeOfThree[i] < 3) {
      childrenOverAgeOfThree.splice(i, 1);
    }
  }

  amountOfTravelers = adults + childrenOverAgeOfThree.length;

  // removes rooms that do not contain enough beds
  for (let i = 0; i < data.length; i++) {
    data[i].rooms = data[i].rooms.filter(room => room.beds >= amountOfTravelers);
  }

  return data.filter(hotel => hotel.rooms.length !== 0);
};