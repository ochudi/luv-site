"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function TermsOfServicePage() {
  const t = useTranslations('policies');
  const p = useTranslations('policies.termsOfService');
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-sm text-yellow-600 hover:underline mb-6 inline-block">{t('backToHome')}</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{p('title')}</h1>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('introduction')}</h2>
            <p>{p('introductionText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('acceptance')}</h2>
            <p>{p('acceptanceText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('userResponsibilities')}</h2>
            <p>{p('userResponsibilitiesText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('intellectualProperty')}</h2>
            <p>{p('intellectualPropertyText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('limitation')}</h2>
            <p>{p('limitationText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('changes')}</h2>
            <p>{p('changesText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('contact')}</h2>
            <p>{p('contactText').split('dataprotection@lifeupsideview.org')[0]} <a href="mailto:dataprotection@lifeupsideview.org" className="text-yellow-600 underline">dataprotection@lifeupsideview.org</a>.</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
} 