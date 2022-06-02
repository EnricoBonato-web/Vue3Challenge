<script setup lang="ts">
import { defineComponent } from 'vue';
import MonthlyPrint from '@/components/Monthly/MonthlyPrint.vue';

const today = new Date();
let todayFormatted =
  today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? '0' : '') + String(today.getMonth() + 1);
let test = todayFormatted;
const updateDate = function (data: string) {
  this.test = data;
  console.log(test);
};
console.log(todayFormatted);
</script>

<template>
  <form>
    <input type="month" v-model="todayFormatted" @change="updateDate(todayFormatted)" />
    <MonthlyPrint :key="test" :month="todayFormatted" />
  </form>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  methods: {
    deleteRecord(id: string) {
      this.$emit('deteleRecord', id);
      console.log('Delete record is clicked');
    },
  },
});
</script>
