import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactUs from '@/views/ContactUs.vue'
import Services from '@/views/OurServices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home | Assets Insurify' },
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      meta: { title: 'Our Services | Assets Insurify' },
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs,
      meta: { title: 'Contact Us | Assets Insurify' },
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
      meta: { title: 'About Us | Assets Insurify' },
    },
    {
      path: '/auth/login',
      name: 'Login',
      beforeEnter() {
        window.location.href = 'https://app.assetsinsurify.com/login'
      },
      meta: { title: 'Login | Assets Insurify' },
    },
    {
      path: '/auth/register',
      name: 'Register',
      beforeEnter() {
        window.location.href = 'https://app.assetsinsurify.com/register'
      },
      meta: { title: 'Register | Assets Insurify' },
    },
  ],
})

// ✅ Set the document title dynamically
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Assets Insurify'
  next()
})

export default router
