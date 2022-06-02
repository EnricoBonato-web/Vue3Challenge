<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import MonthlyForm from '@/components/Monthly/MonthlyForm.vue';
import { defineComponent } from 'vue';
</script>

<template>
  <main>
<<<<<<< HEAD
    <form>
      <p>purpose</p>
      <FormKit type="text" />
      <p>startTime</p>
      <FormKit type="datetime-local" />
      <p>endDate</p>
      <FormKit type="datetime-local" />
      <p>start location</p>
      <FormKit type="text" />
      <p>end location</p>
      <FormKit type="text" />

      <input type="submit" />
    </form>
=======
    <MonthlyForm />
    <MonthlyList />
>>>>>>> a8c589b8c9b6f847b54c998b37f7b943fb242eb2
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
