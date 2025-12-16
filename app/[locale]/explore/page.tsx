"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ExplorePage() {
  const t = useTranslations('explore');
  
  const cards = [
    { titleKey: 'guidedJournals' },
    { titleKey: 'wellnessPlaylists' },
    { titleKey: 'mindfulArticles' },
  ];

  return (
    <div>
      <section className="py-24 bg-background text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {t('title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto px-4"
        >
          {t('subtitle')}
        </motion.p>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 hover:bg-accent rounded-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{t(card.titleKey)}</h3>
              <p className="text-muted-foreground mb-4">
                {t('cardDescription')}
              </p>
              <Link
                href="#"
                className="text-primary inline-flex items-center hover:underline"
              >
                {t('exploreNow')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
