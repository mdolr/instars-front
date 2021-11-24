<template>
  <v-container justify="center" align="center" style="margin-top: 12px">
    <div style="margin: auto; width: 100%; max-width: 600px">
      <div style="display: flex; flex-direction: row; align-items: start; justify-content: center">
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
          <div style="display: flex; flex-direction: row; align-items: end">
            <h1 style="margin-bottom: -8px">{{this.user.name}}</h1>
            <span class="text-grey-darken-3 ml-2">@{{this.user.handle}}</span>
          </div>
          <div
            class="account-stats"
            style="margin-left: -12px; display: flex; flex-direction: row; align-items: center; justify-content: start"
          >
            <span><v-icon small>mdi-account-group</v-icon> {{this.user.followers}} Followers</span>
            <div class="account-buttons">
              <v-btn
                size="small"
                icon="mdi-account-plus"
              />
            </div>
          </div>
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

.account-stats span {
  margin-left: 12px;
  display: inline-block;
}

.account-buttons .v-btn::before {
  box-shadow: none;
  border: none;
}

.account-buttons .v-btn {
  margin-left: 6px;
  color: black;
}

.account-buttons .v-btn .v-icon {
  margin-right: 4px;
  color: black;
}

.account-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.account-posts > div {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
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
