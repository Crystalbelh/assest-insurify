<template>
    <!-- Header/Navigation -->
    <header class="fixed w-full mb-20 bg-white shadow-md z-50 transition-all duration-300"
        :class="{ 'py-2': scrolled, 'py-4': !scrolled }">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <div class="flex items-center">
                <div class="w-10 h-10 bg-primary rounded-full mr-3"></div>
                <span class="text-xl font-bold text-secondary">Assest Insurify</span>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMenu" class="md:hidden text-secondary">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
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
                    class="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
                    Get Started
                </button>
            </nav>
        </div>
    </header>
    <div class="text-center pt-32 pb-20 bg-gradient-to-br from-[#1c3452] to-gray-900 text-white mb-4">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Our Insurance Solutions</h2>
        <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto fade-in">
            Comprehensive coverage options tailored to protect your specific digital assets and
            investment strategies. From individual crypto holdings to enterprise-level protection.
        </p>
    </div>
    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">

            <!-- Service Cards - Clean Design -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                <div v-for="service in services" :key="service.id"
                    class="bg-white rounded-2xl transition-all duration-300 hover:scale-105">
                    <!-- Image Section -->
                    <div class="relative h-48 rounded-t-2xl overflow-hidden">
                        <img :src="service.image" :alt="service.title" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-4">
                            <div
                                class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-2">
                                <i :class="service.icon" class="text-white text-lg"></i>
                            </div>
                            <h3 class="text-xl font-bold text-white">{{ service.title }}</h3>
                        </div>
                    </div>

                    <!-- Content Section -->
                    <div class="p-6">
                        <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ service.description }}</p>

                        <div class="space-y-3 mb-6">
                            <div v-for="feature in service.features" :key="feature" class="flex items-center">
                                <svg class="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-gray-700 text-sm">{{ feature }}</span>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center mb-10">
                <button
                    class="cursor-pointer px-[18px] bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                    Get Protected
                </button>
            </div>

            <!-- Additional Services Information -->
            <div class="bg-white rounded-2xl shadow-lg p-8 mb-16">
                <div class="text-center mb-10">
                    <h3 class="text-2xl font-bold text-secondary mb-4">Why Choose Our Digital Asset Insurance?</h3>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Our specialized insurance products are designed specifically for the unique risks of digital
                        assets,
                        combining traditional insurance expertise with blockchain technology understanding.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-xl font-bold text-secondary mb-4">Comprehensive Risk Coverage</h4>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div
                                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Third-Party Hacks</h5>
                                    <p class="text-gray-600 text-sm">Protection against unauthorized access to your
                                        exchange accounts or wallets</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Employee Fraud</h5>
                                    <p class="text-gray-600 text-sm">Coverage for internal threats and malicious
                                        employee activities</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Smart Contract Failures</h5>
                                    <p class="text-gray-600 text-sm">Protection against losses from code vulnerabilities
                                        and exploits</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xl font-bold text-secondary mb-4">Our Claims Process</h4>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 text-white font-bold">
                                    1</div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Report Incident</h5>
                                    <p class="text-gray-600 text-sm">Notify us immediately of any security incident or
                                        loss</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 text-white font-bold">
                                    2</div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Documentation</h5>
                                    <p class="text-gray-600 text-sm">Provide necessary evidence and transaction details
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 text-white font-bold">
                                    3</div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Investigation</h5>
                                    <p class="text-gray-600 text-sm">Our team conducts a thorough review of the claim
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div
                                    class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 text-white font-bold">
                                    4</div>
                                <div>
                                    <h5 class="font-semibold text-secondary">Resolution</h5>
                                    <p class="text-gray-600 text-sm">Receive compensation within our guaranteed
                                        timeframe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Coverage Comparison Table -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <h3 class="text-2xl font-bold text-secondary mb-6 text-center">Insurance Coverage Comparison</h3>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="border-b-2 border-gray-200">
                                <th class="text-left py-4 px-4 text-secondary font-semibold">Coverage Type</th>
                                <th class="text-center py-4 px-4 text-secondary font-semibold">Basic Plan</th>
                                <th class="text-center py-4 px-4 text-secondary font-semibold">Professional Plan</th>
                                <th class="text-center py-4 px-4 text-secondary font-semibold">Enterprise Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-100">
                                <td class="py-4 px-4 text-gray-600">Crypto Wallet Protection</td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="py-4 px-4 text-gray-600">Exchange Hack Coverage</td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="py-4 px-4 text-gray-600">NFT Portfolio Protection</td>
                                <td class="py-4 px-4 text-center text-gray-400">—</td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100">
                                <td class="py-4 px-4 text-gray-600">DeFi Protocol Insurance</td>
                                <td class="py-4 px-4 text-center text-gray-400">—</td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-4 px-4 text-gray-600">Enterprise Security Audit</td>
                                <td class="py-4 px-4 text-center text-gray-400">—</td>
                                <td class="py-4 px-4 text-center text-gray-400">—</td>
                                <td class="py-4 px-4 text-center">
                                    <svg class="w-5 h-5 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                        <span class="text-xl font-bold">Assest Insurify</span>
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
                            <a href="/" class="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
                        </li>
                        <li>
                            <a href="/about" class="text-gray-400 hover:text-white transition-colors duration-300">About
                                Us</a>
                        </li>
                        <li>
                            <a href="/services"
                                class="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                        </li>
                        <li>
                            <a href="/contact-us"
                                class="text-primary hover:text-white transition-colors duration-300">Contact</a>
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
                            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Exchange
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
                <p>
                    &copy; 2023 Assest Insurify. All rights reserved. |
                    <a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a> |
                    <a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

