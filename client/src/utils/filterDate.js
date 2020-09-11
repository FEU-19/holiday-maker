import getDateArray from './getDateArrayInterval';


export default function filterDate (residents, date) {
  console.log(date);
  console.log(residents);
 let newResidents = residents;
 let collisions = 0;
 let dateInterval = getDateArray(new Date(date.start), new Date(date.end))
  for (let [i, resident] of newResidents.entries()) {
    let rooms = resident.rooms;
    for (let [j, room] of rooms.entries()) {
      for (let occupiedDate of room.occupiedDates) {
          let start = occupiedDate.start;
          let end = occupiedDate.end;
          let occupiedInterval = getDateArray(new Date(start), new Date(end))
          for (let occDate of occupiedInterval) {
            for (let userDate of dateInterval) {
              if (userDate.getDate() === occDate.getDate() && userDate.getMonth() === occDate.getMonth()) {
                collisions++;
              }
            }
          }
      }

      if (collisions === 0) {
        console.log(newResidents);
        newResidents.splice(i, 1);
        collisions++;
      }
    }
  }

  return newResidents;
}
