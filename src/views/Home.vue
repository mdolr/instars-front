<template>
  <v-container align="center" justify="center">
    <div style="height: 300px; width: 500px">
      <TimelinePost />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    TimelinePost,
  },
});
</script>
