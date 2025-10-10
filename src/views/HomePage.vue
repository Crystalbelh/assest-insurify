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
          <span class="text-xl font-bold text-secondary">Asset Insurify</span>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-secondary">
          <i class="fas fa-bars"></i>
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
            class="cursor-pointer bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
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
            class="bg-primary text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-[#1c3452] to-gray-900 text-white">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Secure Your Digital Assets with Confidence
          </h1>
          <p class="text-xl mb-8 text-gray-300">
            Comprehensive insurance solutions for cryptocurrencies, NFTs, and digital investments.
            Protect your digital wealth from theft, loss, and cyber threats.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              class="bg-primary cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Get Protected Today
            </button>
            <button
              class="border cursor-pointer border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1c3452] transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <div class="bg-white p-6 rounded-2xl shadow-2xl max-w-md">
            <div class="bg-gray-100 rounded-xl p-4 mb-4">
              <div class="flex justify-between mb-2">
                <span class="text-gray-600">Portfolio Value</span>
                <span class="text-secondary font-bold">$245,780</span>
              </div>
              <div class="h-2 bg-gray-300 rounded-full mb-2">
                <div class="h-full bg-primary rounded-full" style="width: 85%"></div>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Insured: $208,913</span>
                <span class="text-primary">85% covered</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">Bitcoin</div>
                <div class="font-bold text-secondary">$152,400</div>
                <div class="text-xs text-primary">Fully insured</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">Ethereum</div>
                <div class="font-bold text-secondary">$68,250</div>
                <div class="text-xs text-primary">Fully insured</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">NFTs</div>
                <div class="font-bold text-secondary">$18,900</div>
                <div class="text-xs text-primary">Fully insured</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <div class="text-sm text-gray-600 mb-1">Other</div>
                <div class="font-bold text-secondary">$6,230</div>
                <div class="text-xs text-primary">Fully insured</div>
              </div>
            </div>
          </div>
        </div>
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
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">$2.3B+ in digital assets protected</span>
            </div>
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">98% client satisfaction rate</span>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span class="text-secondary font-medium">Global coverage in 45+ countries</span>
            </div>
          </div>

          <div class="md:w-1/2">
            <div class="bg-gray-50 p-8 rounded-2xl">
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
            </div>
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
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div class="h-2 bg-primary"></div>
            <div class="p-6">
              <div
                class="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4"
              >
                <i :class="service.icon" class="text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold text-secondary mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 mb-4">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="feature in service.features" :key="feature" class="flex items-start">
                  <svg
                    class="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
              <button
                class="cursor-pointer w-full bg-secondary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of digital asset holders and businesses worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-gray-50 p-6 rounded-2xl"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center text-white font-bold"
              >
                {{ testimonial.initials }}
              </div>
              <div>
                <h4 class="font-bold text-secondary">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
            <div class="flex mt-4">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
            </div>
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
                  <input
                    type="text"
                    id="firstName"
                    v-model="contactForm.firstName"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label for="lastName" class="block mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="contactForm.lastName"
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label for="email" class="block mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="contactForm.email"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label for="subject" class="block mb-2">Subject</label>
                <select
                  id="subject"
                  v-model="contactForm.subject"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="" disabled selected>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="claim">File a Claim</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label for="message" class="block mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                class="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div class="md:w-1/2">
            <div class="bg-gray-800 p-8 rounded-2xl h-full">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <svg
                      class="w-5 h-5 text-white"
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
                    <h4 class="font-bold text-lg">Our Office</h4>
                    <p class="text-gray-300">
                      123 Blockchain Avenue,<br />Digital District, NY 10001
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <svg
                      class="w-5 h-5 text-white"
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
                    <h4 class="font-bold text-lg">Phone</h4>
                    <p class="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <svg
                      class="w-5 h-5 text-white"
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
                    <h4 class="font-bold text-lg">Email</h4>
                    <p class="text-gray-300">info@Assest Insurify.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 mt-1"
                  >
                    <svg
                      class="w-5 h-5 text-white"
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
                  href="#home"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#services"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-gray-400 hover:text-white transition-colors duration-300"
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
                class="cursor-pointer bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Assest Insurify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive state variables
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
})

// Navigation links
const navItems = ref([
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About', href: '#about' },
  { id: 'services', name: 'Services', href: '#services' },
  { id: 'contact', name: 'Contact Us', href: '#contact' },
])

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
])

// Menu toggle handler
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

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

// Scroll behavior and active section detection
const handleScroll = () => {
  scrolled.value = window.scrollY > 50

  const sections = ['home', 'about', 'services', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
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
