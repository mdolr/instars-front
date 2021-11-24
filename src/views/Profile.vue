<template>
  <v-container justify="center" align="center" style="margin-top: 12px">

    <div class="mt-5" style="display: flex; flex-direction: row; align-items: start; justify-content: center">
      <div style="display: flex; flex-direction: row; align-items: start">
        <v-img
          :lazy-src="this.user.pictureURL"
          max-height="96px"
          max-width="96px"
          :src="this.user.pictureURL"
          style="border-radius: 50%; height: 96px; width: 96px; border: solid 0.01em black;"
        ></v-img>
      </div>
      <div class="ml-4" style="display: flex; flex-direction: column; align-items: start">
        <div style="display: flex; flex-direction: column; align-items: start; text-align: start;">
          <h1 style="margin-bottom: -8px">{{this.user.name}}</h1>
          <span class="text-grey-darken-3">@{{this.user.handle}}</span>
        </div>
        <div
          class="account-stats mt-2"
          style="display: flex; flex-direction: row; align-items: center; justify-content: start"
        >
        <div class="account-buttons">
          <v-btn size="small">
            Follow
          </v-btn>
        </div>
        <span><v-icon small>mdi-account-group</v-icon> {{this.user.followers}} Followers</span>
        </div>
      </div>
    </div>

    <br />
    <v-divider />
    <br />
    <div class="account-posts">
      <ProfilePost v-for="post in posts" :key="post.id" :data="post" />
    </div>
  </v-container>
</template>

<style scoped>
*{
  color: white;
}

h1 {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;    
}

.account-stats span {
  margin-left: 12px;
  display: inline-block;
}

.account-buttons .v-btn::before {
  box-shadow: none;
  border: none;
}

.account-buttons .v-btn {
  color: black;
}

.account-buttons .v-btn .v-icon {
  color: black;
}

.account-posts {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap:20px;
  padding: 20px;
}

.account-posts .v-card {
  object-fit: cover;
  width: 100%;
}

@media (min-width: 600px) {
  .account-posts { grid-template-columns: repeat(2, 1fr); }

  h1 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
  }
}

@media (min-width: 900px) {
  .account-posts { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1600px) {
  .account-posts { grid-template-columns: repeat(5, 1fr); }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import ProfilePost from '@/components/Posts/ProfilePost.vue';
import axios from '@/plugins/axios';

export default defineComponent({
  name: 'Home',

  components: {
    ProfilePost,
  },

  data() {
    return {
      user: "",
      posts: [] as any,
    };
  },
  
  watch:{
      $route (){//Update profile on route change
        this.loadProfile();
      }
  },

  async mounted() {
      if ((this as any).isLoggedIn()) {
        this.loadProfile();
      } else {
        (this as any).$router.push('/');
      }
    },

  methods: {
    ...mapActions(['login', 'logout']),
    ...mapGetters(['isLoggedIn', 'getUser']),

    async loadProfile(){
        if(this.$route.params.profile_handler === "me") {
          this.user = this.getUser()
        }

        else if(this.$route.params.profile_handler){
          this.user = await this.getUserId(this.$route.params.profile_handler as string);
        }

        this.posts = await this.getUserPosts(this.user);
    },

    async getUserId(handle: string) {
      const data = await axios.get(`/users/handle/${handle}`);
      return data.data;
    },

    async getUserPosts(user: any) {
      const data = await axios.get(`/posts/${user.id}`);
      return data.data.items;
    },
  }
});
</script>
