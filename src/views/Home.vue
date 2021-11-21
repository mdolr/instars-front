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
      <div class="posts-container" v-if="posts.length > 0">
        <TimelinePost v-for="post in posts" :key="post.id" :data="post" />
      </div>
      <div class="posts-container" style="text-align: center" v-else>
        <br />
        <h4 style="color: grey; font-weight: 400">
          It looks like your timeline is emptier than space :(<br />
          You should <strong>explore</strong> some more to find new posts!
        </h4>
        <v-btn tag="router-link" to="/explore" class="mt-2" style="color: white; background-color: rgb(23, 25, 35)">
          <!--@click="logIn"-->
          <Observatory />&nbsp;Explore
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Satellite from '@/components/CustomIcon/Satellite.vue';
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';
import { mapGetters } from 'vuex';
import Observatory from '@/components/CustomIcon/Observatory.vue';
import TimelinePost from '@/components/Posts/TimelinePost.vue';

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Satellite,
    TimelinePost,
    Observatory,
  },

  data() {
    return {
      file: null,
      description: '',
      before: '',
      after: '',
      posts: [],
    };
  },

  async mounted() {
    if ((this as any).isLoggedIn()) {
      const data = await this.getPosts('');

      if (data?.items?.length) {
        (this as any).posts = data.items;
        (this as any).before = data.previous;
        (this as any).after = data.next;
      }
    } else {
      (this as any).$router.push('/');
    }

    this.scrollDetector();
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

    scrollDetector() {
      let fetching = false;
      window.onscroll = async () => {
        let bottomOfWindow =
          Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow && !fetching) {
          fetching = true;
          try {
            const data = await this.getPosts((this as any)?.after);

            if (data?.items?.length) {
              // merge (this as any).posts with data.items
              (this as any).posts = [...(this as any).posts, ...data.items];
              (this as any).before = data.previous;
              (this as any).after = data.next;
            }

            fetching = false;
          } catch (e) {
            fetching = false;
            console.error(e);
          }
        }
      };
    },

    async getPosts(after: string) {
      const res = await axios.get(`/timeline${after ? '?after=' + after : ''}`);

      if ((res as any)?.data?.items) {
        return (res as any)?.data;
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
