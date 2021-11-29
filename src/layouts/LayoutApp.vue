<template>
  <div style="background-color: black">
    <NavbarTop v-if="isLoggedIn()" class="d-none d-md-flex" />
    <v-main>
      <slot />
    </v-main>
    <!--<WritePost />-->
    <NavbarBottom v-if="isLoggedIn()" class="d-md-none" />
  </div>
</template>

<script lang="ts">
import NavbarTop from '@/components/Navigation/NavbarTop.vue';
import NavbarBottom from '@/components/Navigation/NavbarBottom.vue';
//import WritePost from '@/components/Posts/WritePost.vue';

import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    NavbarTop,
    NavbarBottom,
    //WritePost,
  },

  methods: {
    ...mapGetters(['isLoggedIn']),
  },
});
</script>

<style scoped>
.v-main {
  min-height: 100vh;
}

@media (max-width: 959px) {
  .v-main {
    padding-top: 0px !important;
  }
}
</style>
