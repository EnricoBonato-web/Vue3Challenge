<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import SupportIcon from './icons/IconSupport.vue';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
import DummyTrips from './trip/DummyTrips';
import DummyExpenses from './expenses/DummyExpenses';
import LocalStorageVar from '../type/LocalStorageVar';
import ExampleTrips from './trip/ExampleTrip';
import ExampleExpense from './expenses/ExampleExpense';
</script>
<template>
  <WelcomeItem>
    <h1>VueJS Coding Challenge</h1>

  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    Welcome to my implementation of the VueJS Coding Challenge, in this page you can find some information about my
    implementation.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    <p>This project is build using Vue3, Typescript, Javascript , HTML and Css.</p>
    <p>Some external modules that i have used are:
      <a h-ref="https://github.com/Anivive/vue3-form-wizard">vue3-form-wizard</a>,
      <a h-ref="http://pdfmake.org/#/">pdfmake</a>
    </p>
    Test implemented using <a href="https://www.cypress.io/">Cypress</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Dummy Data</template>

    To better test this application i have prepared some Dummy datas that can be added to the local storage:
    <div class="styleButtons">

      <form id="add" @submit="Add($event)">
        <button type="submit" :disabled="DataAdded">Add Dummy Data</button>
      </form>
      <form id="add" @submit="AddExample($event)">
        <button type="submit" :disabled="DataAdded">Add Example Data</button>
      </form>
      <form if="remove" @submit="Remove($event)">
        <button type="submit" :disabled="!DataAdded">Remove Data</button>
      </form>
    </div>
  </WelcomeItem>



  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    Hope you enjoy my project, looking forward to hear reviw about it.
  </WelcomeItem>
</template>
    <script lang="ts">

export default {
  name: 'ExpenseTrip',
  data() {
    return {
      DataAdded:
        localStorage.getItem(LocalStorageVar.TRIPS) !== null
          ? localStorage.getItem(LocalStorageVar.TRIPS)!.length > 0
            ? true
            : false
          : false,
    };
  },
  methods: {
    AddExample(e: Event) {
      e.preventDefault();
      const trips: TripType[] = ExampleTrips;
      localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(trips));
      const expenses: ExpenseType[] = ExampleExpense;
      localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(expenses));
      this.DataAdded = !this.DataAdded;
    },
    Add(e: Event) {
      e.preventDefault();
      const trips: TripType[] = DummyTrips;
      localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(trips));
      const expenses: ExpenseType[] = DummyExpenses;
      localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(expenses));
      this.DataAdded = !this.DataAdded;
    },
    Remove(e: Event) {
      e.preventDefault();
      if (localStorage.getItem(LocalStorageVar.TRIPS) != null) {
        localStorage.setItem(LocalStorageVar.TRIPS,'');
        localStorage.setItem(LocalStorageVar.EXPENSES,'');

      }
      /*localStorage.setItem(
        LocalStorageVar.TRIPS,
        JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!).filter((trip: TripType) => {
          trip.isDummyData != null;
        }),
      );*/
      this.DataAdded = !this.DataAdded;
    },
  },
};
</script>
<style>
dummyData {
  display: flex;
  flex-direction: row;
}
</style>