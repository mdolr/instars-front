import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import GAuth from 'vue3-google-oauth2';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import Layout from '@/layouts/Layout.vue';

const GOOGLE_OAUTH2_OPTIONS = {
  clientId: '686379466324-7o0c06ugjblu86r0f8f7fdd7dpesji5h.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: true,
  ux_mode: 'redirect',
  redirect_uri: 'https://localhost:8080/auth/google/callback',
};

loadFonts();

createApp(App) //
  .component('layout', Layout)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(GAuth, GOOGLE_OAUTH2_OPTIONS)
  .mount('#app');
