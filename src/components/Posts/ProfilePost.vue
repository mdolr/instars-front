<template>
  <v-card elevation="2" style="border-radius: 12px; background-color: rgb(23, 25, 35); color: white">
    <div style="display: flex; flex-direction: column; align-items: center; height: 100%; width: 100%">
      <div style="background-color: black; width: 100%; height: 100%; display: flex; justify-content: center">
        <v-img
          cover
          :lazy-src="data.mediaURL"
          :src="data.mediaURL"
          style="height: 300px; background-color: black; min-width: 100%"
        />
      </div>
      <v-divider style="width: 100%" />

      <div style="padding: 12px 24px 24px 24px; display: flex; align-items: start; flex-direction: column; width: 100%">
        <div>
          <p style="text-align: left">
            {{ data.description }}
          </p>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; width: 100%" class="mt-4">
          <span color="grey" style="color: #808080; font-size: 12px"
            ><i>{{ formattedDate }}</i></span
          >
          <div style="margin-left: auto; align-items: center; display: flex">
            <span style="font-weight: 700">
              {{ data.likes }}&nbsp;<v-btn icon @click="likePost"
                ><v-icon
                  style="font-size: 1.3rem; display: flex; align-items: center"
                  :color="data.hasLiked ? 'orange' : 'lightgrey'"
                  >mdi-star</v-icon
                ></v-btn
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import moment from 'moment';
import axios from '@/plugins/axios';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    formattedDate(): string {
      return moment((this as any).data.createdAt).format('DD/MM/YYYY hh:mm:ss');
    },
  },

  methods: {
    async likePost(): Promise<boolean> {
      const res = await axios.post(`/posts/${(this as any).data.id}/likes`);

      (this as any).data.hasLiked = res.data.hasLiked;
      (this as any).data.likes = res.data.likes;
      return true;
    },
  },
};
</script>

<style scoped>
.v-btn--variant-contained::before,
.v-btn--variant-contained,
.v-btn--icon.v-btn--density-default {
  background-color: transparent !important;
  height: 19px;
  width: 19px;
}

.v-btn--variant-contained::before,
.v-btn--elevated:hover,
.v-btn--elevated:focus {
  border: none !important;
  box-shadow: none !important;
  margin: auto;
}

.v-img {
  max-height: 300px;
}
</style>
