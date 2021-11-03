<template>
  <v-app-bar app fixed color="purple">
    <v-container class="py-0 fill-height d-flex align-center">
      <div>
        <v-btn icon @click="logIn">
          <v-icon color="white"> mdi-home </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-magnify </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-clock </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="white"> mdi-account </v-icon>
        </v-btn>
      </div>
      <div class="mr-2 d-flex flex-column ml-auto text-right">
        <span style="color: white">Maxime</span
        ><span style="color: lightgrey; font-size: 12px; margin-top: -6px">@m_dolr</span>
      </div>
      <v-avatar class="mr-1 0" color="grey darken-1" size="32"></v-avatar> </v-container
  ></v-app-bar>
</template>

<style scoped>
.v-app-bar__content .v-btn {
  background-color: transparent !important;
}

.v-app-bar__content .v-btn::before {
  border: none !important;
  box-shadow: none !important;
}
</style>

<script lang="ts">
export default {
  methods: {
    async logIn(): Promise<any> {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log('googleUser', googleUser);
        let user = googleUser.getBasicProfile().getEmail();
        console.log('getId', user);
        console.log('getBasicProfile', googleUser.getBasicProfile());
        console.log('getAuthResponse', googleUser.getAuthResponse());
        console.log('getAuthResponse', this.$gAuth.instance.currentUser.get().getAuthResponse());
        return googleUser;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
  },
};
</script>
