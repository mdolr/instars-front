<template>
  <v-app-bar app fixed color="black">
    <v-container class="py-0 fill-height d-flex align-center">
      <div>
        <v-btn tag="router-link" to="/home" style="color: white">
          <!--@click="logIn"-->
          <Saturn />&nbsp;Home
        </v-btn>
        <v-btn style="color: white">
          <!--@click="logIn"-->
          <Observatory />&nbsp;Explore
        </v-btn>

        <!--<v-btn icon>
          <v-icon color="white"> mdi-star </v-icon>
        </v-btn>-->
      </div>
      <div
        v-if="!isLoggedIn()"
        class="mr-2 d-flex flex-column ml-auto text-right"
        style="padding-right: 6px"
        id="login-top"
      ></div>
      <div v-else style="display: flex; margin-left: auto; align-items: center; padding-right: 6px">
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
import Observatory from '../CustomIcon/Observatory.vue';
import Saturn from '../CustomIcon/Saturn.vue';

declare global {
  interface Window {
    google: any;
  }
}

window.google = window.google || {};

export default defineComponent({
  components: { Saturn, Observatory },

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
