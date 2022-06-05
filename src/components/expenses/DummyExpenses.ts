import BillType from '@/type/BillType';
import type ExpenseType from '@/type/ExpenseType';
const DummyExpense: ExpenseType[] = [
  {
    date: new Date(),
    tripId: '' + 1,
    voucherNumber: 'fdksflds',
    description: 'slfdskfjdlksjf',
    type: BillType[1],
    amount: 33.3,
    note: 'prove',
  },
  {
    date: new Date(),
    tripId: '' + 2,
    voucherNumber: 'fdksflds',
    description: 'slfdskfjdlksjf',
    type: BillType[1],
    amount: 33.3,
    note: 'prove',
  },
  {
    date: new Date(),
    tripId: '' + 3,
    voucherNumber: 'fdksflds',
    description: 'slfdskfjdlksjf',
    type: BillType[1],
    amount: 33.3,
    note: 'prove',
  },
  {
    date: new Date(),
    tripId: '' + 4,
    voucherNumber: 'fdksflds',
    description: 'slfdskfjdlksjf',
    type: BillType[1],
    amount: 33.3,
    note: 'prove',
  },
];
export default DummyExpense;
