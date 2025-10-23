<template>
    <!-- Header/Navigation -->
    <HeaderComp />

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
                                <i :class="service.icon" class=" text-black text-lg"></i>
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
                <a href="/auth/register"
                    class="cursor-pointer px-[18px] bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                    Get Protected
                </a>
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
    <FooterComp/>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import { ref } from 'vue'
import insurance from '@/assets/images/crypto-insurance.jpeg'
import nftProtection from '@/assets/images/nft-protection.jpeg'
import coverage from "@/assets/images/xchange-coverage.jpeg"
import security from '@/assets/images/wallet-security.jpeg'

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
        image: insurance
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
        image: nftProtection
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
        image: coverage
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
        image: security
    }
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
