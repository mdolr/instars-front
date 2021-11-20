<template>
  <v-container>
    <input type="file" id="fileInput" />
    <br /><br />
    <button @click="upload">send!</button>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/plugins/axios';

export default defineComponent({
  name: 'Upload',
  methods: {
    async upload() {
      console.log('Uploading....');
      const url = (await axios.get(`/signedURL?fileName=${'KEKW'}.png`)).data;

      const fileInput = document.getElementById('fileInput');
      const file = (fileInput as any).files[0];

      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/png',
        },
        body: file,
      });

      /*const res = await axios.post(url, {
        file: (<HTMLInputElement>document!.getElementById('fileInput'))['files']  [0]!,
      });*/
    },
  },
});
</script>

<style scoped></style>
