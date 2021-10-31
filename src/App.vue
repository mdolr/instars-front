<template>
  <layout>
    <router-view />
  </layout>
  <!--v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>-->
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
