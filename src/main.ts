import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import Layout from '@/layouts/Layout.vue';
import firebase from 'firebase/compat/app';
import { loadFonts } from './plugins/webfontloader';

console.log('DJAZIODJZAIOJDIOAZ');
loadFonts();

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDlvGzcXRl5JvNAPg3G29MwLezKfPSzv6w',
  authDomain: 'u-flow.firebaseapp.com',
  projectId: 'u-flow',
  storageBucket: 'u-flow.appspot.com',
  messagingSenderId: '686379466324',
  appId: '1:686379466324:web:8d1ad41ade1406c62677c1',
};

console.log('DOJAZPDOPZAJODPZAJPDJZAOP');
const app = firebase.initializeApp(FIREBASE_CONFIG);

console.log(app);
console.log('JDPAZJOFEZJPFEOPZ');

createApp(App) //
  .component('layout', Layout)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');

export { app };
