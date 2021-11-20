<template>
  <v-app>
    <layout>
      <router-view />
    </layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './layouts/Layout.vue';

export default defineComponent({
  components: { Layout },
  name: 'App',

  setup() {
    let GoogleOAuth = document.createElement('script');
    GoogleOAuth.setAttribute('src', 'https://accounts.google.com/gsi/client');
    GoogleOAuth.defer = true;
    GoogleOAuth.async = true;
    document.head.appendChild(GoogleOAuth);
  },

  data() {
    return {
      //
    };
  },
});
</script>

<style></style>
