"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const cards = [
  { titleKey: "guidedJournals", slug: "guided-journals" },
  { titleKey: "wellnessPlaylists", slug: "wellness-playlists" },
  { titleKey: "mindfulArticles", slug: "mindful-articles" },
];

export default function ExplorePage() {
  const t = useTranslations("explore");

  return (
    <div className="bg-background">
      <section className="pt-40 md:pt-44 pb-20 md:pb-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— Explore</p>
              <p className="eyebrow mt-1">Discover</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                {t("title")}
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="editorial-container">
          <div className="border-t border-border">
            {cards.map((card, i) => (
              <motion.div
                key={card.titleKey}
                id={card.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 * i }}
              >
                <Link
                  href="#"
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b border-border hover:bg-muted/40 transition-colors duration-500 px-2 -mx-2"
                >
                  <div className="md:col-span-1 eyebrow text-foreground/40">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                      {t(card.titleKey)}
                    </h2>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
                      {t("cardDescription")}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] font-medium">
                      {t("exploreNow")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
