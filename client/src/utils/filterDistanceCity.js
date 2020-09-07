export default function filterDistanceCity (data, userInput = 'default') {
     if (userInput === 'default') return data;

    return data.filter((hotel) => {
        console.log(data)
        return hotel.distanceToCity < userInput;
    });
};
