<script setup lang="ts">
import { defineComponent } from 'vue';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import LocalStorageVar from '@/type/LocalStorageVar';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
import DataDefinition from './DataDefinition';
import tripDefinition from './TripDefinition';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { CalcDate, FormattData, FormattEuro } from '@/type/UtilityFunctions';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
</script>
<template>
  <button @click="print()">Print {{ $props.month }}</button>
</template>
<script lang="ts">

export default defineComponent({
  props: ['month'],
  data() {
    return {
      docDefinition: DataDefinition

    }
  },
  methods: {
    print() {

      let sum: number = 0;
      this.docDefinition = DataDefinition;
      this.docDefinition.header.stack[1].table?.body[1].push(this.$props.month + '');
      if (localStorage.getItem(LocalStorageVar.EXPENSES) !== '' && localStorage.getItem(LocalStorageVar.TRIPS) !== '') {
        const startDate = new Date(Date.parse(this.$props.month + '-01'));
        const endDate = new Date(Date.parse(this.$props.month + '-01'));
        endDate.setMonth(endDate.getMonth() + 1)

        let trips: TripType[];
        trips = JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!);
        trips = trips.filter((trip: TripType) => { return new Date(trip.startTime) < endDate && new Date(trip.endTime) >= startDate });

        let expenses: ExpenseType[];
        expenses = JSON.parse(localStorage.getItem(LocalStorageVar.EXPENSES)!);
        expenses = expenses.filter((expense: ExpenseType) => { return new Date(expense.date) < endDate && new Date(expense.date) >= startDate });
        //first page render
        //trips

        trips.map((trip: TripType) => {
          let amount = CalcDate(new Date(trip.startTime), new Date(trip.endTime))
            - 4.8 * trip.breakfasts
            - 9.6 * trip.lunches
            - 9.6 * trip.dinners
            + (trip.kilometersTravelled / (10 / 3));
          // amount += trip.overnight * 20;
          sum += amount;
          this.docDefinition.content[1].table?.body.push([
            FormattData(trip.startTime),
            FormattData(trip.endTime),
            trip.purpose,
            trip.startLocation,
            trip.endLocation,
            FormattEuro(amount)]);
        });
        //expenses
        expenses.map((expense: ExpenseType) => {
          this.docDefinition.content[3].table?.body.push([
            FormattData(expense.date),
            expense.type.value,
            expense.description,
            expense.voucherNumber,
            FormattEuro(expense.amount.toString())]);
          sum += expense.amount;
        });

        this.docDefinition.content[4].text[1] = (FormattEuro(sum));

        //trips pages
        trips.map((trip: TripType) => {
          let TripTable: any = tripDefinition(trip);
          this.docDefinition.content.push(TripTable);
        });

        pdfMake.createPdf(this.docDefinition).download();

      }
    }
  }
});
</script>
