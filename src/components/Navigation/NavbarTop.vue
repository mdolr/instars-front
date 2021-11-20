<template>
  <v-app-bar app fixed color="black">
    <v-container class="py-0 fill-height d-flex align-center">
      <div>
        <v-btn icon>
          <!--@click="logIn"-->
          <v-icon color="white"> mdi-home </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-magnify </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-clock </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-account </v-icon>
        </v-btn>
      </div>
      <div v-if="!isLoggedIn()" class="mr-2 d-flex flex-column ml-auto text-right" id="login-top"></div>
      <div v-else style="display: flex; margin-left: auto; align-items: center">
        <div class="mr-2 d-flex flex-column ml-auto text-right">
          <span style="color: white">{{ getUser().name }}</span
          ><span style="color: lightgrey; font-size: 12px; margin-top: -6px">@{{ getUser().handle }}</span>
        </div>
        <v-avatar class="mr-1 0" color="grey darken-1" size="32">
          <img :src="getUser().pictureURL" alt="Profile picture"
        /></v-avatar>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar__content .v-btn {
  background-color: transparent !important;
}

.v-app-bar__content .v-btn::before {
  border: none !important;
  box-shadow: none !important;
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
        document.getElementById('login-top'),
        { theme: 'outline', size: 'large' }, // customization attributes
      );

      // window.google.accounts.id.prompt();
    }
  },

  methods: {
    ...mapActions(['login']),
    ...mapGetters(['isLoggedIn', 'getUser']),
  },
});
</script>
