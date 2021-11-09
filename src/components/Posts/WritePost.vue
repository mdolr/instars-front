<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-card-text style="height: 100px; position: absolute; right: 40px; bottom: 40px">
        <v-btn
          color="primary"
          rounded
          absolute
          bottom
          left
          dark
          elevation="2"
          class="white--text writeArticleButton"
          fab
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
        >
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
      </v-card-text>
    </template>
    <v-row justify="center">
      <v-card class="py-2">
        <v-card-title>
          <div class="text-h5 text-center">Publish a photo</div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row  max-width="1000" style="width: 600px">
              <v-col cols="10" sm="10" md="4">
                <v-text-field @input="LinkPicture" label="Picture's Link" v-model="Link" required> </v-text-field>
                <v-text-field label="Comment" required> </v-text-field>
              </v-col>
              <v-col cols="1" sm="4" md="4">
                <v-img
                  max-height="100px"
                  max-width="200px"
                  :src="previewPic"
                  style="background-color: black; width: 300px; height: 300px"
                ><div style="color:white">Preview</div></v-img>
                <div style="display: flex; flex-direction: row; align-items: center">
                  <div>
                    <v-avatar class="" color="grey darken-1" size="36"></v-avatar>
                  </div>
                  <h3 class="ml-2">Maxime</h3>
                  <span class="ml-2">@mdolr</span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false"> Publish </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-dialog>
</template>
<style scoped>
/* This is for documentation purposes and will not be needed in your application */
</style>
<script>
export default {
  data() {
    return {
      dialog: false,
      previewPic: 'none',
    };
  },

  methods: {
    LinkPicture() {
      this.$nextTick(() => {
        this.previewPic = this.Link;
      });
    },
  },
};
</script>