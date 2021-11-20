<template>
  <v-bottom-navigation grow bg-color="black">
    <v-btn> <v-icon>mdi-home</v-icon><span>Home</span> </v-btn>
    <v-btn> <v-icon>mdi-clock</v-icon><span>Timelapse</span> </v-btn>
    <v-btn> <v-icon>mdi-magnify</v-icon> <span>Search</span> </v-btn>
    <v-btn v-if="!isLoggedIn()"><div id="login-bottom"></div></v-btn>
    <v-btn v-else> <v-icon>mdi-account</v-icon> <span>Profile</span> </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.v-bottom-navigation__content .v-btn {
  color: white;
  background-color: transparent;
  opacity: 1;
  width: 25%;
  max-width: 168px;
}

.v-bottom-navigation__content .v-btn::before {
  border: none;
  box-shadow: none;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

declare global {
  interface Window {
    google: any;
  }
}

window.google = window.google || {};

export default defineComponent({
  mounted() {
    if (window && window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '284772421623-8klntslq83finkqcgee2d3bi08rj7kt0.apps.googleusercontent.com',
        ux_mode: 'popup',
        callback: this.login,
        scope: 'profile email',
      });

      window.google.accounts.id.renderButton(
        document.getElementById('login-bottom'),
        { theme: 'outline', size: 'large', type: 'icon' }, // customization attributes
      );

      // window.google.accounts.id.prompt();
    }
  },

  methods: {
    ...mapActions(['login']),
    ...mapGetters(['isLoggedIn']),
  },
});
</script>
