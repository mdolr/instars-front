<template>
  <div>
    <NavbarTop class="d-none d-md-flex" />
    <v-main>
      <slot />
    </v-main>
    <NavbarBottom class="d-md-none" />
  </div>
</template>

<script lang="ts">
import NavbarTop from '@/components/Navigation/NavbarTop.vue';
import NavbarBottom from '@/components/Navigation/NavbarBottom.vue';

export default {
  components: {
    NavbarTop,
    NavbarBottom,
  },
};
</script>
