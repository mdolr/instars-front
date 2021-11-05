import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Search from '../views/Search.vue';
import Settings from '../views/Settings.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'LayoutApp' },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: { layout: 'LayoutDefault' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:profile_handle',
    name: 'Profile',
    meta: { layout: 'LayoutApp' },
    component: Profile,
  },
  {
    path: '/search',
    name: 'Search',
    meta: { layout: 'LayoutApp' },
    component: Search,
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
