<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './tripQuestions.json';
import '../../assets/form.css';
import type TripType from '@/type/TripType';
</script>

<template>
  <h1>Insert trip</h1>
  <vue-form-wizard :form="wizardQuestions" v-model="formData" @submit="handleForm(formData)" />
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    handleForm(data: any) {
      console.log(data.question1.value);
      const tripBuild: TripType[] = [
        {
          id: '' + Math.ceil(Math.random() * 1000000),
          purpose: data.question1.value,
          startTime: data.question2.value,
          endDate: data.question3.value,
          startLocation: data.question4.value,
          endLocation: data.question5.value,
          kilometersTravelled: data.question6.value,
          overnight: data.question7.value,
          breakfasts: data.question8.value,
          lunches: data.question9.value,
          dinners: data.question10.value,
        },
      ];
      if (localStorage.getItem('trips') !== undefined) {
        const trips: TripType[] = JSON.parse(localStorage.getItem('trips')!);
        trips.push(tripBuild[0]);
        localStorage.setItem('trips', JSON.stringify(trips));
      } else localStorage.setItem('trips', JSON.stringify(tripBuild));
      console.log(JSON.stringify(tripBuild));
      console.log(localStorage.getItem('trips'));
    },
  },
  data() {
    return {
      formData: [],
      wizardQuestions: wizardQuestions,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
