<template>
  <v-bottom-navigation v-if="isLoggedIn()" grow bg-color="black">
    <v-btn tag="router-link" to="/home"> <Saturn /><span>Home</span> </v-btn>
    <v-btn tag="router-link" to="/explore"> <Observatory /><span>Explore</span> </v-btn>
    <v-btn tag="router-link" :to="'/profile/'+getUser().handle"> <Astronaut /><span>Profile</span> </v-btn>
    <v-btn @click="logout"> <v-icon>mdi-account-remove</v-icon><span>Log out</span> </v-btn>
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
import Observatory from '../CustomIcon/Observatory.vue';
import Saturn from '../CustomIcon/Saturn.vue';
import Astronaut from '../CustomIcon/Astronaut.vue';

export default defineComponent({
  components: { Observatory, Saturn, Astronaut },

  methods: {
    ...mapActions(['login', 'logout']),
    ...mapGetters(['isLoggedIn']),
  },
});
</script>
