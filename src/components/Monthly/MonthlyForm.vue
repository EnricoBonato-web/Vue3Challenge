<script setup lang="ts">
import { defineComponent } from 'vue';
import MonthlyPrint from '@/components/Monthly/MonthlyPrint.vue';
import { DataSelected } from '@/components/Monthly/DataState.vue';
const today = new Date();
DataSelected.data =
  today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? '0' : '') + String(today.getMonth() + 1);
</script>

<template>
  <form>
    <input type="month" v-model="DataSelected.data" />
    <MonthlyPrint :month="DataSelected.data" @prova="" />
  </form>
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    deleteRecord(id: string) {
      this.$emit('deteleRecord', id);
      console.log('Delete record is clicked');
    },
  },
});
</script>
