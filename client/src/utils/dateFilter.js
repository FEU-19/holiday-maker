
let residents = [


  // Resident 1
  {
    _id: {
      $oid: '5f4e2b500ae3bf21d48b09f2'
    },

    rooms: [


    // ROOM 1

      {
        _id: {
          $oid: '5f4e2b500ae3bf21d48b09f3'
        },
        occupiedDates: [
          {
           start: '2020-06-01T12:15:00.000Z',
           end: '2020-06-10T11:00:00.000Z'
         },
        ]
      },



  // ROOM 2

      {
        _id: {
          $oid: '5f4e2b500ae3bf21d48b09f4'
        },
        occupiedDates: [
          {
           start: '2020-06-09T12:15:00.000Z',
           end: '2020-06-18T11:00:00.000Z'
         },
        ]
      },
    ]
  },

  // Resident 2

]

let date = {start: '2020-06-02T12:15:00.000Z', end: '2020-06-08T11:00:00.000Z'}



console.log(residents);



let startDate = new Date('2015-08-04');
let endDate = new Date('2015-08-12');

     export default function dateFilter (residents, date) {
        for (let resident of residents) {
          let rooms = resident.rooms;
          let resultProductData = rooms.filter(function (a) {
            for (let occupiedDate of a.occupiedDates) {
              console.log(occupiedDate);
              let hitDates = occupiedDate || {};
              console.log(hitDates);
              // hitDates = hitDates.map(function(date) { return new Date(date); });
              // let hitDateMatches = hitDates.filter(function(date) { return date >= startDate && date <= endDate });
              // return hitDateMatches.length>0;
            }
          });
        }

     }
     dateFilter(residents, date);
