<script setup lang="ts">
import type ExpenseType from '@/type/ExpenseType';
import type TripType from '@/type/TripType';
import { defineComponent } from 'vue';
import { DataSelected } from '@/components/Monthly/DataState.vue';
import LocalStorageVar from '../../type/LocalStorageVar.js';
</script>

<template>
  <div>{{ DataSelected }}</div>
  <div v-if="DataAdded !== null">
    <ul>
      <li v-for="trip in filteredTrip()">
        <h1>
          {{ trip.purpose }}
        </h1>
        <ul>
          <li v-for="expense in getExpense(trip.id)">
            <h2>{{ expense.voucherNumber }}</h2>
            <h2>{{ expense.description }}</h2>
            <h2>{{ expense.amount }}</h2>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div v-else><h1>No trip found during this mounth</h1></div>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  data() {
    return {
      DataAdded: (localStorage.getItem(LocalStorageVar.TRIP) &&
      localStorage.getItem(LocalStorageVar.TRIPS)!.length > 0
        ? JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!)
        : []) as TripType[],
    };
  },
  methods: {
    filteredTrip() {
      return this.DataAdded.filter((trip: TripType) => {
        return new Date(trip.startTime).getMonth() + 1 == +DataSelected.data.substring(5, 7);
        return false;
      });
    },
    getExpense(id: string): ExpenseType[] {
      return (
        localStorage.getItem(LocalStorageVar.EXPENSES) &&
        localStorage.getItem(LocalStorageVar.EXPENSES)!.length > 0
          ? JSON.parse(localStorage.getItem(LocalStorageVar.EXPENSES)!).filter(
              (expense: ExpenseType) => {
                console.log(localStorage.getItem(LocalStorageVar.EXPENSES));
                return expense.tripId == id;
              },
            )
          : []
      ) as ExpenseType[];
    },
  },
});
</script>
