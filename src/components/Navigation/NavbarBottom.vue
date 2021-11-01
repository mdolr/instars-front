<template>
  <v-bottom-navigation grow bg-color="purple">
    <v-btn> <v-icon>mdi-home</v-icon><span>Home</span> </v-btn>
    <v-btn> <v-icon>mdi-clock</v-icon><span>Timelapse</span> </v-btn>
    <v-btn> <v-icon>mdi-magnify</v-icon> <span>Search</span> </v-btn>
    <v-btn> <v-icon>mdi-account</v-icon> <span>Profile</span> </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.v-bottom-navigation__content .v-btn {
  color: white;
  background-color: transparent;
  opacity: 1;
  width: 25%;
  max-width: 168px;
}

.v-bottom-navigation__content .v-btn::before {
  border: none;
  box-shadow: none;
}
</style>
