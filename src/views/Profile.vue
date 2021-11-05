<template>
  <v-container justify="center" align="center" style="margin-top: 12px">
    <div style="margin: auto; width: 100%; max-width: 600px">
      <div style="display: flex; flex-direction: row; align-items: start; justify-content: center">
        <div style="display: flex; flex-direction: row; align-items: start">
          <v-img
            lazy-src="https://cdn.discordapp.com/attachments/556951502137065518/900806259228422154/drifterFace.PNG"
            max-height="96px"
            max-width="96px"
            src="https://cdn.discordapp.com/attachments/556951502137065518/900806259228422154/drifterFace.PNG"
            style="border-radius: 50%; height: 96px; width: 96px; border: solid 0.01em black"
          ></v-img>
        </div>
        <div class="ml-4" style="display: flex; flex-direction: column; align-items: start">
          <div style="display: flex; flex-direction: row; align-items: end">
            <h1 style="margin-bottom: -8px">Maxime</h1>
            <span class="text-grey-darken-3 ml-2">@mdolr</span>
          </div>
          <div
            class="account-stats"
            style="margin-left: -12px; display: flex; flex-direction: row; align-items: center; justify-content: start"
          >
            <span><v-icon small>mdi-account-group</v-icon> 127 000 Followers</span>
            <span><v-icon x-small>mdi-camera</v-icon> 323 Pictures</span>
            <span class="text-purple"
              ><v-icon x-large color="purple">mdi-calendar-multiple-check</v-icon> <strong>PERFECT!</strong></span
            >
          </div>
          <p style="text-align: left; margin-top: 6px">
            Mon super profil avec une description multi-ligne de folie que tout le monde adore lire avec une limite de
            280 caractères???
          </p>
        </div>
      </div>
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
  margin-left: 12px;
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
