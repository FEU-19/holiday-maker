import React from "react";

//const maxDistance = 1000; // besökare väljer att det får vara MAX 1000m till stranden

export default function filterDistanceBeach (data, maxDistance) {
     if (!maxDistance) return data;
     console.log('FILTER FUNKTION');

    return data.filter((hotel) => {
        console.log("INSIDE DATA.FILTER:", maxDistance)
        return hotel.distanceToBeach < maxDistance;
    });
};

