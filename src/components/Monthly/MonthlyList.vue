<script setup lang="ts">
import type TripType from '@/type/TripType';
import { defineComponent } from 'vue';
</script>

<template>
  <div>{{ $props.month }}</div>
  <ul>
    <li v-for="trip in DataAdded">{{ trip.purpose }}</li>
  </ul>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  data() {
    return {
      DataAdded:
        localStorage.getItem('trips') && localStorage.getItem('trips')!.length > 0
          ? JSON.parse(localStorage.getItem('trips')!)
          : null,
    };
  },
  methods: {},
  emit: {
    prova() {
      console.log('prova');
    },
  },
});
</script>
