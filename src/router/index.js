import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

import ContactUs from '@/views/ContactUs.vue'
import Services from '@/views/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
    },
  ],
})

export default router
