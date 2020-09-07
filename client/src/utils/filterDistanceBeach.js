export default function filterDistanceBeach (data, userInput = 'default') {
     if (userInput === 'default') return data;

    return data.filter((hotel) => {
        console.log(data)
        return hotel.distanceToBeach < userInput;
    });
};

