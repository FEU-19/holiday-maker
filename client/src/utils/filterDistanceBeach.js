export default function filterDistanceBeach (data, userInput = 0) {
    if (!userInput) return data;

   console.log(userInput);
    return data.filter((hotel) => {
      console.log(hotel.distanceToBeach);
      return hotel.distanceToBeach <= userInput;

    });
};
