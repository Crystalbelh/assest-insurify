<template>
  <div>
    <!-- Header/Navigation -->
    <HeaderComp/>

    <section id="home"
      class="pt-32 pb-20 bg-gradient-to-br from-[#1c3452] to-gray-900 text-white relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Slides -->
        <div v-for="(slide, index) in slides" :key="index"
          class="flex flex-col md:flex-row items-center transition-opacity duration-700 ease-in-out" :class="{
            'opacity-100 translate-x-0': currentSlide === index,
            'opacity-0 absolute inset-0 -translate-x-full': currentSlide !== index,
          }">
          <!-- Left Text -->
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              {{ slide.title }}
            </h1>
            <p class="text-xl mb-8 text-gray-300">
              {{ slide.description }}
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a :href="slide.url"
                class="bg-primary cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                {{ slide.cta1 }}
              </a>
              <a :href="slide.url2"
                class="border cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1c3452] transition-colors duration-300">
                {{ slide.cta2 }}
              </a>
            </div>
          </div>

          <!-- Right Card -->
          <div>
            <img :src="slide.img" class="w-[220px] hidden md:inline translate-x-[200px]" alt="" />
          </div>
         </div>

        <!-- Navigation Buttons -->
        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <button v-for="(slide, i) in slides" :key="'dot-' + i" @click="currentSlide = i" class="w-3 h-3 rounded-full"
            :class="currentSlide === i ? 'bg-primary' : 'bg-gray-500'"></button>
        </div>

        <!-- Prev/Next Controls -->
        <button @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
          ‹
        </button>
        <button @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full">
          ›
        </button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-secondary mb-4">About Assest Insurify</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We are pioneers in digital asset insurance, providing peace of mind to cryptocurrency
            investors, NFT collectors, and blockchain enterprises worldwide.
          </p>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h3 class="text-2xl font-bold text-secondary mb-6">
              Why Digital Assets Need Protection
            </h3>
            <p class="text-gray-600 mb-6">
              The digital asset landscape is evolving rapidly, but security risks remain a
              significant concern. From exchange hacks to phishing attacks, digital wealth faces
              unique vulnerabilities that traditional insurance doesn't cover.
            </p>
            <p class="text-gray-600 mb-6">
              Assest Insurify bridges this gap with specialized insurance products designed
              specifically for the digital age, backed by industry-leading security protocols and
              comprehensive risk assessment.
            </p>

            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">$2.3B+ in digital assets protected</span>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">98% client satisfaction rate</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">Global coverage in 45+ countries</span>
            </div>
          </div>

          <div class="md:w-1/2">
            <div>
              <img src="../assets/images/demo1.png" class="w-[500px]" alt="" />
              <img src="../assets/images/phone-demo1.png" class="absolute w-[100px] translate-y-[-180px]" alt="" />
            </div>
            <!-- <div class="bg-gray-50 p-8 rounded-2xl">
              <h3 class="text-2xl font-bold text-secondary mb-6">Our Mission</h3>
              <p class="text-gray-600 mb-6">
                To build trust in the digital economy by providing comprehensive insurance solutions
                that protect individuals and businesses from the unique risks associated with
                digital assets.
              </p>

              <div class="mb-6">
                <h4 class="text-lg font-semibold text-secondary mb-3">Industry Recognition</h4>
                <div class="flex space-x-4">
                  <div class="bg-white p-4 rounded-lg shadow-sm flex-1 text-center">
                    <div class="text-primary font-bold text-xl">4.9/5</div>
                    <div class="text-gray-600 text-sm">Trustpilot Rating</div>
                  </div>
                  <div class="bg-white p-4 rounded-lg shadow-sm flex-1 text-center">
                    <div class="text-primary font-bold text-xl">A+</div>
                    <div class="text-gray-600 text-sm">Security Rating</div>
                  </div>
                  <div class="bg-white p-4 rounded-lg shadow-sm flex-1 text-center">
                    <div class="text-primary font-bold text-xl">24/7</div>
                    <div class="text-gray-600 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-secondary mb-4">Our Insurance Solutions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage options tailored to protect your specific digital assets and
            investment strategies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id"
            class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div class="h-2 bg-primary"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <i :class="service.icon" class="text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-secondary mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="feature in service.features" :key="feature" class="flex items-start">
                  <svg class="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
              <a href="/about">
                <button
                  class="cursor-pointer w-full bg-secondary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of digital asset holders and businesses worldwide.
          </p>
        </div>

        <!-- Scrolling Wrapper -->
        <div class="relative">
          <div class="flex space-x-8 animate-scroll hover:[animation-play-state:paused]">
            <!-- Duplicate testimonials twice for infinite loop illusion -->
            <div v-for="n in 2" :key="n" class="flex space-x-8">
              <div v-for="testimonial in testimonials" :key="testimonial.id + '-copy-' + n"
                class="bg-gray-50 p-6 rounded-2xl w-80 flex-shrink-0">
                <div class="flex items-center mb-4">
                  <div
                    class="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {{ testimonial.initials }}
                  </div>
                  <div>
                    <h4 class="font-bold text-secondary">{{ testimonial.name }}</h4>
                    <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
                  </div>
                </div>
                <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
                <div class="flex mt-4">
                  <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Optional gradient fade edges -->
          <div class="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent">
          </div>
          <div
            class="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent">
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about protecting your digital assets? Our team is here to help.
          </p>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <form @submit.prevent="submitContactForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block mb-2">First Name</label>
                  <input type="text" id="firstName" v-model="contactForm.firstName"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label for="lastName" class="block mb-2">Last Name</label>
                  <input type="text" id="lastName" v-model="contactForm.lastName"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label for="email" class="block mb-2">Email Address</label>
                <input type="email" id="email" v-model="contactForm.email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label for="subject" class="block mb-2">Subject</label>
                <select id="subject" v-model="contactForm.subject"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="" disabled selected>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="claim">File a Claim</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label for="message" class="block mb-2">Message</label>
                <textarea id="message" v-model="contactForm.message" rows="5"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit"
                class="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>

          <div class="md:w-1/2">
            <div class="bg-gray-800 p-8 rounded-2xl h-full">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Our Office</h4>
                    <p class="text-gray-300">
                      123 Blockchain Avenue,<br />Digital District, NY 10001
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Phone</h4>
                    <p class="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Email</h4>
                    <p class="text-gray-300">info@assetsinsurify.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Business Hours</h4>
                    <p class="text-gray-300">
                      Monday - Friday: 9am - 6pm EST<br />Saturday: 10am - 2pm EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterComp/>
  </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import slideImgOne from '@/assets/images/phone-demo2.png'
