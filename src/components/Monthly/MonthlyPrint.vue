<script setup lang="ts">
import { defineComponent } from 'vue';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import LocalStorageVar from '@/type/LocalStorageVar';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
import DataDefinition from './DataDefinition';
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
      /*
      
      
      
      */
    }
  },
  methods: {
    print() {
      if (localStorage.getItem(LocalStorageVar.EXPENSES) != null && localStorage.getItem(LocalStorageVar.TRIPS) != null) {
        const startDate = new Date(Date.parse(this.$props.month + '-01'));
        const endDate = new Date(Date.parse(this.$props.month + '-01'));
        endDate.setMonth(endDate.getMonth() + 1)

        let trips: TripType[];
        trips = JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!);
        trips = trips.filter((trip: TripType) => { return trip.startTime < endDate && trip.endTime >= startDate });

        let expenses: ExpenseType[];
        expenses = JSON.parse(localStorage.getItem(LocalStorageVar.EXPENSES)!);
        expenses = expenses.filter((expense: ExpenseType) => { return expense.date < endDate && expense.date >= startDate });
        //first page render
        this.docDefinition.content.push({ columns: [{ width: "auto", stack: ['', ''] }] });
        trips.map((trip: TripType) => {




        })


        pdfMake.createPdf(this.docDefinition).download();
      }
    }
  }
});
</script>
