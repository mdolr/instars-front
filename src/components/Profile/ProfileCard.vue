<template>
  <v-card elevation="2">
    <v-container justify="center" align="center" style="margin-top: 12px">
      <div style="display: flex; flex-direction: column">
        <div style="display: flex; flex-direction: row; align-items: center">
          <div>
            <v-avatar class="" color="grey darken-1" size="64"></v-avatar>
          </div>

          <div style="display: flex; flex-direction: column">
            <div style="display: flex; flex-direction: row; align-items: center">
              <h3 class="ml-2">Maxime</h3>
              <span class="ml-2">@maxime.dolores</span>
            </div>
            <div class="account-stats" style="display: flex; flex-direction: row">
              <span class="ml-2" style="font-size: 15px"><v-icon x-small>mdi-camera</v-icon> 323 </span>
              <span class="ml-2" style="font-size: 15px"><v-icon small>mdi-account-group</v-icon> 127 000 </span>
              <span class="text-purple ml-2" style="font-size: 15px"
                ><v-icon x-large color="purple">mdi-calendar-multiple-check</v-icon> <strong>PERFECT!</strong></span
              >
            </div>
          </div>
        </div>

        <div
          class="account-buttons"
          style="display: flex; flex-direction: row; justify-content: space-evenly; width: 100%"
        >
          <v-btn><v-icon>mdi-account-plus</v-icon>Follow</v-btn>
          <v-btn><v-icon>mdi-clock</v-icon>Timelapse</v-btn>
          <v-btn><v-icon>mdi-share</v-icon>Share</v-btn>
        </div>
      </div>

      <v-divider />
      <br />
      <div class="account-posts">
        <ProfilePost v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="n" />
      </div>
    </v-container>
  </v-card>
</template>
<style scoped>
.v-btn {
  width: 33%;
}
</style>

<script lang="ts"></script>
