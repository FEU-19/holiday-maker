export default function filterAmountOfTravelers(c, adults, children) {
  let data = JSON.parse(JSON.stringify(c));
  let childrenOverAgeOfThree = [];
  let amountOfTravelers = null;

  // removes whitespace & children under the age of 3
  childrenOverAgeOfThree = children
    .filter(child => typeof child === 'number')
    .filter(child => child >= 3)

  // total amount of travelers
  amountOfTravelers = adults + childrenOverAgeOfThree.length;

  // removes rooms that do not contain enough beds
  for (let i = 0; i < data.length; i++) {
    data[i].rooms = data[i].rooms.filter(room => room.beds >= amountOfTravelers);
  }

  return data.filter(hotel => hotel.rooms.length !== 0);
};