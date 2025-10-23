<template>
  <div>
    <!-- Header/Navigation -->
    <HeaderComp />

    <!-- Main Content -->
    <main class="py-12 bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4">
        <div class="text-center my-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">Last updated: October 15, 2023</p>
          <p class="text-gray-500 mt-2">Please read these terms carefully before using our services</p>
        </div>

        <div class="bg-white rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
          <!-- Acceptance of Terms -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">1. Acceptance of Terms</h2>
            <p class="mb-4 text-gray-700">By accessing or using Assets Insurify ("the Platform"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Platform.</p>
            <p class="text-gray-700">We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the Platform after any changes constitutes your acceptance of the new Terms.</p>
          </section>

          <!-- Definitions -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">2. Definitions</h2>
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
              <li><span class="font-semibold">"Platform"</span> refers to Assets Insurify digital assets insurance services, website, and related applications.</li>
              <li><span class="font-semibold">"User"</span> refers to any individual or entity that accesses or uses the Platform.</li>
              <li><span class="font-semibold">"Digital Assets"</span> refers to cryptocurrencies, NFTs, tokens, and other blockchain-based assets.</li>
              <li><span class="font-semibold">"Insurance Policy"</span> refers to the contractual agreement between the User and Assets Insurify.</li>
              <li><span class="font-semibold">"Claim"</span> refers to a formal request for compensation under an Insurance Policy.</li>
            </ul>
          </section>

          <!-- Eligibility -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">3. Eligibility</h2>
            <p class="mb-4 text-gray-700">To use our Platform, you must:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from receiving our services under applicable laws</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Not be a resident of prohibited jurisdictions</li>
            </ul>
            <p class="text-gray-700">We reserve the right to refuse service to anyone for any reason at any time.</p>
          </section>

          <!-- Account Registration -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">4. Account Registration</h2>
            <p class="mb-4 text-gray-700">To access certain features of the Platform, you must register for an account. You agree to:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <div class="bg-yellow-50 p-5 border-l-4 border-yellow-400 my-6 rounded-r">
              <p class="font-semibold text-gray-800">You are solely responsible for maintaining the confidentiality of your account and password.</p>
            </div>
          </section>

          <!-- Insurance Services -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">5. Insurance Services</h2>
            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Policy Coverage</h3>
            <p class="mb-4 text-gray-700">Our insurance policies cover specific risks associated with digital assets as outlined in each policy document. Coverage may include but is not limited to:</p>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Theft from secured wallets</li>
              <li>Exchange hacks and security breaches</li>
              <li>Smart contract vulnerabilities</li>
              <li>Private key loss or compromise</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Exclusions</h3>
            <p class="mb-4 text-gray-700">Insurance coverage does not extend to:</p>
            <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Market value fluctuations</li>
              <li>Losses due to user negligence</li>
              <li>Unauthorized transactions where security protocols were not followed</li>
              <li>Losses from unapproved wallets or exchanges</li>
              <li>Regulatory actions or government seizures</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Claims Process</h3>
            <p class="text-gray-700">Claims must be submitted through our official channels with all required documentation. We reserve the right to investigate claims and deny coverage if terms are violated.</p>
          </section>

          <!-- User Responsibilities -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">6. User Responsibilities</h2>
            <p class="mb-4 text-gray-700">As a User, you agree to:</p>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
              <li>Comply with all applicable laws and regulations</li>
              <li>Implement reasonable security measures for your digital assets</li>
              <li>Promptly report any security incidents or suspicious activities</li>
              <li>Provide accurate information for insurance applications and claims</li>
              <li>Not engage in fraudulent activities or misrepresentation</li>
              <li>Not use the Platform for illegal purposes</li>
            </ul>
          </section>

          <!-- Fees and Payments -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">7. Fees and Payments</h2>
            <p class="mb-4 text-gray-700">You agree to pay all applicable fees for insurance policies and services as described on the Platform. Fees may include:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Insurance premiums</li>
              <li>Processing fees</li>
              <li>Administrative charges</li>
              <li>Any applicable taxes</li>
            </ul>
            <p class="text-gray-700">All fees are non-refundable unless otherwise specified in the policy terms or required by law.</p>
          </section>

          <!-- Intellectual Property -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">8. Intellectual Property</h2>
            <p class="mb-4 text-gray-700">The Platform and its original content, features, and functionality are owned by Assets Insurify and are protected by international copyright, trademark, and other intellectual property laws.</p>
            <p class="text-gray-700">You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any part of the Platform without our express written permission.</p>
          </section>

          <!-- Privacy -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">9. Privacy</h2>
            <p class="mb-4 text-gray-700">Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using the Platform, you agree to the collection and use of information in accordance with our Privacy Policy.</p>
            <p class="text-gray-700">We implement security measures to protect your data, but cannot guarantee absolute security due to the nature of digital communications.</p>
          </section>

          <!-- Limitation of Liability -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">10. Limitation of Liability</h2>
            <p class="mb-4 text-gray-700">To the maximum extent permitted by law, Assets Insurify shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            <div class="bg-red-50 p-5 border-l-4 border-red-400 my-6 rounded-r">
              <p class="font-semibold text-gray-800">Our total cumulative liability to you for all claims arising from or related to the Platform shall not exceed the amount of fees paid by you to us in the six months preceding the claim.</p>
            </div>
          </section>

          <!-- Indemnification -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">11. Indemnification</h2>
            <p class="text-gray-700">You agree to defend, indemnify, and hold harmless Assets Insurify and its affiliates, officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li>Your use of and access to the Platform</li>
              <li>Your violation of any term of these Terms of Service</li>
              <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>
          </section>

          <!-- Termination -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">12. Termination</h2>
            <p class="mb-4 text-gray-700">We may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p class="text-gray-700">Upon termination, your right to use the Platform will cease immediately. If you wish to terminate your account, you may simply discontinue using the Platform.</p>
          </section>

          <!-- Governing Law -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">13. Governing Law</h2>
            <p class="text-gray-700">These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
          </section>

          <!-- Dispute Resolution -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">14. Dispute Resolution</h2>
            <p class="mb-4 text-gray-700">Any dispute arising from these Terms or your use of the Platform shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
            <p class="text-gray-700">You agree to resolve disputes on an individual basis and waive any right to participate in class actions or class-wide arbitration.</p>
          </section>

          <!-- Changes to Terms -->
          <section class="mb-10">
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">15. Changes to Terms</h2>
            <p class="mb-4 text-gray-700">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
            <p class="text-gray-700">By continuing to access or use our Platform after those revisions become effective, you agree to be bound by the revised terms.</p>
          </section>

          <!-- Contact Information -->
          <section>
            <h2 class="text-2xl font-bold text-black-800 mb-4 pb-2 border-b border-gray-200">16. Contact Information</h2>
            <p class="mb-4 text-gray-700">If you have any questions about these Terms, please contact us:</p>

            <div class="bg-gray-50 p-6 rounded-lg mt-6">
              <p class="font-semibold mb-2 text-gray-900">Assets Insurify Legal Department</p>
              <p class="mb-1 text-gray-700"><i class="fas fa-envelope mr-2 text-black-800"></i>legal@assetsinsurify.com</p>
              <p class="mb-1 text-gray-700"><i class="fas fa-map-marker-alt mr-2 text-black-800"></i>123 Security Boulevard, Digital District, Tech City 10101</p>
              <p class="text-gray-700"><i class="fas fa-phone mr-2 text-black-800"></i>+1 (555) 123-4567</p>
            </div>
          </section>

          <!-- Acceptance -->
          <section class="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 class="text-xl font-bold text-black-800 mb-3">Acceptance of Terms</h2>
            <p class="text-gray-700">By using Assets Insurify, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <FooterComp />
  </div>
</template>

<script setup>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
