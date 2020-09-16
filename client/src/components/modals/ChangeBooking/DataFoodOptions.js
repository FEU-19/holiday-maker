export const DataFoodOptions = (hotelRoom) => {
  const data = [
    {
      option: "allInclusive",
      name: "All inclusive",
      price: hotelRoom.allInclusive,
    },
    {
      option: "fullBoard",
      name: "Full Board",
      price: hotelRoom.fullBoard,
    },
    {
      option: "halfBoard",
      name: "Half Board",
      price: hotelRoom.halfBoard,
    },
    {
      option: "selfCatering",
      name: "Self Catering",
      price: 0,
    },
  ];

  return data;
};
