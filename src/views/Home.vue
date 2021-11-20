<template>
  <v-container align="center" justify="center">
    <div class="timeline-container">
      <div class="new-post-container">
        <textarea v-model="description" class="message-input" placeholder="Send your thoughts to space!"></textarea>

        <div class="buttons">
          <input type="file" id="fileInput" @change="updateFile" />
          <v-btn tag="label" for="fileInput" style="color: white">
            <!--@click="logIn"-->
            <v-icon>mdi-paperclip</v-icon>&nbsp;{{ file ? file.name : 'Attach' }}
          </v-btn>

          <v-btn @click="createPost" style="color: white; background-color: black">
            <!--@click="logIn"-->
            <Satellite />&nbsp;Broadcast
          </v-btn>
        </div>
      </div>
      <div class="posts-container">
        <TimelinePost v-for="post in posts" :key="post.id" :data="post" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Satellite from '@/components/CustomIcon/Satellite.vue';
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';
import { mapGetters } from 'vuex';
import TimelinePost from '@/components/Posts/TimelinePost.vue';

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Satellite,
    TimelinePost,
  },

  data() {
    return {
      file: null,
      description: '',
      topTimestamp: new Date().getTime(),
      botTimestamp: new Date().getTime(),
      posts: [],
    };
  },

  async mounted() {
    if ((this as any).isLoggedIn()) {
      (this as any).posts = await this.getPosts();
    } else {
      (this as any).$router.push('/');
    }
  },

  computed: {},

  methods: {
    ...mapGetters(['isLoggedIn', 'getUser']),

    updateFile(e: any) {
      if (e?.target?.files?.[0]) {
        this.file = e.target.files[0];
      } else {
        this.file = null;
      }
    },

    async getPosts() {
      const res = await axios.get('/timeline');

      if ((res as any)?.data?.items) {
        return (res as any)?.data?.items;
      }
    },

    async createPost() {
      if (this.file && this?.description.length > 0) {
        try {
          const post = await axios.post('/posts', {
            fileName: (this as any).file.name,
            fileType: (this as any).file.type,
            description: this.description,
          });

          if ((post as any)?.data?.uploadURL) {
            await fetch((post as any)?.data?.uploadURL, {
              method: 'PUT',
              headers: {
                'Content-Type': 'image/png',
              },
              body: this.file,
            });

            await axios.post(`/posts/${(post as any)?.data?.id}/publish`);
          }
        } catch (e) {
          console.error(e);
        }
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
