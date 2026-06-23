"use client";

import { useMemo, useState } from "react";
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

const emphasis = (chunks: React.ReactNode) => (
  <span className="italic text-accent-warm">{chunks}</span>
);

export default function SelfHelpPage() {
  const t = useTranslations("selfHelp");
  const [mood, setMood] = useState(5);

  const breathSteps = [
    { count: "4", label: t("breathInhale") },
    { count: "4", label: t("breathHold") },
    { count: "6", label: t("breathExhale") },
    { count: "2", label: t("breathPause") },
  ];

  const groundingPrompts = [
    { count: "5", label: t("ground5") },
    { count: "4", label: t("ground4") },
    { count: "3", label: t("ground3") },
    { count: "2", label: t("ground2") },
    { count: "1", label: t("ground1") },
  ];

  const cbtReframes = [1, 2, 3].map((i) => ({
    trigger: t(`reframe${i}Trigger`),
    reframe: t(`reframe${i}Reframe`),
  }));

  const moodGuidance = useMemo(() => {
    if (mood <= 3) return t("moodLow");
    if (mood <= 7) return t("moodModerate");
    return t("moodHigher");
  }, [mood, t]);

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
              <p className="eyebrow">{t("eyebrowToolkit")}</p>
              <p className="eyebrow mt-1">{t("eyebrowSelfHelp")}</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                {t.rich("h1", { em: emphasis })}
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                {t("lede")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE TOOLS */}
      <section className="py-24 md:py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
            <motion.div {...fadeUp} className="pt-8 border-t border-border">
              <p className="eyebrow text-foreground/40 mb-8">{t("breathLabel")}</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                {t("breathTitle")}
              </h2>
              <ul className="space-y-1">
                {breathSteps.map((step) => (
                  <li
                    key={step.label}
                    className="grid grid-cols-12 py-3 border-b border-border items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-accent-warm">
                      {step.count}
                    </span>
                    <span className="col-span-10 text-[15px] text-foreground/80">
                      {step.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="pt-8 border-t border-border"
            >
              <p className="eyebrow text-foreground/40 mb-8">{t("groundLabel")}</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                {t("groundTitle")}
              </h2>
              <ul className="space-y-1">
                {groundingPrompts.map((p) => (
                  <li
                    key={p.count}
                    className="grid grid-cols-12 py-3 border-b border-border items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-accent-warm">
                      {p.count}
                    </span>
                    <span className="col-span-10 text-[15px] text-foreground/80">
                      {p.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="pt-8 border-t border-border"
            >
              <p className="eyebrow text-foreground/40 mb-8">{t("reframeLabel")}</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                {t("reframeTitle")}
              </h2>
              <ul className="space-y-6">
                {cbtReframes.map((item) => (
                  <li
                    key={item.trigger}
                    className="border-l-2 border-foreground/20 pl-5"
                  >
                    <p className="font-serif italic text-foreground mb-2">
                      &ldquo;{item.trigger}&rdquo;
                    </p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {item.reframe}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOOD CHECK */}
      <section className="py-24 md:py-32 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">04.</p>
              <p className="eyebrow mt-1">{t("eyebrowMoodCheck")}</p>
            </div>
            <div className="md:col-span-9 max-w-2xl">
              <h2 className="font-serif display-2 tracking-tight mb-8">
                {t("moodH2")}
              </h2>
              <p className="text-[15px] text-muted-foreground mb-12">
                {t("moodLede")}
              </p>

              <div className="flex items-baseline gap-6 mb-2">
                <span className="font-serif text-7xl md:text-8xl tracking-tight">
                  {mood}
                </span>
                <span className="font-serif text-3xl text-foreground/40">
                  {t("moodOutOf10")}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={mood}
                onChange={(e) => setMood(Number(e.target.value))}
                className="w-full my-6 accent-[hsl(var(--accent))]"
                aria-label={t("moodLevelLabel")}
              />
              <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-10">
                <span>{t("moodHeavy")}</span>
                <span>{t("moodSteady")}</span>
                <span>{t("moodLifted")}</span>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="eyebrow mb-3 text-foreground/60">{t("moodToday")}</p>
                <p className="font-serif text-xl md:text-2xl tracking-tight leading-snug">
                  {moodGuidance}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEXT */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="eyebrow mb-8">{t("eyebrowContinue")}</p>
            <h2 className="font-serif display-2 tracking-tight mb-12">
              {t("continueH2")}
            </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <Link href="/checkups" className="link-quiet">
                {t("linkCheckup")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/support" className="link-quiet">
                {t("linkSupport")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/stories/all-stories" className="link-quiet">
                {t("linkStories")} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
