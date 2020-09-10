export default function filterDistanceCity (data, userInput = 0) {
     if (!userInput) return data;

    return data.filter((hotel) => {
        return hotel.distanceToCity <= userInput;
    });
};
