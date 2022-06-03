<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './expenseQuestions.json';
import '../../assets/form.css';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
</script>

<template>
  <h1>Insert Trip</h1>
  <vue-form-wizard
    :form="questions"
    v-model="formData"
    @submit="handleForm(formData)"
    @change="handleChange(formData)"
  />
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    load(data:Date) {
      let updatedQuestion = wizardQuestions;
      updatedQuestion[1].options.list = [];
      JSON.parse(localStorage.getItem('trips')!).forEach((trip: TripType) => {
        if(trip.startTime<data&&data<trip.endDate)
        updatedQuestion[1].options.list?.push({ id: +trip.id, value: trip.purpose });
      });
      console.log('prova');
      return updatedQuestion;
    },
    handleChange(data: any) {
      this.questions = this.load(data.question1.value);
    },
    handleForm(data: any) {
      const expenseBuild: ExpenseType[] = [
        {
          date: data.question1.value,
          tripId: data.question2.value,
          voucherNumber: data.question3.value,
          description: data.question4.value,
          type: data.question5.value,
          amount: data.question6.value,
          note: data.question7.value,
        },
      ];
      if (localStorage.getItem('expense') !== undefined) {
        const trips: ExpenseType[] = JSON.parse(localStorage.getItem('expense')!);
        trips.push(expenseBuild[0]);
        localStorage.setItem('expense', JSON.stringify(trips));
      } else localStorage.setItem('expense', JSON.stringify(expenseBuild));
      console.log(JSON.stringify(expenseBuild));
      console.log(localStorage.getItem('expense'));
    },
  },
  data() {
    return {
      filterData: new DataTransfer(),
      formData: [],
      questions: this.load(new Date()),
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
