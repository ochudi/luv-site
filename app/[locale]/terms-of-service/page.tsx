"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-sm text-yellow-600 hover:underline mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p>Welcome to lifeupsideview.org. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. Please read them carefully.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
            <p>By using this site, you signify your acceptance of these terms. If you do not agree, please do not use our site. We reserve the right to update or change these terms at any time.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
            <p>You agree to use this site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
            <p>All content on this site, including text, graphics, logos, and images, is the property of lifeupsideview.org or its content suppliers and is protected by copyright laws. Unauthorized use is prohibited.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
            <p>We do our best to ensure the accuracy of information on this site, but we make no warranties or guarantees. We are not liable for any loss or damage arising from your use of the site.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Continued use of the site after any changes constitutes your acceptance of the new terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:dataprotection@lifeupsideview.org" className="text-yellow-600 underline">dataprotection@lifeupsideview.org</a>.</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
} 