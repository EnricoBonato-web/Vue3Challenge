import type TripType from '@/type/TripType';
const DAYSECONDS = 24 * 60 * 60 * 1000;
const DummyTrips: TripType[] = [
  {
    id: '' + 0,
    purpose: 'visit to onrooby headquarters',
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + 3 * DAYSECONDS),
    startLocation: 'Bielefeld',
    endLocation: 'Berlin',
    kilometersTravelled: 500,
    overnight: 2,
    breakfasts: 2,
    lunches: 1,
    dinners: 1,
    isDummyData: true, //added to mark dummy datas }];
  },
  {
    id: '' + 1,
    purpose: 'Returned Home',
    startTime: new Date(new Date().getTime() + 30 * DAYSECONDS),
    endTime: new Date(new Date().getTime() + 34 * DAYSECONDS),
    startLocation: 'Bielefeld',
    endLocation: 'Castelfranco',
    kilometersTravelled: 1000,
    overnight: 2,
    breakfasts: 0,
    lunches: 1,
    dinners: 1,
    isDummyData: true, //added to mark dummy datas }];
  },
  {
    id: '' + 2,
    purpose: 'Trip to Koln',
    startTime: new Date(),
    endTime: new Date(new Date().getTime() + DAYSECONDS),
    startLocation: 'Bielefeld',
    endLocation: 'Koln',
    kilometersTravelled: 300,
    overnight: 0,
    breakfasts: 0,
    lunches: 0,
    dinners: 0,
    isDummyData: true, //added to mark dummy datas }];
  },
  {
    id: '' + 3,
    purpose: 'Meeting with Google',
    startTime: new Date(new Date().getTime() - DAYSECONDS),
    endTime: new Date(new Date().getTime() + 2 * DAYSECONDS),
    startLocation: 'Bielefeld',
    endLocation: 'Hamburg',
    kilometersTravelled: 1500,
    overnight: 1,
    breakfasts: 0,
    lunches: 1,
    dinners: 1,
    isDummyData: true, //added to mark dummy datas }];
  },
];
export default DummyTrips;
