import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactUs from '@/views/ContactUs.vue'
import Services from '@/views/OurServices.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsServices from '@/views/TermsServices.vue'

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
      name: 'contact',
      component: ContactUs,
      meta: { title: 'Contact Us | Assets Insurify' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: { title: 'About Us | Assets Insurify' },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
      meta: { title: 'Privacy Policy | Assets Insurify' },
    },
        {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TermsServices,
      meta: { title: 'Terms of Service | Assets Insurify' },
    },
    {
      path: '/auth/login',
      name: 'login',
      beforeEnter() {
        window.location.href = 'https://app.assetsinsurify.com/login'
      },
      meta: { title: 'Login | Assets Insurify' },
    },
    {
      path: '/auth/register',
      name: 'register',
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
