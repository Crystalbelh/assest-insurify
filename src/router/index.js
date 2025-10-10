import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'

import ContactUs from '@/views/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
    },

    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
  ],
})

export default router
