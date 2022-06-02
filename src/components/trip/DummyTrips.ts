import type TripType from "@/type/TripType"

const DummyTrips:TripType[]=[
    {
      id: '' + Math.random() * 100,
      purpose: 'Holliday',
      startTime: new Date(),
      endDate: new Date(),
      startLocation: 'Bielefeld',
      endLocation: 'Castelfranco',
      overnight: 2,
      breakfasts: 2,
      lunches: 1,
      dinners: 1,
      isDummyData: true, //added to add and remove dummy datas }];
    },
    {
      id: '' + Math.random() * 100,
      purpose: 'party',
      startTime: new Date(),
      endDate: new Date(),
      startLocation: 'Bielefeld',
      endLocation: 'Castelfranco',
      overnight: 2,
      breakfasts: 2,
      lunches: 1,
      dinners: 1,
      isDummyData: true, //added to add and remove dummy datas }];
    },
    {
      id: '' + Math.random() * 100,
      purpose: 'work',
      startTime: new Date(),
      endDate: new Date(),
      startLocation: 'Bielefeld',
      endLocation: 'Castelfranco',
      overnight: 2,
      breakfasts: 2,
      lunches: 1,
      dinners: 1,
      isDummyData: true, //added to add and remove dummy datas }];
    },
    {
      id: '' + Math.random() * 100,
      purpose: 'cat',
      startTime: new Date(),
      endDate: new Date(),
      startLocation: 'Bielefeld',
      endLocation: 'Castelfranco',
      overnight: 2,
      breakfasts: 2,
      lunches: 1,
      dinners: 1,
      isDummyData: true, //added to add and remove dummy datas }];
    },
  ];
  export default DummyTrips;