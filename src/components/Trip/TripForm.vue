<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import MonthlyForm from '@/components/Monthly/MonthlyForm.vue';
import { defineComponent } from 'vue';
</script>

<template>
  <main>
    <form>
      <p>purpose</p>
      <input type="text" />
      <p>purpose</p>
      <input type="submit" />
    </form>
  </main>
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
