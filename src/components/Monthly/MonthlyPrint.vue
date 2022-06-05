<script setup lang="ts">
import { defineComponent } from 'vue';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
</script>

<template>
  <button @click="print()">Print {{ $props.month }}</button>
</template>

<script lang="ts">
export default defineComponent({
  props: ['month'],
  data() {
    return {
      docDefinition: {
        content: [
          { text: 'Spesenabrechnung', style: 'header' },
          'No styling here, this is a standard paragraph',
          { text: 'Another text', style: 'anotherStyle' },
          { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] }
        ],
      styles: {
          header: {
            fontSize: 22,
            bold: true
          },
          anotherStyle: {
            italics: true,
            alignment: 'right'
          }
        }
      }


    }
  }

  ,
  methods: {
    print() {
      pdfMake.createPdf(this.docDefinition).download();
    }
  }
});
</script>
