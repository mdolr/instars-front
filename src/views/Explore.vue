<template>
  <v-container align="center" justify="center">
    <div class="timeline-container">
      <div class="posts-container">
        <ProfileCard v-for="profile in profiles.filter(profile => profile.id != getUser().id)" :key="profile.id" :data="profile"/>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';
import { mapGetters } from 'vuex';
import ProfileCard from '@/components/Profile/ProfileCard.vue';

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    // Satellite,
    ProfileCard,
  },

  data() {
    return {
      file: null,
      description: '',
      topTimestamp: new Date().getTime(),
      botTimestamp: new Date().getTime(),
      profiles: [],
    };
  },

  async mounted() {
    if ((this as any).isLoggedIn()) {
      (this as any).profiles = await this.getProfiles();
    } else {
      (this as any).$router.push('/');
    }
  },

  computed: {},

  methods: {
    ...mapGetters(['isLoggedIn', 'getUser']),

    async getProfiles() {
      const res = await axios.get('/users/explore');

      if ((res as any)?.data?.items) {
        return (res as any)?.data?.items;
      }
    },
  },
});
</script>

<style scoped>
input[type='file'] {
  display: none;
}

.timeline-container {
  min-height: 100vh;
  text-align: left;
  padding: 0px 14px 0px 14px;
  max-width: 600px;
}

.new-post-container {
  width: 100%;
  min-height: 180px;
  border-radius: 12px;
  background-color: rgb(23, 25, 35);
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.new-post-container .message-input {
  width: 100%;
  height: 130px;
  min-height: 130px;
  resize: none;
  color: white;

  border: none;
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.new-post-container .buttons {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.new-post-container .buttons .v-btn {
  color: white;
  background-color: black;
}

/* media query max width 424px */
@media (max-width: 424px) {
  .new-post-container .buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .new-post-container .buttons .v-btn {
    margin-top: 12px;
  }
}
</style>
