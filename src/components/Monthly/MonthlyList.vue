<script setup lang="ts">
import type ExpenseType from '@/type/ExpenseType';
import type TripType from '@/type/TripType';
import { defineComponent } from 'vue';
import { DataSelected } from '@/components/Monthly/DataState.vue';
import LocalStorageVar from '../../type/LocalStorageVar';
import ListItem from './ListItem.vue';
import { FormattData, FormattEuro } from '@/type/UtilityFunctions';
</script>
<template >
  <div id="list" v-if="filteredTrip().toString() != ''">
    <ul>
      <div v-for="trip in filteredTrip()">
        <li>
          <ListItem>
            <template #heading>
              <h3 class="bold"> {{ trip.purpose }}</h3> {{ trip.startLocation }} - {{ trip.endLocation }}
              from: {{ FormattData(trip.startTime) }} to:{{ FormattData(trip.endTime) }}
            </template>
            <ul>
              <div  v-for="expense in getExpense(trip.id)">
                <li>
                  <p>{{ expense.description }} Total: {{ FormattEuro(expense.amount) }}
                  </p>
                </li>
              </div>
            </ul>
          </ListItem>
        </li>
      </div>
    </ul>
  </div>
  <div v-else>
    <h3 class="error">No trip found during this mounth</h3>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      DataAdded: (localStorage.getItem(LocalStorageVar.TRIPS) != '' &&
        localStorage.getItem(LocalStorageVar.TRIPS) != null &&
        localStorage.getItem(LocalStorageVar.TRIPS).length > 0
        ? JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS))
        : []) as TripType[],
    };
  },
  methods: {
    //filter valid trips
    filteredTrip() {
      return this.DataAdded.filter((trip: TripType) => {
        return new Date(trip.startTime).getMonth() + 1 == +DataSelected.data.substring(5, 7);
      });
    },
    //get Expense for each trips
    getExpense(id: string): ExpenseType[] {
      return (
        localStorage.getItem(LocalStorageVar.EXPENSES) &&
          localStorage.getItem(LocalStorageVar.EXPENSES).length > 0
          ? JSON.parse(localStorage.getItem(LocalStorageVar.EXPENSES)).filter(
            (expense: ExpenseType) => {
              return expense.tripId == id;
            },
          )
          : []
      ) as ExpenseType[];
    },
  },
});
</script>
<style>
.error {
  margin: 20px;
  color: red;
}

#list {
  width: 100%;
  height: 80%;
  margin-top: 2em;
}

li {
  list-style: none;
  width: 100%;
}

ul {
  padding: 0;
}
</style>