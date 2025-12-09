"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations('about');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [muted, setMuted] = useState(true);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden group"
      >
        {/* Video Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <video
            src="/videos/about.mp4"
            autoPlay
            loop
            playsInline
            muted={muted}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </motion.div>

        {/* Mute Button */}
        <button
          onClick={() => setMuted((prev) => !prev)}
          className="absolute bottom-6 right-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-black transition-opacity opacity-0 group-hover:opacity-100"
        >
          {muted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {t('whoWeAre')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('whoWeAreDesc1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('whoWeAreDesc2')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/site/mission.jpg"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('ourMission')}
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                {t('ourMissionDesc1')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('ourMissionDesc2')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('ourValues')}
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li>
                  <strong>{t('empathy')}</strong> {t('empathyDesc')}
                </li>
                <li>
                  <strong>{t('authenticity')}</strong> {t('authenticityDesc')}
                </li>
                <li>
                  <strong>{t('community')}</strong> {t('communityDesc')}
                </li>
                <li>
                  <strong>{t('transparency')}</strong> {t('transparencyDesc')}
                </li>
                <li>
                  <strong>{t('resilience')}</strong> {t('resilienceDesc')}
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px] order-1 md:order-2"
            >
              <Image
                src="/images/site/values.jpg"
                alt="Our values"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('ourLeadership')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              {t('ourLeadershipDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                key: "ernest",
                imageUrl: "/images/team/ernest.svg",
                delay: 0.2,
              },
              {
                key: "ruqaiyah",
                imageUrl: "/images/team/ruqaiyah.svg",
                delay: 0.4,
              },
              {
                key: "omkar",
                imageUrl: "/images/team/omkar.svg",
                delay: 0.6,
              },
              {
                key: "saadatu",
                imageUrl: "/images/team/saadatu.svg",
                delay: 0.8,
              },
              {
                key: "chinedu",
                imageUrl: "/images/team/chinedu.svg",
                delay: 1.0,
              },
              {
                key: "abdulwahab",
                imageUrl: "/images/team/abdulwahab.svg",
                delay: 1.2,
              },
              {
                key: "happiness",
                imageUrl: "/images/team/happiness.svg",
                delay: 1.4,
              },
              {
                key: "fredrick",
                imageUrl: "/images/team/fredrick.svg",
                delay: 1.6,
              },
              {
                key: "chukwudi",
                imageUrl: "/images/team/chukwudi.svg",
                delay: 1.8,
              },
            ].map((member, idx) => (
              <motion.div
                key={member.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: member.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-square w-full bg-black/80 overflow-hidden group shadow-xl"
              >
                <Image
                  src={member.imageUrl}
                  alt={t(`teamMembers.${member.key}.name`)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                  <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-center">
                    {t(`teamMembers.${member.key}.name`)}
                  </span>
                  <span className="text-md md:text-lg font-medium text-white/80 drop-shadow text-center mt-2">
                    {t(`teamMembers.${member.key}.title`)}
                  </span>
                  <span className="text-md md:text-lg font-medium text-white/80 drop-shadow text-center mt-2">
                    {t(`teamMembers.${member.key}.country`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