// Services list with all four services
const services = ref([
    {
        id: 1,
        title: 'Crypto Insurance',
        description: 'Comprehensive protection for your cryptocurrency holdings against theft, hacking, and technical failures.',
        icon: 'fas fa-shield-alt',
        features: [
            'Cold storage protection',
            'Exchange hack coverage',
            'Private key loss',
            'Theft reimbursement'
        ],
        coverageLimit: 'Up to $5M',
        premium: '1.5% annually',
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 2,
        title: 'NFT Protection',
        description: 'Safeguard your valuable NFT collections with specialized insurance coverage for digital art and collectibles.',
        icon: 'fas fa-gem',
        features: [
            'Digital art protection',
            'Metaverse asset coverage',
            'Smart contract failure',
            'Marketplace fraud'
        ],
        coverageLimit: 'Up to $2M',
        premium: '2% annually',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 3,
        title: 'Exchange Coverage',
        description: 'Insurance solutions for cryptocurrency exchanges and trading platforms against security breaches.',
        icon: 'fas fa-building-columns',
        features: [
            'Platform security breaches',
            'Insider threat protection',
            'Liquidity pool insurance',
            'Regulatory compliance'
        ],
        coverageLimit: 'Up to $50M',
        premium: 'Custom pricing',
        image: 'https://images.unsplash.com/photo-1642784353723-64da2d9d5d88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
        id: 4,
        title: 'Wallet Security',
        description: 'Advanced protection for your digital wallets against unauthorized access and technical failures.',
        icon: 'fas fa-wallet',
        features: [
            'Multi-signature protection',
            'Hardware wallet coverage',
            'Seed phrase recovery',
            'Transaction reversal'
        ],
        coverageLimit: 'Up to $3M',
        premium: '1.8% annually',
        image: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
])
const navItems = ref([
    { id: 'home', name: 'Home', href: '/' },
    { id: 'about', name: 'About', href: '/about' },
    { id: 'services', name: 'Services', href: '/services' },
    { id: 'contact', name: 'Contact Us', href: '/contact-us' },
])
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

/* Custom animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out forwards;
}

/* small helper for rotating faq chevron smoothly */
.rotate-180 {
    transform: rotate(180deg);
}
</style>