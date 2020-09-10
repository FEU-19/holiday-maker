const sortRating = (data, boolean) => {
  let newData = data;

  if(boolean === false) return data;

  newData.sort((a, b) => b.rating - a.rating);
  console.log(newData);
  return newData;
}

export default sortRating;
