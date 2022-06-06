<script setup lang="ts">
import { defineComponent } from 'vue';
import MonthlyPrint from '@/components/Monthly/MonthlyPrint.vue';
import { DataSelected } from '@/components/Monthly/DataState.vue';
const today = new Date();
DataSelected.data =
  today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? '0' : '') + String(today.getMonth() + 1);
</script>

<template>
  <input type="month" v-model="DataSelected.data" />
  <MonthlyPrint :month="DataSelected.data" />
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],

  
});
</script>
