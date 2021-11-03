<template>
  <v-container justify="center" align="center" style="margin-top: 12px">
    <v-img
      lazy-src="https://cdn.discordapp.com/attachments/556951502137065518/900806259228422154/drifterFace.PNG"
      max-height="128px"
      max-width="128px"
      src="https://cdn.discordapp.com/attachments/556951502137065518/900806259228422154/drifterFace.PNG"
      style="border-radius: 50%; height: 128px; width: 128px; border: solid 0.01em black"
    ></v-img>
    <h1 style="margin-bottom: -10px">Maxime</h1>
    <span class="text-grey-darken-3">@mdolr</span>
    <p style="margin-top: 10px">Description blablabla <br />zdjioazjdoiaz</p>

    <div class="account-stats" style="margin-top: 10px; display: block">
      <span><v-icon small>mdi-account-group</v-icon> 127 000 Followers</span><br />
      <span><v-icon x-small>mdi-camera</v-icon> 323 Pictures</span><br />
      <span class="text-purple"
        ><v-icon x-large color="purple">mdi-calendar-multiple-check</v-icon> <strong>PERFECT!</strong></span
      >
    </div>
    <br />
    <div class="account-buttons">
      <v-btn><v-icon>mdi-account-plus</v-icon>Follow</v-btn>
      <v-btn><v-icon>mdi-clock</v-icon>Timelapse</v-btn>
      <v-btn><v-icon>mdi-share</v-icon>Share</v-btn>
    </div>
    <br />
    <v-divider />
    <br />
    <div class="account-posts">
      <ProfilePost v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="n" />
    </div>
    <!--<ProfilePost v-for="posts in user.posts"/>-->
  </v-container>
</template>

<style scoped>
.account-stats span {
  margin-top: 4px;
  display: inline-block;
}

.account-buttons .v-btn::before {
  box-shadow: none;
  border: none;
}

.account-buttons .v-btn {
  margin-left: 6px;
}

.account-buttons .v-btn .v-icon {
  margin-right: 4px;
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
  margin-bottom: 24px;
}
</style>

<script lang="ts">
import ProfilePost from '@/components/Posts/ProfilePost.vue';

export default {
  components: {
    ProfilePost,
  },
};
</script>
