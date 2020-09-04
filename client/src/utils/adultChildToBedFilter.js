const adultChildToBedFilter  = (adult, child, arr) => {
  let num = adult + child;
  let newArr = arr;

  for (let [i, hotel] of newArr.entries()) {
    newArr[i].rooms = newArr[i].rooms.filter((room) => room.beds.numberInt >= num);
  }

  return newArr;
}

export default adultChildToBedFilter;

//Amount of adults, amount of children and residentsData is needed in that order
//for the function to work properly. Returns filtered residentsData.
