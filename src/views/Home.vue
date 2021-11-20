<template>
  <v-container align="center" justify="center">
    <div class="timeline-container">
      <div class="new-post-container">
        <textarea class="message-input" placeholder="Send your thoughts to space!"></textarea>
        <div class="buttons">
          <input type="file" id="fileInput" />
          <v-btn tag="label" for="fileInput" style="color: white">
            <!--@click="logIn"-->
            <v-icon>mdi-paperclip</v-icon>&nbsp;Attachment
          </v-btn>

          <v-btn style="color: white; background-color: black">
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

//import TimelinePost from '@/components/Posts/TimelinePost.vue';

export default defineComponent({
  name: 'Home',

  components: {
    Satellite,
    //TimelinePost,
  },

  methods: {},
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
