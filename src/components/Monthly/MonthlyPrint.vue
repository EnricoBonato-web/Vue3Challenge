<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <button @click="">Print {{ $props.month }}</button>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
});
</script>