import slideImgTwo from '@/assets/images/phone-demo3.png'
import slideImgThree from '@/assets/images/phone-demo1.png'

// Reactive state variables
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

// Services list
const services = ref([
  {
    id: 1,
    title: 'Cryptocurrency Insurance',
    description:
      'Comprehensive protection for your cryptocurrency holdings against theft, hacking, and loss.',
    icon: 'fas fa-shield-halved',
    features: [
      'Cold storage protection',
      'Exchange hack coverage',
      'Private key loss',
      'Theft reimbursement',
    ],
  },
  {
    id: 2,
    title: 'NFT Protection',
    description: 'Safeguard your valuable NFT collections with specialized insurance coverage.',
    icon: 'fas fa-gem',
    features: [
      'Digital art protection',
      'Metaverse asset coverage',
      'Smart contract failure',
      'Marketplace fraud',
    ],
  },
  {
    id: 3,
    title: 'Exchange Coverage',
    description: 'Insurance solutions for cryptocurrency exchanges and trading platforms.',
    icon: 'fas fa-building-columns',
    features: [
      'Platform security breaches',
      'Insider threat protection',
      'Liquidity pool insurance',
      'Regulatory compliance coverage',
    ],
  },
])

// Testimonials
const testimonials = ref([
  {
    id: 1,
    name: 'Michael Chen',
    initials: 'MC',
    role: 'Crypto Investor',
    quote:
      'Assest Insurify gave me peace of mind for my seven-figure crypto portfolio. Their claims process was seamless when I experienced a phishing attack.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'NFT Collector',
    quote:
      'As an NFT artist and collector, I was worried about protecting my digital assets. Assest Insurify provided the specialized coverage I needed.',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    initials: 'DR',
    role: 'Crypto Exchange CEO',
    quote:
      'Partnering with Assest Insurify for our exchange insurance has been a game-changer. Our users feel more secure knowing their assets are protected.',
  },
  {
    id: 4,
    initials: 'TR',
    name: 'Tom R.',
    role: 'Business Owner',
    quote: 'They made it simple to insure my company’s digital assets — great experience!',
  },
  {
    id: 5,
    initials: 'LW',
    name: 'Laura W.',
    role: 'Blockchain Analyst',
    quote: 'Excellent support and transparent policies. Highly recommend their team.',
  },
])


