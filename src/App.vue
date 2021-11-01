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

export default defineComponent({
  components: { Layout },
  name: 'App',

  data() {
    return {
      //
    };
  },
});
</script>
