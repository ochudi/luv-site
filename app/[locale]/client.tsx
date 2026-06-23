"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function Home() {
  const t = useTranslations("home");

  // Scroll-linked transforms for the second video (y.co-style)
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.92]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.55, 0.25, 0.25, 0.55]);

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

  return (
    <div className="relative overflow-x-clip bg-background">
      {/* ───── HERO ─ minimal, one line ───── */}
      <section className="hero-section relative z-20 min-h-[100svh] md:min-h-screen flex items-center justify-center">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/75" />
        </div>

        <div className="editorial-container relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="font-sans uppercase text-white text-center display-1"
          >
            {t("heroHeadline")}
          </motion.h1>
        </div>

        {/* Yellow-bordered search bar at the bottom, y.co-style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 md:px-10 lg:px-16"
        >
          <div className="max-w-5xl mx-auto">
            <SearchHero tone="dark" />
          </div>
        </motion.div>
      </section>

      {/* ───── PATHS ─ three tiles ───── */}
      <section className="py-28 md:py-40">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-24">
            <div className="md:col-span-3">
              <p className="eyebrow text-accent-warm">01</p>
              <p className="eyebrow mt-1">{t("eyebrowWhoWeSupport")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-sans uppercase display-2 max-w-3xl">
                {t("whoWeSupportH2")}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {supportPaths.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className="group relative pt-8 border-t-2 border-foreground"
              >
                <p className="font-sans font-bold text-3xl text-accent-warm mb-6">
                  {item.number}
                </p>
                <h3 className="font-sans uppercase font-bold text-xl md:text-2xl tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-sm">
                  {item.description}
                </p>
                <Link href={item.href} className="link-quiet text-foreground">
                  {item.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PARALLAX VIDEO ─ y.co-style scrolling video ───── */}
      <section
        ref={parallaxRef}
        className="relative h-[120vh] md:h-[140vh] bg-background overflow-hidden"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale: videoScale, y: videoY }}
            className="absolute inset-0 will-change-transform"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/beyond.mp4" type="video/mp4" />
            </video>
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-black"
            />
          </motion.div>
          <div className="editorial-container relative z-10 text-center text-white">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="eyebrow text-[hsl(var(--accent))] mb-6"
            >
              {t("eyebrowNote")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="font-sans uppercase display-2 max-w-4xl mx-auto"
            >
              {t("missionLine")}
            </motion.h2>
          </div>
        </div>
      </section>

      {/* ───── RESOURCES ─ pathway list ───── */}
      <section className="py-28 md:py-40 bg-background">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-3">
              <p className="eyebrow text-accent-warm">02</p>
              <p className="eyebrow mt-1">{t("eyebrowResources")}</p>
            </div>
            <div className="md:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-sans uppercase display-2 max-w-3xl">
                {t("findYourPathway")}
              </h2>
              <Link href="/self-help" className="link-quiet text-foreground shrink-0">
                {t("viewAll")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <div className="border-t-2 border-foreground">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
              >
                <Link
                  href={r.href}
                  className="group grid grid-cols-12 gap-4 md:gap-10 py-8 md:py-12 border-b border-border hover:bg-[hsl(var(--accent))]/10 transition-colors duration-300 px-2 -mx-2"
                >
                  <div className="col-span-2 md:col-span-1 font-sans font-bold text-2xl md:text-3xl text-accent-warm">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-sans uppercase font-bold text-2xl md:text-3xl tracking-tight">
                      {r.title}
                    </h3>
                  </div>
                  <div className="hidden md:block md:col-span-5">
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                  <div className="hidden md:flex md:col-span-1 justify-end items-center">
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Crisis ribbon */}
          <motion.div {...fadeUp} className="mt-16 md:mt-20">
            <div className="border-2 border-destructive bg-card p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="eyebrow text-destructive mb-3">
                  {t("crisisEyebrow")}
                </p>
                <p className="font-sans uppercase font-bold text-xl md:text-2xl tracking-tight leading-snug">
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

      {/* ───── IMPACT ─ numbers ───── */}
      <section className="py-28 md:py-40 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-3">
              <p className="eyebrow text-accent-warm">03</p>
              <p className="eyebrow mt-1">{t("eyebrowImpact")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-sans uppercase display-2 max-w-3xl">
                {t("impactH2")}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-foreground">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className={`py-12 md:py-16 ${
                  i < metrics.length - 1 ? "md:border-r border-border" : ""
                } md:px-10`}
              >
                <p className="font-sans font-extrabold text-6xl md:text-7xl tracking-tight mb-4 text-accent-warm">
                  {m.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.18em] font-semibold max-w-[20ch]">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CLOSING CTA ─ big yellow ───── */}
      <section className="py-28 md:py-44 border-t border-border bg-background">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="max-w-5xl">
            <p className="eyebrow text-accent-warm mb-8">04</p>
            <h2 className="font-sans uppercase display-1 mb-12">
              {t("closingH2")}
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link href="/support" className="btn-solid">
                {t("closingLink1")}
              </Link>
              <Link href="/self-help" className="btn-ghost">
                {t("closingLink2")}
              </Link>
              <Link href="/write" className="btn-ghost">
                {t("closingLink3")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
