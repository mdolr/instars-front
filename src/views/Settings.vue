<template>
  <v-container style="padding-top: 36px" align="center">
    <div style="display: flex; flex-direction: column">
      <!-- Profile picture -->
      <div style="display: flex; flex-direction: row; align-items: center">
        <v-avatar class="" color="grey darken-1" size="96"></v-avatar>
        <div class="ml-4" style="display: flex; flex-direction: column; align-items: start">
          <h3>Profile picture</h3>
          <span>Recommended size is 96x96 pixels</span>
        </div>
      </div>

      <!-- Settings -->
      <div class="mt-6">
        <v-form ref="form" lazy-validation>
          <v-text-field :counter="10" prepend-inner-icon="mdi-email" label="E-mail" required></v-text-field>

          <v-text-field label="Username" required></v-text-field>

          <v-text-field label="Handle" prepend-inner-icon="mdi-at" required></v-text-field>

          <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>

          <!--<v-checkbox :rules="['x' || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>-->

          <v-btn color="success" class="mr-4"> Validate </v-btn>

          <v-btn color="error" class="mr-4"> Reset Form </v-btn>

          <v-btn color="warning"> Reset Validation </v-btn>
        </v-form>
      </div>
    </div>
  </v-container>
</template>

<style scoped></style>

<script lang="ts">
export default {
  name: 'Settings',

  methods: {},
};
</script>
