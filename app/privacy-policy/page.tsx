"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-sm text-yellow-600 hover:underline mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
            <p>At <b>lifeupsideview.org</b>, we are committed to maintaining the trust and confidence of all visitors to our website. We do not sell, rent, or trade email lists with other companies and businesses for marketing purposes.</p>
            <p>This Privacy Policy provides detailed information on when and why we collect personal information, how we use it, the limited conditions under which we may disclose it to others, and how we keep it secure.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p>We may set and access cookies on your computer to provide our system with the basic information required to deliver the services you request. Cookies can be cleared at any time from your internet browser settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Google Analytics</h2>
            <p>When someone visits <b>lifeupsideview.org</b>, we use a third-party service, Google Analytics, to collect standard internet log information and details of visitor behaviour patterns. This information is processed in a way which does not identify anyone. We do not make, and do not allow Google to make, any attempt to find out the identities of visitors to our website.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Website Comments</h2>
            <p>When someone visits <b>lifeupsideview.org</b>, there may be an ability to submit comments on particular articles or pages. When comments are submitted, you are entitled to use aliases or information that completely hides your identity. Relevant details (name, email, website) that you provide are stored to display your comment back to you and to anyone viewing the comment sections. We do not verify information entered nor do we require verification.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Third Parties</h2>
            <p>There may be some circumstances where your IP address, geographic location, and other browser-related details may be shared with third-party companies. We may share your above-mentioned data with third-party companies from time to time.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Access to Your Personal Information</h2>
            <p>You are entitled to view, amend, or delete the personal information that we hold. Email your request to our data protection officer <b>Revens</b> at <a href="mailto:revenserom@gmail.com" className="text-yellow-600 underline">revenserom@gmail.com</a> and we will work with you to remove any of your personal data we may have.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to Our Privacy Policy</h2>
            <p>We may make changes to our Privacy Policy in the future; the most current version will govern our processing of your personal data and will always be available to you. If we make a material change, we will notify you by update or email, where possible. By continuing to access or use our services, you agree to be bound to the terms of our Privacy Policy.</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
} 