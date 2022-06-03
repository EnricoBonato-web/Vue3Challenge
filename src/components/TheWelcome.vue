<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
import type TripType from '@/type/TripType';
import DummyTrips from './trip/DummyTrips';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>. The recommended IDE
    setup is <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>. If you need to test
    your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a href="https://docs.cypress.io/guides/component-testing/introduction" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Dummy Data</template>

    Get official tools and libraries for your project:
    <form @submit="Add($event)">
      <button type="submit" :disabled="DataAdded">Add Dummy Trips</button>
    </form>
    <form @submit="Remove($event)">
      <button type="submit" :disabled="!DataAdded">Remove Dummy Trips</button>
    </form>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
    You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>
<script lang="ts">
export default {
  name: 'ExpenseTrip',
  data() {
    return {
      DataAdded:
        localStorage.getItem('trips') !== undefined
          ? localStorage.getItem('trips')!.length > 0
            ? true
            : false
          : false,
    };
  },
  methods: {
    Add(e: Event) {
      e.preventDefault();
      const data: TripType[] = DummyTrips;
      localStorage.setItem('trips', JSON.stringify(data));
      this.DataAdded = !this.DataAdded;
    },
    Remove(e: Event) {
      e.preventDefault();
      localStorage.setItem('trips', '');
      this.DataAdded = !this.DataAdded;
    },
  },
};
</script>
