<template>
    <div>
        <!-- Header/Navigation -->
        <HeaderComp />
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
                        <div class="w-[30%]">
                            <img src="/src/assets/images/phone-demo2.png" alt="">
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

                <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
                    <div v-for="partner in partners" :key="partner.id" class="flex justify-center">
                        <div class="bg-gray-50 p-6 rounded-2xl w-32 h-32 flex items-center justify-center">
                            <img :src="partner.img" :alt="`${partner.img}`">
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
        <FooterComp/>
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
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import { ref } from 'vue'

import metamask from '@/assets/images/metamask.png'
import trustwallet from '@/assets/images/trustwallet.png'
import kraken from '@/assets/images/kraken.png'
import binance from '@/assets/images/binance.png'
import zerion from '@/assets/images/zerion.png'
import tokenpocket from '@/assets/images/tokenpocket.png'
import cryptocom from '@/assets/images/cryptocom.png'
import ledger from '@/assets/images/ledger.png'
import exodous from '@/assets/images/exodous.png'
import bybit from '@/assets/images/bybit.png'
import safepal from '@/assets/images/safepal.png'
import bitget from '@/assets/images/bitget.png'
import okx from '@/assets/images/okx.png'
import safe from '@/assets/images/safe.png'
import mewallet from '@/assets/images/mewallet.png'
import Linch from '@/assets/images/1inch.png'

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
    { id: 1, img: metamask },
    { id: 2, img: trustwallet },
    { id: 3, img: kraken },
    { id: 4, img: binance },
    { id: 5, img: zerion },
    { id: 6, img: tokenpocket },
    { id: 7, img: cryptocom },
    { id: 8, img: ledger },
    { id: 9, img: exodous },
    { id: 10, img: Linch },
    { id: 11, img: bybit },
    { id: 12, img: safepal },
    { id: 13, img: bitget },
    { id: 14, img: okx },
    { id: 14, img: safe },
    { id: 14, img: mewallet },
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

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}
</style>
