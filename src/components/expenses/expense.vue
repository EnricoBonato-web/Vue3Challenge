<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './expenseQuestions.json';
import '../../assets/form.css'
console.log(wizardQuestions[1]);
</script>

<template>
  <h1>Insert Expense</h1>
  <vue-form-wizard :form="wizardQuestions" v-model="formData" @submit="handleForm(formData)" />
</template>

<script lang="ts">
export default defineComponent({
  name: 'ExpenseTrip',

  methods: {
    handleForm(data: any) {
      console.log(data);
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