// Contact form submit handler
const submitContactForm = () => {
  alert('Thank you for your message! We will get back to you soon.')

  // Reset form
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }
}

const currentSlide = ref(0)

const slides = [
  {
    title: 'Secure Your Digital Assets with Confidence',
    description:
      'Comprehensive insurance solutions for cryptocurrencies, NFTs, and digital investments. Protect your digital wealth from theft, loss, and cyber threats.',
    cta1: 'Get Protected Today',
    cta2: 'Learn More',
    url: 'https://app.assetsinsurify.com/register',
    url2: '/about',
    stats: {
      portfolio: '$245,780',
      insured: '$208,913',
      coveragePercent: '85%',
    },
    img: slideImgOne,
    assets: [
      { name: 'Bitcoin', value: '$152,400', status: 'Fully insured' },
      { name: 'Ethereum', value: '$68,250', status: 'Fully insured' },
      { name: 'NFTs', value: '$18,900', status: 'Fully insured' },
      { name: 'Other', value: '$6,230', status: 'Fully insured' },
    ],
  },
  {
    title: 'Protect Your Crypto Portfolio Effortlessly',
    description:
      'Automatic insurance coverage for top digital assets. Focus on investing while we handle your risk protection.',
    cta1: 'Start Now',
    cta2: 'See How It Works',
    url: 'https://app.assetsinsurify.com/register',
    url2: '/about',
    stats: {
      portfolio: '$312,000',
      insured: '$280,000',
      coveragePercent: '90%',
    },
    img: slideImgTwo,
    assets: [
      { name: 'Bitcoin', value: '$180,000', status: 'Fully insured' },
      { name: 'Solana', value: '$42,000', status: 'Fully insured' },
      { name: 'NFTs', value: '$70,000', status: 'Fully insured' },
      { name: 'Others', value: '$20,000', status: 'Fully insured' },
    ],
  },
  {
    title: 'Stay Ahead with Advanced Coverage Plans',
    description:
      'Customizable digital asset insurance designed for traders, collectors, and businesses — full protection made simple.',
    cta1: 'Secure Now',
    cta2: 'Learn More',
    url: 'https://app.assetsinsurify.com/register',
    url2: '/about',
    stats: {
      portfolio: '$410,500',
      insured: '$360,000',
      coveragePercent: '88%',
    },
    img: slideImgThree,
    assets: [
      { name: 'Bitcoin', value: '$210,000', status: 'Fully insured' },
      { name: 'Ethereum', value: '$90,000', status: 'Fully insured' },
      { name: 'NFTs', value: '$85,000', status: 'Fully insured' },
      { name: 'Others', value: '$25,500', status: 'Fully insured' },
    ],
  },
]


const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

// Auto slide every 6 seconds
let interval
onMounted(() => {
  interval = setInterval(nextSlide, 6000)
})
onUnmounted(() => {
  clearInterval(interval)
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
