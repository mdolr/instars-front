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

  mounted() {
    (this as any).GoogleOAuth = document.createElement('script');
    (this as any).GoogleOAuth.setAttribute('src', 'https://accounts.google.com/gsi/client');
    (this as any).GoogleOAuth.defer = true;
    (this as any).GoogleOAuth.async = true;
    (this as any).GoogleOAuth.onload = () => (this as any).initGoogleOAuth();
    document.head.appendChild((this as any).GoogleOAuth);

    if (localStorage.getItem('token')) {
      try {
        const token = JSON.parse((localStorage as any).getItem('token'));
        this.login({ credential: token });
      } catch (e) {
        console.error(e);
      }
    }
  },

  methods: {
    ...mapActions(['login']),
    initGoogleOAuth() {
      if (
        window &&
        window.google &&
        window.google.accounts &&
        !((window as any).document.getElementById('login-button').childNodes.length > 0)
      ) {
        window.google.accounts.id.initialize({
          client_id: '284772421623-8klntslq83finkqcgee2d3bi08rj7kt0.apps.googleusercontent.com',
          ux_mode: 'popup',
          callback: this.login,
          scope: 'profile email',
        });

        setTimeout(() => {
          console.log('Rendering Google Auth button');
          window.google.accounts.id.renderButton(
            document.getElementById('login-button'),
            { theme: 'outline', size: 'large' }, // customization attributes
          );
          console.log("Button rendered, refresh your browser if you can't see it");
        }, 200);

        // window.google.accounts.id.prompt();
      }
    },
  },

  data() {
    return {
      GoogleOAuth: null,
    };
  },
});
</script>

<style></style>
