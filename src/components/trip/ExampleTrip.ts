import type ExpenseType from '@/type/TripType';

const ExampleTrips: ExpenseType[] = [
  {
    id: '' + 0,
    purpose: 'Company Weber GmbH visited, project management',
    startTime: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    endTime: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    startLocation: 'Berlin',
    endLocation: 'München',
    kilometersTravelled: 585,
    overnight: 0,
    breakfasts: 0,
    lunches: 0,
    dinners: 0,
    isDummyData: true, //added to add and remove dummy datas }];
  },
];
export default ExampleTrips;
