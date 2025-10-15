<template>
  <div>
    <!-- Header/Navigation -->
    <HeaderComp />


    <!-- Contact Page Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-[#1c3452] to-gray-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Get In Touch With Us</h1>
        <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto fade-in">
          Have questions about protecting your digital assets? Our team of experts is here to help
          you secure your investments.
        </p>
      </div>
    </section>

    <!-- Contact Options Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-secondary mb-4">How Can We Help You?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the best way to reach out based on your needs. We're here to assist you.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="option in contactOptions" :key="option.id"
            class="bg-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <i :class="option.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-secondary mb-4">{{ option.title }}</h3>
            <p class="text-gray-600 mb-6">{{ option.description }}</p>
            <div class="text-primary font-semibold">{{ option.details }}</div>

          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Information Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h2 class="text-3xl font-bold text-secondary mb-6">Send Us a Message</h2>
            <p class="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form @submit.prevent="submitContactForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block mb-2 text-secondary font-medium">First Name</label>
                  <input type="text" id="firstName" v-model="contactForm.firstName"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required />
                </div>
                <div>
                  <label for="lastName" class="block mb-2 text-secondary font-medium">Last Name</label>
                  <input type="text" id="lastName" v-model="contactForm.lastName"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block mb-2 text-secondary font-medium">Email Address</label>
                  <input type="email" id="email" v-model="contactForm.email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required />
                </div>
                <div>
                  <label for="phone" class="block mb-2 text-secondary font-medium">Phone Number</label>
                  <input type="tel" id="phone" v-model="contactForm.phone"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label for="subject" class="block mb-2 text-secondary font-medium">Subject</label>
                <select id="subject" v-model="contactForm.subject"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required>
                  <option value="" disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="claim">File a Claim</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label for="message" class="block mb-2 text-secondary font-medium">Message</label>
                <textarea id="message" v-model="contactForm.message" rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us how we can help you..." required></textarea>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="consent" v-model="contactForm.consent"
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2" />
                <label for="consent" class="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" class="text-primary hover:underline">privacy policy</a>
                  and consent to Assest Insurify contacting me.
                </label>
              </div>

              <button type="submit"
                class="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                :disabled="!contactForm.consent" :class="{ 'opacity-50 cursor-not-allowed': !contactForm.consent }">
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-secondary mb-6">Our Contact Information</h2>
            <p class="text-gray-600 mb-8">
              Reach out to us through any of the following channels. We're always ready to assist
              with your digital asset insurance needs.
            </p>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Our Office</h3>
                  <p class="text-gray-600">
                    123 Blockchain Avenue,<br />Digital District, NY 10001
                  </p>
                  <button class="cursor-pointer mt-2 text-primary font-medium hover:underline flex items-center">
                    Get Directions
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-sm text-gray-500 mt-1">Monday - Friday: 9am - 6pm EST</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Email</h3>
                  <p class="text-gray-600">info@assetsinsurify.com</p>
                  <p class="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Business Hours</h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9am - 6pm EST<br />
                    Saturday: 10am - 2pm EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-gray-200">
              <h3 class="text-xl font-bold text-secondary mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our digital asset insurance services.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6 border-b border-gray-200 pb-6">
            <button @click="toggleFaq(index)"
              class="cursor-pointer flex justify-between items-center w-full text-left focus:outline-none">
              <h3 class="text-lg font-semibold text-secondary">{{ faq.question }}</h3>
              <svg class="w-5 h-5 text-primary transition-transform duration-300" :class="{ 'rotate-180': faq.open }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="faq.open" class="mt-4 text-gray-600">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <p class="text-gray-600 mb-4">Still have questions?</p>
          <button
            class="cursor-pointer bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterComp />

  </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import { ref } from 'vue'

const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
})

const contactOptions = ref([
  {
    id: 1,
    title: 'General Inquiries',
    description: 'Have questions about our services or need more information?',
    details: 'Response within 24 hours',
    icon: 'fas fa-envelope',
    buttonText: 'Send Email',
  },
  {
    id: 2,
    title: 'Claims Support',
    description: 'Need to file a claim or check the status of an existing claim?',
    details: '24/7 emergency line available',
    icon: 'fas fa-headset',
    buttonText: 'Call Now',
  },
  {
    id: 3,
    title: 'Sales & Quotes',
    description: 'Interested in our insurance plans or need a customized quote?',
    details: 'Get a quote in minutes',
    icon: 'fas fa-chart-line',
    buttonText: 'Get Quote',
  },
])

const faqs = ref([
  {
    question: 'What types of digital assets do you insure?',
    answer:
      'We insure a wide range of digital assets including cryptocurrencies (Bitcoin, Ethereum, etc.), NFTs, digital art, tokenized assets, and more. Contact us for a complete list of covered assets.',
    open: false,
  },
  {
    question: 'How long does the claims process take?',
    answer:
      'Most claims are processed within 7-10 business days. Emergency claims can be expedited to 48-72 hours. The exact timeline depends on the complexity of the claim and required documentation.',
    open: false,
  },
  {
    question: 'Do you offer international coverage?',
    answer:
      'Yes, we provide coverage in over 45 countries worldwide. Our policies are designed to protect your digital assets regardless of your location, with some regional restrictions.',
    open: false,
  },
  {
    question: 'What security measures do you have in place?',
    answer:
      'We employ industry-leading security protocols including multi-signature wallets, cold storage solutions, regular security audits, and comprehensive cybersecurity insurance to protect both our systems and your assets.',
    open: false,
  },
  {
    question: 'Can I adjust my coverage as my portfolio grows?',
    answer:
      'Absolutely. We offer flexible policies that can be adjusted as your digital asset portfolio changes. You can increase or decrease coverage with a simple policy amendment.',
    open: false,
  },
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const submitContactForm = () => {
  if (!contactForm.value.consent) {
    // safeguard; button is disabled anyway, but keep for safety
    return
  }
  // In a real app you'd send the data to a backend here
  alert('Thank you for your message! We will get back to you soon.')
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  }
}
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
