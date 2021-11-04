<template>
  <div>
    <v-container justify="center" align="center">
      <div>
        <v-text-field prepend-inner-icon="mdi-magnify" label="Search" color="purple" hide-details="auto" />
      </div>
      <div class="mt-8">
        <ProfileCard />
      </div>
    </v-container>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import ProfileCard from '@/components/Profile/ProfileCard.vue';
export default { components: { ProfileCard } };
</script>
