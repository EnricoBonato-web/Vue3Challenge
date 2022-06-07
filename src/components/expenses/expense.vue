<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './expenseQuestions.json';
import '../../assets/form.css';
import type TripType from '@/type/TripType';
import type ExpenseType from '@/type/ExpenseType';
import BillType from '@/type/BillType';
import LocalStorageVar from '@/type/LocalStorageVar';
</script>

<template>
  <h1>Insert Expense</h1>
  <form ref="test">

    <vue-form-wizard ref="test" :form="questions" v-model="formData" @submit="handleForm(formData)"
      @next="handleNext" />
  </form>
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    handleNext() {
      if (this.formData.question1.value != this.oldData) {
        this.load(this.formData.question1.value as Date)
        this.oldData = this.formData.question1.value;
      }
    },
    load(data: Date) {
      let updatedQuestion = wizardQuestions;
      updatedQuestion[4].options.list = [];
      updatedQuestion[4].options.list.push(...BillType);
      updatedQuestion[2].options.list = [];
      if (localStorage.getItem(LocalStorageVar.TRIPS) != '')
        if (localStorage.getItem(LocalStorageVar.TRIPS) != null) {
          JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!)?.forEach((trip: TripType) => {
            if (data >= trip.startTime && data <= trip.endTime)
              updatedQuestion[2].options.list?.push({ id: +trip.id, value: trip.purpose });
          });
        }
      return updatedQuestion;
    },
    handleForm(data: any) {
      const expenseBuild: ExpenseType[] = [
        {
          date: data.question1.value,
          tripId: data.question2.value[0].id,
          voucherNumber: data.question3.value,
          description: data.question4.value,
          type: data.question5.value,
          amount: data.question6.value,
          note: data.question7?.value || "",
        },
      ];
      if (localStorage.getItem(LocalStorageVar.EXPENSES) !== null) {
        const trips: ExpenseType[] = JSON.parse(localStorage.getItem(LocalStorageVar.EXPENSES)!);
        trips.push(expenseBuild[0]);
        localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(trips));
      } else localStorage.setItem(LocalStorageVar.EXPENSES, JSON.stringify(expenseBuild));

      this.formData.reset();

    },

  },
  data() {
    return {
      formData: {} as any,
      oldData: new Date(),
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
