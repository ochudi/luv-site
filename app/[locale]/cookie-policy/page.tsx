"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-sm text-yellow-600 hover:underline mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Cookie Policy</h1>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device by your browser when you visit websites. They help websites remember your preferences and improve your experience.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our site, remember your preferences, and enhance your experience. Some cookies are essential for the site to function properly.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Third-Party Cookies</h2>
            <p>Some cookies may be set by third-party services we use, such as analytics providers. We do not control these cookies, and you should check the respective third-party websites for more information.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of those changes.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at <a href="mailto:dataprotection@lifeupsideview.org" className="text-yellow-600 underline">dataprotection@lifeupsideview.org</a>.</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
} 