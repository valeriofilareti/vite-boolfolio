import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import About from './pages/About.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})


export {router};