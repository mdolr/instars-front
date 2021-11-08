import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import Layout from '@/layouts/Layout.vue';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

createApp(App) //
  .component('layout', Layout)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');
