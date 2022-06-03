import type BillType from './BillType';

type ExpenseType = {
  date: Date;
  tripId: number;
  voucherNumber: string;
  description: string;
  type: typeof BillType;
  amount: number;
  note?: string;
};
export default ExpenseType;
/*
Date
Assignment to a trip. Selection field with all trips (see below) which are suitable for the period
Note: tickets are typically purchased before departure.
Voucher number, alphanumeric field, e.g. "RB-7398384"
Description, e.g. "Printer Cartridges"
Type: hotel bill, catering slip, train ticket, air ticket, taxi, bill
Gross amount of the receipt
Notes (optional)
*/
