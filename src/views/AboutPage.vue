<template>
    <div>
        <!-- Header/Navigation -->
        <header class="fixed w-full bg-white shadow-md z-50 transition-all duration-300"
            :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
            <div class="container mx-auto px-4 flex justify-between items-center">
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-primary rounded-full mr-3"></div>
                    <span class="text-xl font-bold text-secondary">Asset Insurify</span>
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
                    <button
                        class="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                        Get Started
                    </button>
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

        <!-- Hero Section -->
        <section class="pt-32 pb-20 bg-gradient-to-br from-[#1c3452] to-gray-900 text-white">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">About Asset Insurify</h1>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    We are pioneers in digital asset insurance, providing peace of mind to cryptocurrency
                    investors, NFT collectors, and blockchain enterprises worldwide.
                </p>
            </div>
        </section>

        <!-- Our Story Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h2 class="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                        <p class="text-gray-600 mb-6">
                            Founded in 2020, Asset Insurify emerged from a simple observation: as digital assets grew in
                            value and adoption, the insurance industry was failing to keep pace. Our founders, a team of
                            blockchain experts and insurance veterans, recognized the critical need for specialized
                            protection in this new digital frontier.
                        </p>
                        <p class="text-gray-600 mb-6">
                            What started as a vision to bridge traditional insurance principles with cutting-edge
                            blockchain technology has evolved into the leading digital asset protection platform,
                            securing over $2.3 billion in client assets across 45+ countries.
                        </p>
                        <div class="bg-gray-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold text-secondary mb-4">Our Mission</h3>
                            <p class="text-gray-600">
                                To build trust in the digital economy by providing comprehensive insurance solutions
                                that protect individuals and businesses from the unique risks associated with digital
                                assets.
                            </p>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative">
                            <img src="../assets/images/about-story.jpg" alt="Our Story"
                                class="rounded-2xl shadow-lg max-w-md">
                            <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
                                <div class="text-3xl font-bold">2020</div>
                                <div class="text-sm">Year Founded</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-secondary mb-4">Our Values</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        The principles that guide everything we do at Asset Insurify
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="value in values" :key="value.id" class="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <i :class="value.icon" class="text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-secondary mb-4">{{ value.title }}</h3>
                        <p class="text-gray-600">{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Milestones Section -->
        <section class="py-20 bg-secondary text-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold mb-4">Our Journey</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Key milestones in our mission to secure the digital economy
                    </p>
                </div>

                <div class="relative">
                    <!-- Timeline line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-30"></div>

                    <div class="space-y-12">
                        <div v-for="(milestone, index) in milestones" :key="milestone.id"
                            class="flex flex-col md:flex-row items-center"
                            :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
                            <div class="md:w-1/2 mb-6 md:mb-0" :class="index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'">
                                <div class="bg-gray-800 p-6 rounded-2xl">
                                    <div class="text-primary font-bold text-lg mb-2">{{ milestone.year }}</div>
                                    <h3 class="text-xl font-bold mb-3">{{ milestone.title }}</h3>
                                    <p class="text-gray-300">{{ milestone.description }}</p>
                                </div>
                            </div>
                            <div class="md:w-1/2 flex justify-center">
                                <div class="w-6 h-6 bg-primary rounded-full relative z-10"></div>
                            </div>
                            <div class="md:w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold text-secondary mb-4">Trusted Partners</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        We collaborate with industry leaders to provide the best protection for your digital assets
                    </p>
                </div>

                <img src="/src/assets/images/ledger.png" alt="">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
                    <div v-for="partner in partners" :key="partner.id" class="flex justify-center">
                        <div class="bg-gray-50 p-6 rounded-2xl w-32 h-32 flex items-center justify-center">
                            <img :src="`/src/assets/images/${partner.img}.png`" :alt="`${partner.img}`">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-primary text-white">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Protect Your Digital Assets?</h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied clients who trust Asset Insurify with their digital wealth
                </p>
                <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        class="cursor-pointer bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Get Started Today
                    </button>
                    <button
                        class="cursor-pointer border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#7cbe3f] transition-colors duration-300">
                        Contact Our Team
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <div class="w-8 h-8 bg-primary rounded-full mr-3"></div>
                            <span class="text-xl font-bold">Asset Insurify</span>
                        </div>
                        <p class="text-gray-400 mb-4">
                            Protecting your digital wealth with comprehensive insurance solutions.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                    </path>
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="/"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                            </li>
                            <li>
                                <a href="/about"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="/services"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                            </li>
                            <li>
                                <a href="/contact-us"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Services</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Crypto
                                    Insurance</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">NFT
                                    Protection</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Exchange
                                    Coverage</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Wallet
                                    Security</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                        <p class="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div class="flex">
                            <input type="email" placeholder="Your email"
                                class="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full" />
                            <button
                                class="cursor-pointer bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Asset Insurify. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>

</template>



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







<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

// Company values
const values = ref([
    {
        id: 1,
        title: 'Security First',
        description: 'We prioritize the protection of our clients\' digital assets above all else, implementing industry-leading security protocols.',
        icon: 'fas fa-shield-halved'
    },
    {
        id: 2,
        title: 'Transparency',
        description: 'We believe in clear, honest communication about our policies, coverage, and claims processes.',
        icon: 'fas fa-eye'
    },
    {
        id: 3,
        title: 'Innovation',
        description: 'We continuously evolve our solutions to address emerging risks in the rapidly changing digital asset landscape.',
        icon: 'fas fa-lightbulb'
    }
])

// Team members
const team = ref([
    {
        id: 1,
        name: 'Alexandra Chen',
        initials: 'AC',
        role: 'CEO & Co-Founder',
        bio: 'Former blockchain security researcher with 10+ years in cybersecurity.'
    },
    {
        id: 2,
        name: 'Marcus Rodriguez',
        initials: 'MR',
        role: 'CTO',
        bio: 'Expert in blockchain architecture and smart contract development.'
    },
    {
        id: 3,
        name: 'Sarah Johnson',
        initials: 'SJ',
        role: 'Head of Insurance Operations',
        bio: '15+ years in traditional insurance, specializing in risk assessment.'
    },
    {
        id: 4,
        name: 'David Kim',
        initials: 'DK',
        role: 'Chief Security Officer',
        bio: 'Former white-hat hacker with extensive experience in crypto security.'
    }
])

// Company milestones
const milestones = ref([
    {
        id: 1,
        year: '2020',
        title: 'Company Founded',
        description: 'Asset Insurify was established to address the insurance gap in the digital asset space.'
    },
    {
        id: 2,
        year: '2021',
        title: 'First Major Partnership',
        description: 'Secured partnerships with three leading cryptocurrency exchanges.'
    },
    {
        id: 3,
        year: '2022',
        title: '$1B in Assets Protected',
        description: 'Reached the milestone of protecting over $1 billion in client digital assets.'
    },
    {
        id: 4,
        year: '2023',
        title: 'Global Expansion',
        description: 'Expanded our services to cover clients in 45+ countries worldwide.'
    },
    {
        id: 5,
        year: '2024',
        title: 'NFT Protection Launch',
        description: 'Introduced specialized insurance products for NFT collections and digital art.'
    }
])
// Partners
const partners = ref([
    { id: 1, img: 'metamask' },
    { id: 2, img: 'trustwallet' },
    { id: 3, img: 'kraken' },
    { id: 4, img: 'binance' },
    { id: 5, img: 'zerion' },
    { id: 6, img: 'tokenpocket' },
    { id: 7, img: 'cryptocom' },
    { id: 8, img: 'ledger' },
    { id: 9, img: 'exodus' },
    { id: 10, img: '1inch' },
    { id: 11, img: 'bybit' },
    { id: 12, img: 'safepal' },
    { id: 13, img: 'bitget' },
    { id: 14, img: 'okx' },
    { id: 14, img: 'safe' },
    { id: 14, img: 'mewallet' },
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
</style>