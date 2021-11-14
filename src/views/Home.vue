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

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    //TimelinePost,
  },

  methods: {},
});
</script>
