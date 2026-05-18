"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import SearchHero from "@/components/SearchHero";

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
const emphasisOnDark = (chunks: React.ReactNode) => (
  <span className="italic text-white/85">{chunks}</span>
);

export default function Home() {
  const t = useTranslations("home");

  const supportPaths = [1, 2, 3].map((i) => ({
    number: `0${i}`,
    title: t(`supportPath${i}Title`),
    description: t(`supportPath${i}Desc`),
    cta: t(`supportPath${i}Cta`),
    href: i === 1 ? "/support" : i === 2 ? "/self-help" : "/stories/all-stories",
  }));

  const resources = [1, 2, 3].map((i) => ({
    title: t(`resource${i}Title`),
    description: t(`resource${i}Desc`),
    href: i === 1 ? "/self-help" : i === 2 ? "/checkups" : "/support",
  }));

  const metrics = [1, 2, 3].map((i) => ({
    value: t(`metric${i}Value`),
    label: t(`metric${i}Label`),
  }));

  const testimonials = [1, 2, 3].map((i) => ({
    quote: t(`testimonial${i}Quote`),
    name: t(`testimonial${i}Name`),
  }));

  return (
    <div className="relative overflow-x-clip bg-background">
      {/* HERO */}
      <section className="hero-section relative z-20 min-h-[100svh] md:min-h-screen flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        </div>

        <div className="editorial-container relative z-10 pb-12 md:pb-28 pt-32 md:pt-40 hero-content w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-10 md:gap-x-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="md:col-span-9"
            >
              <p className="eyebrow text-white/80 mb-5 md:mb-8">
                {t("brand")}
              </p>
              <h1 className="font-serif text-white display-1 max-w-5xl">
                {t("heroLine1")}
                <br />
                <span className="italic text-white/85">{t("heroLine2")}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="md:col-span-3 md:pl-6 md:border-l border-white/25"
            >
              <p className="hidden md:block text-white/85 text-[15px] leading-relaxed mb-8 max-w-sm">
                {t("heroDescription")}
              </p>
              <div className="flex flex-row md:flex-col items-start gap-x-8 gap-y-4 flex-wrap">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 text-white border-b border-white pb-1 text-[11px] uppercase tracking-[0.24em] font-medium hover:gap-3 transition-all duration-300"
                >
                  {t("getHelpNow")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/write"
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white text-[11px] uppercase tracking-[0.24em] font-medium transition-colors"
                >
                  {t("shareYourStory")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="mt-10 md:mt-20 max-w-xl"
          >
            <SearchHero tone="dark" />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 pointer-events-none">
          <div className="relative h-9 w-[22px] rounded-full border border-white/60 flex items-start justify-center pt-1.5">
            <span className="block h-1.5 w-[3px] rounded-full bg-white/85 animate-scroll-dot" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.32em] text-white/55">
            {t("scroll")}
          </p>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="py-28 md:py-40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— I.</p>
              <p className="eyebrow mt-1">{t("eyebrowWhoWeSupport")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-4xl">
                {t.rich("whoWeSupportH2", { em: emphasis })}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {supportPaths.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className="group relative pt-8 border-t border-border"
              >
                <p className="eyebrow text-foreground/40 mb-8">
                  {item.number}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-sm">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] font-medium border-b border-current pb-1 hover:gap-3 transition-all duration-300"
                >
                  {item.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION LINE */}
      <section className="py-24 md:py-36 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— II.</p>
              <p className="eyebrow mt-1">{t("eyebrowNote")}</p>
            </div>
            <div className="md:col-span-9">
              <p className="font-serif text-2xl md:text-4xl leading-[1.25] tracking-tight text-foreground max-w-4xl">
                {t.rich("missionLine", {
                  em: (chunks) => <span className="italic">{chunks}</span>,
                })}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="py-28 md:py-40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— III.</p>
              <p className="eyebrow mt-1">{t("eyebrowResources")}</p>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl">
                {t("findYourPathway")}
              </h2>
              <Link href="/self-help" className="link-quiet text-foreground">
                {t("viewAll")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <div className="border-t border-border">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
              >
                <Link
                  href={r.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-border hover:bg-muted/40 transition-colors duration-500 px-2 -mx-2"
                >
                  <div className="md:col-span-1 eyebrow text-foreground/40">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                      {r.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-center">
                    <ArrowUpRight className="h-5 w-5 text-foreground/60 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Crisis ribbon */}
          <motion.div {...fadeUp} className="mt-16 md:mt-20">
            <div className="border border-border bg-card p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow text-destructive mb-3">
                  {t("crisisEyebrow")}
                </p>
                <p className="font-serif text-xl md:text-2xl tracking-tight leading-snug">
                  {t("crisisLine")}
                </p>
              </div>
              <Link href="/support" className="btn-solid shrink-0">
                {t("crisisCta")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-28 md:py-40 border-t border-border bg-muted/30">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— IV.</p>
              <p className="eyebrow mt-1">{t("eyebrowImpact")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl">
                {t("impactH2")}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className={`py-12 md:py-16 ${
                  i < metrics.length - 1 ? "md:border-r border-border" : ""
                } md:px-10`}
              >
                <p className="font-serif text-6xl md:text-7xl tracking-tight mb-4">
                  {m.value}
                </p>
                <p className="text-sm text-muted-foreground max-w-[16ch]">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {testimonials.map((tm, i) => (
              <motion.figure
                key={tm.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className="pt-8 border-t border-border"
              >
                <blockquote className="font-serif text-xl md:text-2xl italic leading-snug text-foreground/90 mb-8">
                  &ldquo;{tm.quote}&rdquo;
                </blockquote>
                <figcaption className="eyebrow text-foreground/60">
                  — {tm.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 md:py-44 border-t border-border">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="max-w-5xl">
            <p className="eyebrow mb-8">— {t("eyebrowBegin")}</p>
            <h2 className="font-serif display-1 tracking-tight mb-12">
              {t.rich("closingH2", { em: emphasis })}
            </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <Link href="/support" className="link-quiet text-foreground">
                {t("closingLink1")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/self-help" className="link-quiet text-foreground">
                {t("closingLink2")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/write" className="link-quiet text-foreground">
                {t("closingLink3")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/checkups" className="link-quiet text-foreground">
                {t("closingLink4")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
