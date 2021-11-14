<template>
  <div>
    <NavbarTop class="d-none d-md-flex" />
    <v-main>
      <slot />
    </v-main>
    <!--<WritePost />-->
    <NavbarBottom class="d-md-none" />
  </div>
</template>

<script lang="ts">
import NavbarTop from '@/components/Navigation/NavbarTop.vue';
import NavbarBottom from '@/components/Navigation/NavbarBottom.vue';
//import WritePost from '@/components/Posts/WritePost.vue';

export default {
  components: {
    NavbarTop,
    NavbarBottom,
    //WritePost,
  },
};
</script>

<style scoped>
@media (max-width: 959px) {
  .v-main {
    padding-top: 0px !important;
  }
}
</style>
