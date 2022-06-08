<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import MonthlyForm from '@/components/Monthly/MonthlyForm.vue';
import { defineComponent } from 'vue';
</script>

<template>

  <main id="list">
    <h1>Monthly Recap</h1>
    <MonthlyForm />
    <MonthlyList />
  </main>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      month: new Date(), //default data is current data 
    };
  },
  methods: {},
});
</script>
