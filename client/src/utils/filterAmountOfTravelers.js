export default function filterAmountOfTravelers(c, adults, children) {
  let data = [...c];
  let arr = [];

  // console.log(data)
  // console.log(adults)
  // console.log(children)

  arr = data.reduce((acc, current) => {
    acc = current.rooms.filter(room => room.beds <= adults)
    return acc
  }, {})

  console.log(c)
  return c;
};

//Amount of adults, amount of children and residentsData is needed in that order
//for the function to work properly. Returns filtered residentsData.
