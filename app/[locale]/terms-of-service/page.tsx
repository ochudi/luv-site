"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

const sections = [
  { key: "introduction" },
  { key: "acceptance" },
  { key: "userResponsibilities" },
  { key: "intellectualProperty" },
  { key: "limitation" },
  { key: "changes" },
  { key: "contact" },
];

export default function TermsOfServicePage() {
  const t = useTranslations("policies");
  const p = useTranslations("policies.termsOfService");

  return (
    <div className="bg-background">
      <section className="pt-40 md:pt-44 pb-16 md:pb-20">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t("backToHome")}
              </Link>
              <p className="eyebrow">— Legal</p>
              <p className="eyebrow mt-1">Terms</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight max-w-3xl">
                {p("title")}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3 md:sticky md:top-32 self-start">
              <p className="eyebrow text-foreground/40 mb-6">Sections</p>
              <ul className="space-y-3">
                {sections.map((s, i) => (
                  <li
                    key={s.key}
                    className="text-[13px] text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, "0")} — {p(s.key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-9 max-w-3xl space-y-16">
              {sections.map((s, i) => (
                <motion.section
                  key={s.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                >
                  <p className="eyebrow text-foreground/40 mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
                    {p(s.key)}
                  </h2>
                  <p className="text-[16px] md:text-[17px] text-foreground/80 leading-[1.75]">
                    {s.key === "contact" ? (
                      <>
                        {p("contactText").split("dataprotection@lifeupsideview.org")[0]}
                        <a
                          href="mailto:dataprotection@lifeupsideview.org"
                          className="underline underline-offset-4 hover:text-foreground"
                        >
                          dataprotection@lifeupsideview.org
                        </a>
                        .
                      </>
                    ) : (
                      p(`${s.key}Text`)
                    )}
                  </p>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
