"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
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

export default function AboutPage() {
  const t = useTranslations("about");
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const values = [
    { key: "empathy" },
    { key: "authenticity" },
    { key: "community" },
    { key: "transparency" },
    { key: "resilience" },
  ];

  const team = [
    "ernest",
    "ruqaiyah",
    "omkar",
    "saadatu",
    "chinedu",
    "abdulwahab",
    "happiness",
    "fredrick",
    "chukwudi",
  ];

  return (
    <div className="relative bg-background">
      {/* HERO */}
      <section
        ref={containerRef}
        className="relative h-[80vh] md:h-[90vh] flex items-end overflow-hidden group"
      >
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/about.mp4"
            autoPlay
            loop
            playsInline
            muted={muted}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        </div>

        <button
          onClick={() => setMuted((p) => !p)}
          className="absolute bottom-6 right-6 z-10 p-2 border border-white/40 text-white hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        <div className="editorial-container relative z-10 pb-16 md:pb-24 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="max-w-4xl"
          >
            <p className="eyebrow text-white/80 mb-8">{t("heroEyebrow")}</p>
            <h1 className="font-serif text-white display-1">
              {t("heroLine1")}{" "}
              <span className="italic text-white/85">{t("heroLine2")}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-36">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">01. </p>
              <p className="eyebrow mt-1">{t("whoWeAre")}</p>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl mb-6">
                {t("whoWeAre")}
              </h2>
              <p className="lede text-foreground/80 max-w-3xl">
                {t("whoWeAreDesc1")}
              </p>
              <p className="lede text-muted-foreground max-w-3xl">
                {t("whoWeAreDesc2")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-36 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="md:col-span-6 relative aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src="/images/site/mission.jpg"
                alt="Our mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="md:col-span-6"
            >
              <p className="eyebrow mb-6">02. {t("ourMission")}</p>
              <h3 className="font-serif display-3 tracking-tight mb-8 max-w-lg">
                {t("ourMission")}
              </h3>
              <p className="lede text-foreground/80 mb-5 max-w-md">
                {t("ourMissionDesc1")}
              </p>
              <p className="lede text-muted-foreground max-w-md">
                {t("ourMissionDesc2")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-36 border-t border-border">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="md:col-span-6 order-2 md:order-1"
            >
              <p className="eyebrow mb-6">03. {t("ourValues")}</p>
              <h3 className="font-serif display-3 tracking-tight mb-10 max-w-lg">
                {t("ourValues")}
              </h3>
              <ul className="divide-y divide-border border-t border-border max-w-md">
                {values.map((v) => (
                  <li
                    key={v.key}
                    className="py-5 grid grid-cols-12 gap-4 items-baseline"
                  >
                    <span className="col-span-4 font-serif text-lg md:text-xl tracking-tight">
                      {t(v.key)}
                    </span>
                    <span className="col-span-8 text-[15px] text-muted-foreground leading-relaxed">
                      {t(`${v.key}Desc`)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="md:col-span-6 order-1 md:order-2 relative aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src="/images/site/values.jpg"
                alt="Our values"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 md:py-36 border-t border-border bg-muted/30">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">04. </p>
              <p className="eyebrow mt-1">{t("eyebrowLeadership")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl mb-6">
                {t("ourLeadership")}
              </h2>
              <p className="lede text-muted-foreground max-w-3xl">
                {t("ourLeadershipDesc")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {team.map((key, i) => (
              <motion.figure
                key={key}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.04 * i }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5 mb-4">
                  <Image
                    src={`/images/team/${key}.svg`}
                    alt={t(`teamMembers.${key}.name`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <figcaption>
                  <p className="font-serif text-lg md:text-xl tracking-tight">
                    {t(`teamMembers.${key}.name`)}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {t(`teamMembers.${key}.title`)} ·{" "}
                    {t(`teamMembers.${key}.country`)}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
