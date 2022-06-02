<script setup lang="ts">
import { defineComponent } from 'vue';
console.log('build');
</script>

<template>
  <button>Print {{ $props.month }}</button>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  emit: {
    prova() {
      console.log('prova');
    },
  },
});
</script>
