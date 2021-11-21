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
import { mapActions } from 'vuex';

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

  mounted() {
    if (localStorage.getItem('token')) {
      try {
        const token = JSON.parse((localStorage as any).getItem('token'));
        this.login({ credential: token });
      } catch (e) {
        console.error(e);
      }
    }
  },

  data() {
    return {
      //
    };
  },

  methods: {
    ...mapActions(['login']),
  },
});
</script>

<style></style>
