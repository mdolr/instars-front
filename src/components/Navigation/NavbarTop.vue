<template>
  <v-app-bar v-if="isLoggedIn()" app fixed color="black">
    <v-container class="py-0 fill-height d-flex align-center">
      <div>
        <v-btn tag="router-link" to="/home" style="color: white">
          <!--@click="logIn"-->
          <Saturn />&nbsp;Home
        </v-btn>
        <v-btn tag="router-link" to="/explore" style="color: white">
          <!--@click="logIn"-->
          <Observatory />&nbsp;Explore
        </v-btn>
        <v-btn tag="router-link" :to="'/profile/'+getUser().handle"  style="color: white">
          <!--@click="logIn"-->
          <Astronaut />&nbsp;Profile
        </v-btn>

        <!--<v-btn icon>
          <v-icon color="white"> mdi-star </v-icon>
        </v-btn>-->
      </div>

      <div style="display: flex; margin-left: auto; align-items: center; padding-right: 6px">
        <div class="mr-2 d-flex flex-column ml-auto text-right">
          <span style="color: white">{{ getUser().name }}</span
          ><span style="color: lightgrey; font-size: 12px; margin-top: -6px">@{{ getUser().handle }}</span>
        </div>
        <v-avatar class="mr-1 0" color="grey darken-1" size="32">
          <img :src="getUser().pictureURL" alt="Profile picture"
        /></v-avatar>
        <v-btn @click="logout" icon="mdi-account-remove" style="color: white"> </v-btn>
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
import Astronaut from '../CustomIcon/Astronaut.vue';

export default defineComponent({
  components: { Saturn, Observatory, Astronaut },

  methods: {
    ...mapActions(['login', 'logout']),
    ...mapGetters(['isLoggedIn', 'getUser']),
  },
});
</script>
