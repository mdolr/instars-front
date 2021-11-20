<template>
  <v-card elevation="2" class="mt-10" style="border-radius: 12px; background-color: rgb(23, 25, 35); color: white">
    <div style="display: flex; flex-direction: column; align-items: center">
      <div style="background-color: black; width: 100%; display: flex; justify-content: center">
        <img :src="data.mediaURL" style="background-color: black; min-width: 100%" />
      </div>
      <v-divider style="width: 100%" />

      <div style="padding: 12px 24px 24px 24px; display: flex; align-items: start; flex-direction: column; width: 100%">
        <div>
          <p style="text-align: left">
            {{ data.description }}
          </p>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; width: 100%" class="mt-4">
          <img :src="data.author.pictureURL" height="36" width="36" style="border-radius: 50%" />
          <div style="display: flex; flex-direction: column">
            <h4 class="ml-2" style="margin-bottom: -6px">{{ data.author.name }}</h4>
            <span class="ml-2" style="color: grey; font-size: 12px">@{{ data.author.handle }}</span>
          </div>
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
import axios from '@/plugins/axios';

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    async likePost() {
      const res = await axios.post(`/posts/${(this as any).data.id}/likes`);
      console.log(res);
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
</style>
