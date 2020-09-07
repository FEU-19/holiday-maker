import getDateArray from './getDateArrayInterval';

// USAGE =  dateFilter(residents, date);


// let residents = [
//
//
//   // Resident 1
//
//
//   {
//     _id: {
//       $oid: '5f4e2b500ae3bf21d48b09f2'
//     },
//
//     rooms: [
//
//
//     // ROOM 1
//
//       {
//         _id: {
//           $oid: '5f4e2b500ae3bf21d48b09f3'
//         },
//         occupiedDates: [
//           {
//            start: '2020-06-01T12:15:00.000Z',
//            end: '2020-06-10T11:00:00.000Z'
//          },
//         ]
//       },
//
//
//
//   // ROOM 2
//
//       {
//         _id: {
//           $oid: '5f4e2b500ae3bf21d48b09f4'
//         },
//         occupiedDates: [
//           {
//            start: '2020-07-09T12:15:00.000Z',
//            end: '2020-07-18T11:00:00.000Z'
//          },
//         ]
//       },
//     ]
//   },
//
//   // Resident 2
//
// ]

let date = {start: '2020-06-02T12:15:00.000Z', end: '2020-06-08T12:16:00.000Z'}


     export default function filterDate (residents, date) {
       console.log("hej");
       let newResidents = residents;
       let dateInterval = getDateArray(new Date(date.start), new Date(date.end))
        for (let [i, resident] of newResidents.entries()) {
          let rooms = resident.rooms;
          for (let [j, room] of rooms.entries()) {
            let collisions = 0;
            for (let occupiedDate of room.occupiedDates) {
                let start = occupiedDate.start;
                let end = occupiedDate.end;
                let occupiedInterval = getDateArray(new Date(start), new Date(end))
                for (let occDate of occupiedInterval) {
                  for (let userDate of dateInterval) {
                    if (userDate.getDate() === occDate.getDate() && userDate.getMonth() === occDate.getMonth()) {
                      collisions++;
                      console.log("krock!" + userDate );
                    }
                  }
                }
            }
            if (collisions > 0) {
              newResidents[i].rooms.splice(j, 1);
            }
          }
        }
        console.log(newResidents);
     }
