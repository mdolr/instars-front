<template>
  <v-card elevation="2" width="300px" style="border-radius: 6px">
    <div style="display: flex; flex-direction: column; align-items: center">
      <v-img
        lazy-src="https://pbs.twimg.com/media/FC_xR-taUAIXLk3.jpg:large"
        max-height="300px"
        max-width="300px"
        src="https://pbs.twimg.com/media/FC_xR-taUAIXLk3.jpg:large"
        style="height: 300px; width: 300px; background-color: black"
      ></v-img>

      <v-divider style="width: 100%" />

      <div style="padding: 12px 12px 12px 12px; display: flex; align-items: start; flex-direction: column; width: 100%">
        <div style="display: flex; flex-direction: row; align-items: center">
          <div>
            <v-avatar class="" color="grey darken-1" size="36"></v-avatar>
          </div>
          <h3 class="ml-2">Maxime</h3>
          <span class="ml-2">@mdolr</span>
        </div>

        <div
          style="
            display: flex;
            margin-top: 6px;
            align-items: start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 6px;
          "
        >
          <div>
            <v-icon style="font-size: 19px">mdi-calendar-month-outline</v-icon>
            <span style="font-size: 14px">January 1st 2021</span>
          </div>
          <div>
            <v-icon style="font-size: 19px">mdi-map-marker</v-icon> <span style="font-size: 14px">Paris, France</span>
          </div>
        </div>
        <div>
          <p style="text-align: left">
            Je me suis beaucoup amusé sur cette photo la description en fait même plusieurs lignes c'est incroyable
            !!!!!!!!
          </p>
        </div>
        <div
          style="margin-top: 6px; display: flex; justify-content: space-between; width: 100%"
          class="post-interactions-buttons"
        >
          <v-btn icon><v-icon style="font-size: 19px">mdi-heart</v-icon></v-btn>
          <v-btn icon><v-icon style="font-size: 19px">mdi-share</v-icon></v-btn>
          <v-btn icon><v-icon style="font-size: 19px">mdi-dots-horizontal</v-icon></v-btn>
        </div>
      </div>
    </div>
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
