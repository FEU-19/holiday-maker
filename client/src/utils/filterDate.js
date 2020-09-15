/**
 *
 * @param {*} residents of type [Hotel]
 * @param {*} date of type occupiedDate
 */

export default function filterDate(hotels, date) {
  const s = Date.parse(date.start);
  const e = Date.parse(date.end);

  return hotels.map((hotel) => {
    const rooms = hotel.rooms
      .map((room) => {
        const occupied = room.occupiedDates.reduce((acc, { start, end }) => {
          if (acc) return acc;

          const pStart = Date.parse(start);
          const pEnd = Date.parse(end);

          if ((s <= pStart && pStart <= e) || (s <= pEnd && pEnd <= e)) {
            console.log(hotel.name, room.roomNumber);
            console.log(start, date.start);
            console.log(end, date.end);
            return true;
          }
          return false;
        }, false);

        return occupied ? null : room;
      }, false)
      .filter(Boolean);

    return { ...hotel, rooms };
  });
}
