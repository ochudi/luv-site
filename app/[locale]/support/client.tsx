"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, PhoneCall } from "lucide-react";
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

const emphasis = (chunks: React.ReactNode) => (
  <span className="italic text-accent-warm">{chunks}</span>
);

export default function SupportPage() {
  const t = useTranslations("support");

  const emergencySteps = [t("step1"), t("step2"), t("step3"), t("step4")];

  const supportOptions = [1, 2, 3].map((i) => ({
    number: `0${i}`,
    title: t(`option${i}Title`),
    description: t(`option${i}Desc`),
  }));

  return (
    <div className="bg-background">
      {/* HEADER */}
      <section className="pt-40 md:pt-44 pb-20 md:pb-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-destructive">
                — {t("eyebrowHelpNow")}
              </p>
              <p className="eyebrow mt-1">{t("eyebrowSupport")}</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                {t.rich("h1", { em: emphasis })}
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">{t("lede")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAFETY PLAN */}
      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-destructive">— I.</p>
              <p className="eyebrow mt-1">{t("eyebrowImmediate")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight mb-12 max-w-3xl">
                {t("safetyPlanH2")}
              </h2>
              <ol className="border-t border-border max-w-2xl">
                {emergencySteps.map((step, i) => (
                  <li
                    key={i}
                    className="py-6 border-b border-border grid grid-cols-12 gap-4 items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-foreground/40">
                      0{i + 1}
                    </span>
                    <span className="col-span-10 text-[15px] md:text-base leading-relaxed text-foreground/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-12 flex flex-wrap gap-3">
                <a href="tel:112" className="btn-solid">
                  <PhoneCall className="h-3.5 w-3.5 mr-3" />
                  {t("callEmergency")}
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {t("findHelpline")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="py-24 md:py-32 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— II.</p>
              <p className="eyebrow mt-1">{t("eyebrowPathways")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl">
                {t("pathwaysH2")}
              </h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {supportOptions.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
                className="pt-8 border-t border-border"
              >
                <p className="eyebrow text-foreground/40 mb-8">
                  {item.number}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASKING */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— III.</p>
              <p className="eyebrow mt-1">{t("eyebrowAsking")}</p>
            </div>
            <div className="md:col-span-9 max-w-3xl">
              <h2 className="font-serif display-2 tracking-tight mb-10">
                {t("askingH2")}
              </h2>
              <blockquote className="font-serif italic text-2xl md:text-3xl tracking-tight leading-snug border-l-2 border-foreground pl-6 md:pl-8 mb-10 max-w-2xl">
                &ldquo;{t("askingQuote")}&rdquo;
              </blockquote>
              <p className="text-[15px] text-muted-foreground mb-10 max-w-xl">
                {t("askingLede")}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 pt-10 border-t border-border">
                <Link href="/self-help" className="link-quiet">
                  {t("linkSelfHelp")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/checkups" className="link-quiet">
                  {t("linkCheckup")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
