<template>
  <v-container align="center" justify="center">
    <div style="height: 300px; width: 500px">
      <!--<TimelinePost />-->
    </div>
    <!--<div
      id="g_id_onload"
      data-client_id="686379466324-7o0c06ugjblu86r0f8f7fdd7dpesji5h.apps.googleusercontent.com"
      data-login_uri="https://localhost:3000/auth/google/callback"
      data-auto_prompt="true"
    ></div>-->
    <div id="buttonDiv"></div>
    <!--<div
      
      class="g_id_signin"
      data-type="standard"
      data-size="large"
      data-theme="outline"
      data-text="sign_in_with"
      data-shape="rectangular"
      data-logo_alignment="left"
    ></div>-->
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';

declare global {
  interface Window {
    google: any;
  }
}

window.google = window.google || {};
//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  mounted() {
    if (window && window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '284772421623-8klntslq83finkqcgee2d3bi08rj7kt0.apps.googleusercontent.com',
        ux_mode: 'popup',
        callback: this.login,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large', redirect_uri: 'http://localhost:3000/auth/callback' }, // customization attributes
      );

      // window.google.accounts.id.prompt();
    }
  },

  components: {
    //TimelinePost,
  },

  methods: {
    login: async (credentials: Record<string, unknown>) => {
      axios.defaults.headers.common = {
        Authorization: `Bearer ${credentials.credential}`,
      };

      console.log(credentials);
    },
  },
});
</script>
