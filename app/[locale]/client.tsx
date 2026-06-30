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

  // Scroll-linked transforms for the promise video (y.co-style reveal).
  // The video pins and scrolls over the promise statement, then scrolls away as
  // the next section rises over it. Kept subtle, per the reviewer's note.
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start start", "end end"],
  });
  // The video rises from below over the promise, covers the frame, then holds
  // until the section unpins and the next block scrolls over it.
  const videoRise = useTransform(scrollYProgress, [0, 0.6, 1], ["100%", "0%", "0%"]);
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1.18, 1]);

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

  const testimonials = [1, 2, 3, 4].map((i) => ({
    quote: t(`testimonial${i}Quote`),
    author: t(`testimonial${i}Author`),
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
          <h1 className="font-serif text-white text-center display-1">
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.3,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="block"
              >
                {t("heroHeadline")}
              </motion.span>
            </span>
          </h1>
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

      {/* ───── PATHS ─ left-aligned editorial list ───── */}
      <section className="py-28 md:py-40">
        <div className="editorial-container">
          {/* Heading — left aligned */}
          <motion.div {...fadeUp} className="max-w-3xl mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-7">
              <span className="eyebrow text-accent-warm">01</span>
              <span className="h-px w-8 bg-foreground/25" />
              <span className="eyebrow">{t("eyebrowWhoWeSupport")}</span>
            </div>
            <h2 className="font-serif display-2 leading-[1.05]">
              {t("whoWeSupportH2")}
            </h2>
          </motion.div>

          {/* Paths — premium, left-aligned rows */}
          <div className="border-t border-foreground/15">
            {supportPaths.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * i }}
                className="border-b border-foreground/15"
              >
                <Link
                  href={item.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6 md:gap-x-10 py-9 md:py-12
                             transition-[padding] duration-500 ease-out md:hover:pl-4"
                >
                  <div className="md:col-span-1 font-serif text-2xl md:text-3xl text-accent-warm leading-none">
                    {item.number}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-tight group-hover:opacity-60 transition-opacity duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex md:justify-end items-start">
                    <span className="link-quiet text-foreground">
                      {item.cta}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── PROMISE + VIDEO ─ y.co-style scroll-over reveal ───── */}
      <section ref={revealRef} className="relative bg-background md:h-[240vh]">
        {/* Desktop: a big full-width statement, with the video scrolling up over
            it (full-frame), holding, then scrolling away as the next section rises. */}
        <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 flex items-start">
            <div className="editorial-container pt-[18vh]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
              >
                <p className="eyebrow text-accent-warm mb-6">{t("eyebrowNote")}</p>
                <h2 className="font-serif display-1 leading-[0.95]">{t("missionLine")}</h2>
              </motion.div>
            </div>
          </div>

          {/* Covers the right 3/4 so the left of the statement stays visible. */}
          <motion.div
            style={{ y: videoRise }}
            className="absolute inset-y-0 right-0 left-1/4 overflow-hidden will-change-transform"
          >
            <motion.div style={{ scale: videoScale }} className="absolute -inset-[6%]">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/videos/beyond.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </motion.div>
        </div>

        {/* Mobile: clean stacked layout — promise, then the video. */}
        <div className="md:hidden">
          <motion.div {...fadeUp} className="editorial-container pt-20 pb-14">
            <p className="eyebrow text-accent-warm mb-5">{t("eyebrowNote")}</p>
            <h2 className="font-serif display-2 leading-[1.1] max-w-sm">
              {t("missionLine")}
            </h2>
          </motion.div>
          <div className="relative h-[68svh] overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/beyond.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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
              <h2 className="font-serif display-2 max-w-3xl">
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
                  <div className="col-span-2 md:col-span-1 font-serif text-2xl md:text-3xl text-accent-warm">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
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

      {/* ───── IMPACT ─ numbers ───── */}
      <section className="py-28 md:py-40 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-3">
              <p className="eyebrow text-accent-warm">03</p>
              <p className="eyebrow mt-1">{t("eyebrowImpact")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 max-w-3xl">
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
                <p className="font-serif text-6xl md:text-7xl tracking-tight mb-4 text-accent-warm">
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

      {/* ───── TESTIMONIALS ─ in their words ───── */}
      <section className="py-28 md:py-40 border-t border-border bg-background">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
            <div className="md:col-span-3">
              <p className="eyebrow text-accent-warm">04</p>
              <p className="eyebrow mt-1">{t("eyebrowTestimonials")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 max-w-3xl">
                {t("testimonialsH2")}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 border-t-2 border-foreground pt-12 md:pt-16">
            {testimonials.map((item, i) => (
              <motion.figure
                key={item.author + i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
                className="flex flex-col"
              >
                <span aria-hidden className="font-serif text-5xl leading-none text-accent-warm mb-5">
                  &ldquo;
                </span>
                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 eyebrow text-muted-foreground">
                  {item.author}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CLOSING CTA ─ big yellow ───── */}
      <section className="py-28 md:py-44 border-t border-border bg-background">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="max-w-5xl">
            <p className="eyebrow text-accent-warm mb-8">05</p>
            <h2 className="font-serif display-1 mb-12">
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
