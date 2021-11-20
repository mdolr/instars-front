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
    </div>
  </v-container>
</template>

<script lang="ts">
import Satellite from '@/components/CustomIcon/Satellite.vue';
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Satellite,
    //TimelinePost,
  },

  data() {
    return {
      file: null,
      description: '',
    };
  },

  computed: {},

  methods: {
    updateFile(e: any) {
      if (e?.target?.files?.[0]) {
        this.file = e.target.files[0];
      } else {
        this.file = null;
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

          console.log(post);

          if ((post as any)?.data?.uploadURL) {
            await fetch((post as any)?.data?.uploadURL, {
              method: 'PUT',
              headers: {
                'Content-Type': 'image/png',
              },
              body: this.file,
            });

            console.log('SUCCESSSS!!!!!');
          }
        } catch (e) {
          console.error(e);
        }
      }
      /*const url = (await axios.get(`/signedURL?fileName=${'KEKW'}.png`)).data;

      const fileInput = document.getElementById('fileInput');
      const file = (fileInput as any).files[0];

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/png',
        },
        body: file,
      });*/
    },
  },
});
</script>

<style scoped>
input[type='file'] {
  display: none;
}

.timeline-container {
  height: 100vh;
  text-align: left;
  padding: 0px 14px 0px 14px;
}

.new-post-container {
  width: 100%;
  height: 180px;
  border-radius: 12px;
  background-color: rgb(23, 25, 35);
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.new-post-container .message-input {
  width: 100%;
  height: 130px;
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
</style>
