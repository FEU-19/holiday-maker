const fs = require("fs");
​
const AVAILABILITY_START_DATE = new Date(2020, 5).toISOString();
const AVAILABILITY_END_DATE = new Date(2020, 6, 31).toISOString();
const HOTELS_TO_GENERATE = 10;
const ROOMS_PER_HOTEL = 20;
​
const hotelSchemaOptions = {
  name: [
    "Dream",
    "Vacation",
    "Hills",
    "Beach",
    "City",
    "Island",
    "Holiday",
    "Resort",
    "Royal",
    "Luxury",
    "Jewel",
    "Seaside",
    "Palace",
    "Crown",
    "Seashore",
    "Bay",
  ],
  distanceToCity: [100, 5000],
  distanceToBeach: [100, 3000],
  pool: [true, false],
  nightEntertainment: [true, false],
  kidsClub: [true, false],
  restaurant: [true, false],
  city: ["Manila", "Ao Nang"],
  rating: [1, 5],
};
​
const roomSchemaOptions = {
  type: ["Villa", "Apartment", "Bungalow"],
  size: ["Standard", "Premium", "Deluxe"],
  images: {
    standard: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BYNE-kv_oeEtogwP7SbWBgHaEy%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.OWyBF_JwPwJGPnbE82-bwAHaE7%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lHyCMve4caH_wIj4tKDRRwHaE9%26pid%3DApi&f=1",
    ],
    premium: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ajorifSUT7IuwtVpeJJrogHaFE%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DAPu4smgcBr_VoXN_agCQgHaFj%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._apAl_KumMvX7l6POqdAPAHaEW%26pid%3DApi&f=1",
    ],
    deluxe: [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vyRIqYnUggQc1Tpe2J_c9wHaE8%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SPnVdei-SwyR4s1GVzETKAHaE8%26pid%3DApi&f=1",
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Rbm-WPeWXciapCRR9zsA2gHaE9%26pid%3DApi&f=1",
    ],
  },
  price: {
    standard: [800, 2400],
    premium: [3000, 6000],
    deluxe: [8000, 14000],
  },
  extraBed: {
    standard: [0, 2],
    premium: [2, 4],
    deluxe: [0, 0],
  },
  boardType: {
    standard: {
      "all-inclusive": [700, 1200],
      "half-board": [150, 300],
      "full-board": [400, 600],
      "self-catering": [0, 150],
    },
    premium: {
      "all-inclusive": [2200, 3800],
      "half-board": [500, 1000],
      "full-board": [1000, 2000],
      "self-catering": [0, 0],
    },
    deluxe: {
      "all-inclusive": [0, 0],
      "half-board": [0, 0],
      "full-board": [0, 0],
      "self-catering": [0, 0],
    },
  },
  beds: {
    standard: [2, 6],
    premium: [6, 10],
    deluxe: [2, 4],
  },
  roomNumber: "",
};
​
const save = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./residents.json", JSON.stringify(data), "utf8", (err) => {
      if (err) reject(err.message);
      resolve();
    });
  });
};
​
const getRandomFromTuple = (tuple) => {
  return tuple[Math.round(Math.random())];
};
​
const getRandomFromRange = ([min, max]) => {
  return Math.floor(Math.random() * (max - min) + min);
};
​
const getRandomIndexValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
​
const createHotelName = (city) => {
  const first = getRandomIndexValue(hotelSchemaOptions.name);
  let second = getRandomIndexValue(hotelSchemaOptions.name);
  while (second === first) {
    second = getRandomIndexValue(hotelSchemaOptions.name);
  }
  return `${city} ${first} ${second}`;
};
​
(function generateData() {
  const data = Array(HOTELS_TO_GENERATE)
    .fill(0)
    .map((hotel, _, arr) => {
      const hotelNames = arr.map((hotel) => hotel.name || "");
​
      let hotelName = createHotelName(
        getRandomIndexValue(hotelSchemaOptions.city)
      );
      while (hotelNames.includes(hotelName)) {
        hotelName = createHotelName(
          getRandomIndexValue(hotelSchemaOptions.city)
        );
      }
​
      return {
        name: hotelName,
        distanceToBeach: getRandomFromRange(hotelSchemaOptions.distanceToBeach),
        distanceToCity: getRandomFromRange(hotelSchemaOptions.distanceToCity),
        pool: getRandomFromTuple(hotelSchemaOptions.pool),
        nightEntertainment: getRandomFromTuple(
          hotelSchemaOptions.nightEntertainment
        ),
        kidsClub: getRandomFromTuple(hotelSchemaOptions.kidsClub),
        restaurant: getRandomFromTuple(hotelSchemaOptions.restaurant),
        rating: getRandomFromRange(hotelSchemaOptions.rating),
        rooms: Array(ROOMS_PER_HOTEL)
          .fill(0)
          .map((room, idx) => {
            const size = getRandomIndexValue(roomSchemaOptions.size);
            return {
              type: getRandomIndexValue(roomSchemaOptions.type),
              size,
              images: roomSchemaOptions.images[size.toLowerCase()],
              price: getRandomFromRange(
                roomSchemaOptions.price[size.toLowerCase()]
              ),
              extraBed: getRandomFromRange(
                roomSchemaOptions.extraBed[size.toLowerCase()]
              ),
              ...Object.entries(
                roomSchemaOptions.boardType[size.toLowerCase()]
              ).reduce((acc, [key, tuple]) => {
                acc[key] = getRandomFromRange(tuple);
                return acc;
              }, {}),
              beds: getRandomFromRange(
                roomSchemaOptions.beds[size.toLowerCase()]
              ),
              roomNumber: `1${idx < 10 ? "0" + idx : idx}`,
              occupiedDates: [],
              information: "",
            };
          }),
      };
    });
​
  save(data).catch((err) => console.error(err));
})();
