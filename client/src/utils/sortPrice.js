import getAveragePrice from "./getAveragePrice.js";

const sortPrice = (data, boolean) => {
  let newData = [...data];

  if(boolean !== true) return data;

  newData.sort((a, b) => getAveragePrice(a) - getAveragePrice(b));

  return newData;
}

export default sortPrice;
