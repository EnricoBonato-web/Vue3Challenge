<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <div>Lista Spese</div>
  <ul>
    <li>Pago</li>
    <li>Pago</li>
    <li>Pago</li>
    <li>Pago</li>
  </ul>
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
