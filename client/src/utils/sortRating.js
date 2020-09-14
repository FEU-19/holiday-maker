const sortRating = (data, boolean) => {
  let newData = [...data];

  if(boolean !== true) return data;

  newData.sort((a, b) => b.rating - a.rating);

  return newData;
}

export default sortRating;
