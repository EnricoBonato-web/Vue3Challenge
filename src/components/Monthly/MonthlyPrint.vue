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
      /*
toAdd:    header
          0-text :  Spesenabrechnung
          1-columns 0-stack['Mitarbeiter', 'Monat']
data                1-stack: ['Demo User']
          content. 
          0-text: 'Reisen'
trips     1-table - body - 0- ['Beginn', 'Ende', 'Anlass', 'Start', 'Ziel', 'Betrag(EUR)']
          2-text: 'Belege'
expenses  3-table - body - 0- ['Datum', 'Typ', 'Bezeichnung', 'Nummer', 'Betrag(EUR)']
          4-columns - stack ... completed
        
      
      */
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
        console.log(expenses);
        expenses.map((expense: ExpenseType) => {
          this.docDefinition.content[3].table?.body.push([this.FormattData(expense.date), expense.type.value, expense.description, expense.voucherNumber, expense.amount.toString()]);
        });
        /*          
        -------PageBreak---------
toAdd   content:
name    table - body - 0 trip name
city                   1 trip city
                       2 stack - 0 table - body 0 header(3)
trip data                                       1  0 table - body - 0 Anlass
                                                                    1 Start
                                                                    2 Ziel
                                                   1 table - body - 0 Beginn
                                                                    1 Ende
                                                   2 table - body - 0 Stecke
                                                                    1 Fahrkosten
                             1 table - body 0 header(2)
                       3 text 0 Summe Kosten
                              1 summe

        */
        trips.map((trip: TripType) => {
          let TripTable: any = tripDefinition(trip);
          //  TripTable.table.body[2][0].stack[0].table.body[1][0].table.body[0].push('test');
          //  TripTable.table.body[2][0].stack[0].table.body[1][0].table.body[1].push('test');
          //  TripTable.table.body[2][0].stack[0].table.body[1][0].table.body[2].push('test');
          this.docDefinition.content.push(TripTable);


        });
        pdfMake.createPdf(this.docDefinition).download();
      }
    }
  }
});
</script>
