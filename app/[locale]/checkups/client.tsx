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

export default function CheckupsPage() {
  const t = useTranslations("checkups");
  const questions = [1, 2, 3, 4, 5].map((i) => t(`q${i}`));
  const labels = [
    t("labelNever"),
    t("labelSometimes"),
    t("labelOften"),
    t("labelAlmostDaily"),
  ];

  const [answers, setAnswers] = useState<number[]>(
    new Array(questions.length).fill(0)
  );
  const score = useMemo(
    () => answers.reduce((total, item) => total + item, 0),
    [answers]
  );

  const { headline, body } = useMemo(() => {
    if (score <= 4)
      return {
        headline: t("resultLowHeadline"),
        body: t("resultLowBody"),
      };
    if (score <= 9)
      return {
        headline: t("resultModerateHeadline"),
        body: t("resultModerateBody"),
      };
    if (score <= 14)
      return {
        headline: t("resultElevatedHeadline"),
        body: t("resultElevatedBody"),
      };
    return {
      headline: t("resultHighHeadline"),
      body: t("resultHighBody"),
    };
  }, [score, t]);

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
              <p className="eyebrow">— {t("eyebrowCheckup")}</p>
              <p className="eyebrow mt-1">{t("eyebrowSelfAssessment")}</p>
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

      {/* QUESTIONS */}
      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <ol className="max-w-3xl mx-auto divide-y divide-border border-t border-b border-border">
            {questions.map((question, index) => (
              <motion.li
                key={index}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.04 * index }}
                className="py-10 md:py-12"
              >
                <div className="flex items-start gap-6 mb-8">
                  <span className="eyebrow text-foreground/40 pt-1">
                    Q · 0{index + 1}
                  </span>
                </div>
                <p className="font-serif text-xl md:text-2xl tracking-tight leading-snug mb-8 max-w-2xl">
                  {question}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {labels.map((label, value) => {
                    const active = answers[index] === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setAnswers((prev) => {
                            const next = [...prev];
                            next[index] = value;
                            return next;
                          })
                        }
                        className={`border py-3 px-4 text-[11px] uppercase tracking-[0.18em] font-medium transition-colors ${
                          active
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULT */}
      <section className="py-24 md:py-32 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— {t("eyebrowResult")}</p>
              <p className="eyebrow mt-1">{t("eyebrowYourRead")}</p>
            </div>
            <div className="md:col-span-9 max-w-2xl">
              <div className="flex items-baseline gap-6 mb-10">
                <span className="font-serif text-7xl md:text-8xl tracking-tight">
                  {score}
                </span>
                <span className="font-serif text-3xl text-foreground/40">
                  {t("outOf15")}
                </span>
              </div>
              <h2 className="font-serif display-3 tracking-tight mb-6">
                {headline}
              </h2>
              <p className="lede text-muted-foreground mb-12 max-w-xl">
                {body}
              </p>

              <div className="flex flex-wrap gap-x-10 gap-y-6 pt-10 border-t border-border">
                <Link href="/support" className="link-quiet">
                  {t("linkSupport")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/self-help" className="link-quiet">
                  {t("linkSelfHelp")} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
