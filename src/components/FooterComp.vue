<template>
        <footer class="bg-gray-900 text-white py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <img :src="Logo" width="200px">
                        </div>
                        <p class="text-gray-400 mb-4">
                            Protecting your digital wealth with comprehensive insurance solutions.
                        </p>
                        <div class="flex space-x-4">
                            <router-link to="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z">
                                    </path>
                                </svg>
                            </router-link>
                            <router-link to="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                    </path>
                                </svg>
                            </router-link>
                            <router-link to="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                    </path>
                                </svg>
                            </router-link>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link :to="{ name: 'home' }"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Home</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'about' }"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">About Us</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'services' }"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Services</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'contact' }"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Contact</router-link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-lg font-semibold mb-4">Services</h3>
                        <ul class="space-y-2">
                            <li>
                                <router-link :to="{ name: 'services' }" class="text-gray-400 hover:text-white transition-colors duration-300">Crypto
                                    Insurance</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'services' }" class="text-gray-400 hover:text-white transition-colors duration-300">NFT
                                    Protection</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'services' }"
                                    class="text-gray-400 hover:text-white transition-colors duration-300">Exchange
                                    Coverage</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'services' }" class="text-gray-400 hover:text-white transition-colors duration-300">Wallet
                                    Security</router-link>
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
</template>

<script setup>
import Logo from '../../public/images/Assets-logo1.png';


</script>

<style scoped>

</style>
