export default function filterAmountOfTravelers(c, adults, children) {
  let childrenOverAgeOfThree = [];
  let amountOfTravelers = null;

  // removes whitespace & children under the age of 3
  childrenOverAgeOfThree = children
    .filter((child) => typeof child === "number")
    .filter((child) => child >= 3);

  // total amount of travelers
  amountOfTravelers = adults + childrenOverAgeOfThree.length;

  // removes rooms that do not contain enough beds
  for (let i = 0; i < c.length; i++) {
    c[i].rooms = c[i].rooms.filter((room) => room.beds >= amountOfTravelers);
  }

  return c.filter((hotel) => hotel.rooms.length !== 0);
}
