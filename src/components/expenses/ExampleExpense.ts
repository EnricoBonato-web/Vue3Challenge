import BillType from '../../type/BillType';
import type ExpenseType from '@/type/ExpenseType';
const ExampleExpense: ExpenseType[] = [
  {
    date: new Date(),
    tripId: '' + 0,
    voucherNumber: 'RB-7398384',
    description: 'Printer cartridges',
    type: BillType[1],
    amount: 29.00,
    note: '',
  },
];
export default ExampleExpense;
