import getDateArray from './getDateArrayInterval';


export default function filterDate (residents, date) {
  let dateInterval = getDateArray(new Date(date.start), new Date(date.end))
  for (let [i, resident] of residents.entries()) {
    // eslint-disable-next-line
    for (let [j, room] of resident.rooms.entries()) {
      for (let occupiedDate of room.occupiedDates) {
        let occupiedInterval = getDateArray(new Date(occupiedDate.start), new Date(occupiedDate.end))
        for (let occDate of occupiedInterval) {
          for (let userDate of dateInterval) {
            if (userDate.getDate() === occDate.getDate() && userDate.getMonth() === occDate.getMonth()) {
              residents.splice(i, 1);
              break;
            }
          }
        }
      }
    }
  }
  return residents;
}
