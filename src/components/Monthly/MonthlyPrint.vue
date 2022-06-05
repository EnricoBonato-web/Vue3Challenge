<script setup lang="ts">
import { defineComponent } from 'vue';
import * as pdfMake from "pdfmake/build/pdfmake";

</script>

<template>
  <button @click="print()">Print {{ $props.month }}</button>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  data() {
    return { docDefinition: {} }
  },
  methods: {
    print() {
      pdfMake.createPdf(this.docDefinition).download();
    }
  }
});
</script>
