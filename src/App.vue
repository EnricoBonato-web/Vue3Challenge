<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import MonthlyRecap from '@/components/Monthly/MonthlyRecap.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld v-show="$route.name == 'home'" msg="You did it!" />
      <nav :class="$route.name !== 'home' ? 'column' : ''">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/expense">Add Expense </RouterLink>
        <RouterLink to="/trip">Add Trip</RouterLink>
        <RouterLink to="/monthlyrecap">View and print Recap</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
}
</style>
