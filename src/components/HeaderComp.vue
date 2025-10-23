<template>
  <header
    class="fixed w-full bg-white shadow-md z-50 transition-all duration-300"
    :class="{ 'py-2': scrolled, 'py-4': !scrolled }"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img :src="Logo" width="200px" />
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-secondary">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <!-- Use router-link with named routes -->
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="{ name: item.id }"
          class="text-secondary font-medium hover:text-primary transition-colors duration-300"
          :class="{ 'text-primary': activeSection === item.id }"
        >
          {{ item.name }}
        </router-link>

        <!-- External absolute URL button -->
        <a href="https://app.assetsinsurify.com/register" target="_blank" rel="noopener">
          <button
            class="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </a>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white py-4 px-4 shadow-lg">
      <nav class="flex flex-col space-y-4">
        <router-link
          v-for="item in navItems"
          :key="item.id"
          :to="{ name: item.id }"
          class="text-secondary font-medium hover:text-primary transition-colors duration-300"
          :class="{ 'text-primary': activeSection === item.id }"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>

        <a href="https://app.assetsinsurify.com/register" target="_blank" rel="noopener">
          <button
            class="bg-primary text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Logo from '../../public/images/Assets-logo.png'
import { ref, onMounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('about')

// ✅ Nav IDs correspond to named routes in router/index.js
const navItems = ref([
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  { id: 'contact', name: 'Contact Us' },
])

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>

<style scoped>
.text-primary {
  color: #7cbe3f;
}

.bg-primary {
  background-color: #7cbe3f;
}

.border-primary {
  border-color: #7cbe3f;
}

.text-secondary {
  color: #1c3452;
}

.bg-secondary {
  background-color: #1c3452;
}

.border-secondary {
  border-color: #1c3452;
}

html {
  scroll-behavior: smooth;
}

.transition-opacity {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 30s linear infinite;
  width: max-content;
}
</style>
