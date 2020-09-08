export const getImage = (hotel) => {
  let randomRoom = Math.floor(Math.random() * hotel.rooms.length);
  let ramdomImage = Math.floor(Math.random() * hotel.rooms[0].images.length);

  return hotel.rooms[randomRoom].images[ramdomImage];
};
