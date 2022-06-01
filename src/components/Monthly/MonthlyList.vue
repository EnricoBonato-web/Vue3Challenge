<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <div class="logo">{{ $props.month }}</div>
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
