<template>
  <v-card
    elevation="2"
    class="mt-10"
    style="background-color: rgb(23, 25, 35); color: white; border-radius: 12px; padding: 12px"
  >
    <v-container justify="center" align="center">
      <div style="display: flex; flex-direction: row; align-items: center; width: 100%">
        <img :src="data.pictureURL" height="36" width="36" style="border-radius: 50%" />
        <div class="ml-2" style="display: flex; flex-direction: column; text-align: left">
          <h4 style="margin-bottom: -6px">{{ data.name }}</h4>
          <span style="color: grey; font-size: 12px">@{{ data.handle }}</span>
        </div>
        <div style="margin-left: auto; align-items: center; display: flex">
          <span style="font-weight: 700">
            {{ data.followers }}&nbsp;<v-btn icon @click="followUser"
              ><v-icon
                style="font-size: 1.3rem; display: flex; align-items: center"
                :color="data.hasFollowed ? 'blue' : 'lightgrey'"
                >mdi-account</v-icon
              ></v-btn
            ></span
          >
        </div>
      </div>
    </v-container>
  </v-card>
</template>
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
    async followUser() {
      const res = await axios.post(`/follow/${(this as any).data.id}`);

      console.log((this as any).data.followers, res.data.followers);

      (this as any).data.hasFollowed = res.data.hasFollowed;
      (this as any).data.followers = res.data.followers;
      return true;
    },
  },
};
</script>
