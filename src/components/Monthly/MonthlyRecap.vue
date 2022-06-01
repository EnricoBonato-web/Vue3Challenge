<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import { defineComponent } from 'vue';
</script>

<template>
  <main>
    <MonthlyList :month= "$props.month" />
  </main>
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
