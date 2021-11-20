import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Settings from '../views/Settings.vue';
import Landing from '../views/Landing.vue';
import Explore from '../views/Explore.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: { layout: 'LayoutApp' },
  },
  {
    path: '/home',
    name: 'Home',
    meta: { layout: 'LayoutApp' },
    component: Home,
  },
  {
    path: '/explore',
    name: 'Explore',
    meta: { layout: 'LayoutApp' },
    component: Explore,
  },
  {
    path: '/:profile_handle',
    name: 'Profile',
    meta: { layout: 'LayoutApp' },
    component: Profile,
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: { layout: 'LayoutApp' },
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
