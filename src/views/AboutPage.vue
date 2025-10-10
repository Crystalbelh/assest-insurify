<template class="bg-white text-gray-800">

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


  <!-- Hero Section -->
  <section class="py-20 text-center text-white h-200" style="background-color: #1c3452;">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">About Digital Co.</h1>
      <p class="text-lg md:text-xl">
        We combine <span style="color: #7cbe3f;">design</span> and <span style="color: #7cbe3f;">technology</span> to create digital solutions that move brands forward.
      </p>
    </div>

    <div class="py-3 my-20 flex justify-center items-center relative">
      <div class="  ">
      <img src="/public/images/laptop1.png" class="w-[300px] md:w-[600px] object-cover" alt="">
      <img src="/public/images/phone1.png" class=" w-[75px] md:w-[120px] absolute md:translate-y-[-230px] translate-y-[-150px]">
      </div>
    </div>
  </section>

  <!-- Our Story -->
  <section class="py-16 px-6 md:px-12 max-w-6xl mx-auto">
    <div class="md:flex md:items-center md:gap-12">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h2 class="text-3xl font-bold mb-4" style="color: #1c3452;">Our Story</h2>
        <p class="mb-4">
          Founded in 20XX, Digital Co. started with a mission to redefine the digital experience. Our team of developers, designers, and strategists work together to build user-first products that scale.
        </p>
        <p>
          We've partnered with startups, enterprises, and nonprofits across industries — building everything from MVPs to enterprise-grade platforms.
        </p>
      </div>
      <div class="md:w-1/2">
      </div>
    </div>
  </section>

  <!-- Mission, Vision, Values -->
  <section class="bg-gray-100 py-16">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold text-center mb-12" style="color: #1c3452;">Mission • Vision • Values</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Mission -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4" style="border-color: #7cbe3f;">
          <h3 class="text-2xl font-semibold mb-3" style="color: #1c3452;">Mission</h3>
          <p>To empower organizations with impactful digital solutions that are both beautiful and functional.</p>
        </div>
        <!-- Vision -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4" style="border-color: #7cbe3f;">
          <h3 class="text-2xl font-semibold mb-3" style="color: #1c3452;">Vision</h3>
          <p>To become a globally trusted partner in delivering user-focused, tech-driven solutions that create lasting impact.</p>
        </div>
        <!-- Values -->
        <div class="bg-white p-6 rounded-lg shadow border-l-4" style="border-color: #7cbe3f;">
          <h3 class="text-2xl font-semibold mb-3" style="color: #1c3452;">Values</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Innovation:</strong> We push beyond the obvious.</li>
            <li><strong>Integrity:</strong> We do what's right, always.</li>
            <li><strong>Excellence:</strong> We deliver quality that lasts.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>




<section>
<div class="my-30 h-150 lg:h-100  py-10 ">
<div class="text-center text-3xl font-bold font-sans">Our Patners</div>

<div class=" gap-10 grid grid-cols-2 lg:grid lg:grid-cols-4 px-10 my-15 ">
<div class=" h-50"><img src="/public/images/sv.png" class="h-full w-full object-cover"></div>
<div class=" h-50"><img src="/public/images/sv.png"   class="h-full w-full object-cover"></div>
<div class=" h-50"><img src="/public/images/sv.png"  class="h-full w-full object-cover"></div>
<div class=" h-50"><img src="/public/images/sv.png"  class="h-full w-full object-cover"></div>

</div>
</div>
</section>








  <!-- Call to Action -->
  <section class="py-16 text-white text-center" style="background-color: #1c3452;">
    <h2 class="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
    <p class="mb-6">Start your next project with us — we’re ready when you are.</p>
    <a href="/contact" class="inline-block px-8 py-3 font-semibold rounded-lg" style="background-color: #7cbe3f; color: #1c3452;">Contact Us</a>
  </section>

  <footer class="py-8 text-center text-sm text-gray-500 bg-gray-100">
    &copy; <span id="year"></span> Digital Co. All rights reserved.
  </footer>



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

const currentSlide = ref(0)

const slides = [
  {
    title: 'Secure Your Digital Assets with Confidence',
    description:
      'Comprehensive insurance solutions for cryptocurrencies, NFTs, and digital investments. Protect your digital wealth from theft, loss, and cyber threats.',
    cta1: 'Get Protected Today',
    cta2: 'Learn More',
    stats: {
      portfolio: '$245,780',
      insured: '$208,913',
      coveragePercent: '85%',
    },
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
    stats: {
      portfolio: '$312,000',
      insured: '$280,000',
      coveragePercent: '90%',
    },
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
    cta1: 'Customize Plan',
    cta2: 'View Pricing',
    stats: {
      portfolio: '$410,500',
      insured: '$360,000',
      coveragePercent: '88%',
    },
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

// Lifecycle hook
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>
