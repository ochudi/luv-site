"use client";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations('policies');
  const p = useTranslations('policies.privacyPolicy');
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
            <h2 className="text-xl font-semibold mb-2">{p('whoWeAre')}</h2>
            <p>{p('whoWeAreText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('cookies')}</h2>
            <p>{p('cookiesText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('googleAnalytics')}</h2>
            <p>{p('googleAnalyticsText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('websiteComments')}</h2>
            <p>{p('websiteCommentsText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('thirdParties')}</h2>
            <p>{p('thirdPartiesText')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('accessToInfo')}</h2>
            <p>{p('accessToInfoText').replace('dataprotection@lifeupsideview.org', '')} <b>Revens</b> {p('accessToInfoText').includes('at') ? 'at' : 'à'} <a href="mailto:dataprotection@lifeupsideview.org" className="text-yellow-600 underline">dataprotection@lifeupsideview.org</a> {p('accessToInfoText').split('dataprotection@lifeupsideview.org')[1] || ''}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">{p('changes')}</h2>
            <p>{p('changesText')}</p>
          </section>
        </div>
      </div>
    </motion.section>
  );
} 