<template>
  <div>
    <!-- Header/Navigation -->
    <header
      class="fixed w-full bg-white shadow-md z-50 transition-all duration-300"
      :class="{ 'py-2': scrolled, 'py-4': !scrolled }"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-primary rounded-full mr-3"></div>
          <span class="text-xl font-bold text-secondary">SecureVault</span>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-secondary">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            class="text-secondary font-medium hover:text-primary transition-colors duration-300"
            :class="{ 'text-primary': activeSection === item.id }"
          >
            {{ item.name }}
          </a>
          <button
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white py-4 px-4 shadow-lg">
        <nav class="flex flex-col space-y-4">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            class="text-secondary font-medium hover:text-primary transition-colors duration-300"
            :class="{ 'text-primary': activeSection === item.id }"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
          <button
            class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>

    <!-- Contact Page Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-secondary to-gray-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 fade-in">Get In Touch With Us</h1>
        <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto fade-in">
          Have questions about protecting your digital assets? Our team of experts is here to help
          you secure your investments.
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in"
        >
          <button
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Schedule a Consultation
          </button>
          <button
            class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors duration-300"
          >
            Emergency Claims
          </button>
        </div>
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
          <div
            v-for="option in contactOptions"
            :key="option.id"
            class="bg-gray-50 p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div
              class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i :class="option.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-secondary mb-4">{{ option.title }}</h3>
            <p class="text-gray-600 mb-6">{{ option.description }}</p>
            <div class="text-primary font-semibold">{{ option.details }}</div>
            <button
              class="mt-6 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            >
              {{ option.buttonText }}
            </button>
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
                  <label for="firstName" class="block mb-2 text-secondary font-medium"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    v-model="contactForm.firstName"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label for="lastName" class="block mb-2 text-secondary font-medium"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="lastName"
                    v-model="contactForm.lastName"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block mb-2 text-secondary font-medium"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    id="email"
                    v-model="contactForm.email"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label for="phone" class="block mb-2 text-secondary font-medium"
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    v-model="contactForm.phone"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block mb-2 text-secondary font-medium">Subject</label>
                <select
                  id="subject"
                  v-model="contactForm.subject"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled selected>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="claim">File a Claim</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                </select>
              </div>

              <div>
                <label for="message" class="block mb-2 text-secondary font-medium">Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  v-model="contactForm.consent"
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                />
                <label for="consent" class="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" class="text-primary hover:underline">privacy policy</a>
                  and consent to SecureVault contacting me.
                </label>
              </div>

              <button
                type="submit"
                class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                :disabled="!contactForm.consent"
                :class="{ 'opacity-50 cursor-not-allowed': !contactForm.consent }"
              >
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
                <div
                  class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Our Office</h3>
                  <p class="text-gray-600">
                    123 Blockchain Avenue,<br />Digital District, NY 10001
                  </p>
                  <button class="mt-2 text-primary font-medium hover:underline flex items-center">
                    Get Directions
                    <svg
                      class="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                  <p class="text-sm text-gray-500 mt-1">Monday - Friday: 9am - 6pm EST</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-secondary mb-2">Email</h3>
                  <p class="text-gray-600">info@securevault.com</p>
                  <p class="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div class="flex items-start">
                <div
                  class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
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
                <a
                  href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                >
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
            <button
              @click="toggleFaq(index)"
              class="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 class="text-lg font-semibold text-secondary">{{ faq.question }}</h3>
              <svg
                class="w-5 h-5 text-primary transition-transform duration-300"
                :class="{ 'rotate-180': faq.open }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
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
            class="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
          >
            Contact Our Support Team
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
              <span class="text-xl font-bold">SecureVault</span>
            </div>
            <p class="text-gray-400 mb-4">
              Protecting your digital wealth with comprehensive insurance solutions.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="index.html"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="about.html"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="services.html"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="contact.html"
                  class="text-primary hover:text-white transition-colors duration-300"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Services</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Crypto Insurance</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"
                  >NFT Protection</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Exchange Coverage</a
                >
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Wallet Security</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
            <p class="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div class="flex">
              <input
                type="email"
                placeholder="Your email"
                class="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <button
                class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2023 SecureVault. All rights reserved. |
            <a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a> |
            <a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

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
</style>
