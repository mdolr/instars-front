import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import Layout from '@/layouts/Layout.vue';

loadFonts();

createApp(App).component('layout', Layout).use(router).use(store).use(vuetify).mount('#app');
