import getDateArray from './getDateArrayInterval';


export default function filterDate (hotels, date) {
  let dateInterval = getDateArray(new Date(date.start), new Date(date.end));

  let result = hotels.map((hotel) => {
    const rooms = hotel.rooms.map((room) => {
      const occupied = room.occupiedDates.reduce((acc, { start, end }) => {
        if (acc) return acc;
        let temp = false;

        const occupiedInterval = getDateArray(new Date(start), new Date(end))
        .map((occ) => {
          return dateInterval.map((uDate) => {
            if (uDate.getDate() === occ.getDate() && uDate.getMonth() === occ.getMonth()) {
              temp = true;
            }
            return false;
          })
        })

        if (temp) {
          return true;
        }
        return false;
      }, false);

      return occupied ? null : room;
    })
    .filter(Boolean);
    return { ...hotel, rooms };
  });
    return result.filter(hotel => hotel.rooms.length !== 0);
}
