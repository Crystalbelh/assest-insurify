<template>
        <header class="fixed w-full bg-white shadow-md z-50 transition-all duration-300"
            :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
            <div class="container mx-auto px-4 flex justify-between items-center">
                <div class="flex items-center">
                    <!-- <div class="w-10 h-10 bg-primary rounded-full mr-3"></div>
                    <span class="text-xl font-bold text-secondary">Asset Insurify</span> -->
                    <img :src="Logo" width="200px">
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden text-secondary">
                    <i class="fas fa-bars"></i>
                </button>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex space-x-8">
                    <a v-for="item in navItems" :key="item.id" :href="item.href"
                        class="text-secondary font-medium hover:text-primary transition-colors duration-300"
                        :class="{ 'text-primary': activeSection === item.id }">
                        {{ item.name }}
                    </a>
                    <a href="/auth/register">
                      <button
                          class="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                          Get Started
                      </button>
                    </a>
                </nav>
            </div>

            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen" class="md:hidden bg-white py-4 px-4 shadow-lg">
                <nav class="flex flex-col space-y-4">
                    <a v-for="item in navItems" :key="item.id" :href="item.href"
                        class="text-secondary font-medium hover:text-primary transition-colors duration-300"
                        :class="{ 'text-primary': activeSection === item.id }" @click="mobileMenuOpen = false">
                        {{ item.name }}
                    </a>
                    <button
                        class="bg-primary text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
</template>

<script setup>
import Logo from '../../public/images/Assets-logo.png';
import { ref, onMounted } from 'vue'

// Reactive state variables
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('about')

// Navigation links
const navItems = ref([
    { id: 'home', name: 'Home', href: '/' },
    { id: 'about', name: 'About', href: '/about' },
    { id: 'services', name: 'Services', href: '/services' },
    { id: 'contact', name: 'Contact Us', href: '/contact-us' },
])

// Menu toggle handler
const toggleMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

// Scroll behavior and active section detection
const handleScroll = () => {
    scrolled.value = window.scrollY > 50
}

// Lifecycle hook
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})
</script>

<style scoped>
/* Custom color definitions */
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

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

.transition-opacity {
  transition:
    opacity 0.7s ease-in-out,
    transform 0.7s ease-in-out;
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

