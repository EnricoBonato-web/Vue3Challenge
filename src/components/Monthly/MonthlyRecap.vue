<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import MonthlyForm from '@/components/Monthly/MonthlyForm.vue';
import { defineComponent } from 'vue';
</script>

<template>
  <main>
    <MonthlyForm :month="month" />
    <MonthlyList :month="month" />
  </main>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      month: new Date(),
    };
  },
  methods: {},
});
</script>
