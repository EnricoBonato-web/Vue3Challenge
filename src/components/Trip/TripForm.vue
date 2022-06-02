<script setup lang="ts">
import MonthlyList from '@/components/Monthly/MonthlyList.vue';
import MonthlyForm from '@/components/Monthly/MonthlyForm.vue';
import { defineComponent } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
</script>

<template>
  <main>
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
