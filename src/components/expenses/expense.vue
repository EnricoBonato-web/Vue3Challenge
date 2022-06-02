Trip
<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './expenseQuestions.json';
import '../../assets/form.css';
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

<style></style>
