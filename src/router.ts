import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Sponsor from './views/Sponsor.vue';
import Contact from './views/Contact.vue';


export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  // {
  //   path: '/sponsors',
  //   name: 'Sponsors',
  //   component: Sponsor,
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact,
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
