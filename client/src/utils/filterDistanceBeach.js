export default function filterDistanceBeach (data, userInput = 0) {
    if (!userInput) return data;

    return data.filter((hotel) => {
        return hotel.distanceToBeach < userInput;
    });
};

