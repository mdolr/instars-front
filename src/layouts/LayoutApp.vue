<template>
  <div>
    <Navbar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
