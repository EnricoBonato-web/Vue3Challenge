import BillType from '@/type/BillType';
import type ExpenseType from '@/type/ExpenseType';
const DummyExpense: ExpenseType[] = [
  {
    date: new Date(),
    tripId: '' + 1,
    voucherNumber: 'GDSFGE23432',
    description: 'Uber',
    type: BillType[4],
    amount: 20,
  },
  {
    date: new Date(),
    tripId: '' + 2,
    voucherNumber: 'HRTHBFG7774',
    description: 'Train ticket ',
    type: BillType[2],
    amount: 33,
  },
  {
    date: new Date(),
    tripId: '' + 3,
    voucherNumber: 'RFGRHJT2345',
    description: 'Hotel ',
    type: BillType[1],
    amount: 77,
    note: 'Nice hotel',
  },
  {
    date: new Date(),
    tripId: '' + 3,
    voucherNumber: 'HRTHRHBC9345',
    description: 'sushi',
    type: BillType[1],
    amount: 27.5,
    note: 'prove',
  },
];
export default DummyExpense;
