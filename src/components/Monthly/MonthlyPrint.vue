<script setup lang="ts">
import { defineComponent } from 'vue';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import LocalStorageVar from '@/type/LocalStorageVar';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
import DataDefinition from './DataDefinition';
import tripDefinition from './TripDefinition';
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
    FormattData(unformattedDate: Date) {
      const date = new Date(unformattedDate);
      return ('0' + date.getDate()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + '.' + ('0' + date.getFullYear()).slice(-2) + ', ' + date.getHours() + ":" + date.getMinutes();
    },
    print() {
      this.docDefinition = DataDefinition;
      if (localStorage.getItem(LocalStorageVar.EXPENSES) !== null || localStorage.getItem(LocalStorageVar.TRIPS) !== null) {
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
        //this.docDefinition.content.push({ columns: [{ width: "auto", stack: ['', ''] }] });
        trips.map((trip: TripType) => {
          this.docDefinition.content[1].table?.body.push([this.FormattData(trip.startTime), this.FormattData(trip.endTime), trip.purpose, trip.startLocation, trip.endLocation, '1']);
        });
        //expenses
        expenses.map((expense: ExpenseType) => {
          this.docDefinition.content[3].table?.body.push([this.FormattData(expense.date), expense.type.value, expense.description, expense.voucherNumber, expense.amount.toString()]);
        });
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
