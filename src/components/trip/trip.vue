<script setup lang="ts">
import { defineComponent } from 'vue';
import VueFormWizard from '@anivive/vue3-form-wizard';
import wizardQuestions from './tripQuestions.json';
import '../../assets/form.css';
import type TripType from '@/type/TripType';
import LocalStorageVar from '@/type/LocalStorageVar';
</script>

<template >
  <h1>Insert trip</h1>
  <h3 class="success" v-if="success">Trip inserted successfully</h3>
  <vue-form-wizard :key="reload" :form="wizardQuestions" v-model="formData" @submit="handleForm(formData)" />
</template>

<script lang="ts">
export default defineComponent({
  methods: {
    handleForm(data: any) {
      const tripBuild: TripType[] = [
        {
          id: '' + Math.ceil(Math.random() * 1000000),
          purpose: data.question1.value,
          startTime: data.question2.value,
          endTime: data.question3.value,
          startLocation: data.question4.value,
          endLocation: data.question5.value,
          kilometersTravelled: data.question6.value,
          overnight: data.question7.value,
          breakfasts: data.question8.value,
          lunches: data.question9.value,
          dinners: data.question10.value,
        },
      ];
      if (localStorage.getItem(LocalStorageVar.TRIPS) !== '') {
        const trips: TripType[] = JSON.parse(localStorage.getItem(LocalStorageVar.TRIPS)!);
        trips.push(tripBuild[0]);
        localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(trips));
      } else localStorage.setItem(LocalStorageVar.TRIPS, JSON.stringify(tripBuild));
      this.formData = [];
      this.success = true;
      this.reload = !this.reload;// used to reload
    },
  },
  data() {
    return {
      success: false,
      reload: false,
      formData: [] as any,
      wizardQuestions: wizardQuestions,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
