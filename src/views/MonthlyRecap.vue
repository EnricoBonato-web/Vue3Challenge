<script setup lang="ts">
import MonthlyRecap  from "@/components/Monthly/MonthlyRecap.vue"
</script>

<template>
  <div class="about">
    <MonthlyRecap/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
