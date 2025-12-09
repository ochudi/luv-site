"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import SearchHero from "@/components/SearchHero";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { BookOpen, PencilLine, HeartHandshake } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={ref}
        className="hero-section relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        {/* Foreground Content */}
        <div
          className="relative z-10 container mx-auto px-4 text-center hero-content"
        >
          <div
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 hero-title"
          >
            {t('hero.title')}<br />
            {t('hero.titleLine2')}
          </div>
          <div
            className="mt-20 hero-search"
          >
            <SearchHero />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('home.newWayToSee.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.newWayToSee.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titleKey: "home.reflect.title",
                url: "/reflect",
                descKey: "home.reflect.description",
                delay: 0.2,
              },
              {
                titleKey: "home.exploreSection.title",
                url: "/explore",
                descKey: "home.exploreSection.description",
                delay: 0.4,
              },
              {
                titleKey: "home.evolve.title",
                url: "/evolve",
                descKey: "home.evolve.description",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card p-8 hover:bg-accent transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground mb-6">{t(item.descKey)}</p>
                <Link
                  href={item.url}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  {t('common.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-x-clip">
        <div className="max-w-full mx-0 flex flex-col items-start min-h-[160vh] md:min-h-[120vh]">
          {/* Text Block */}
          <div
            className="w-full md:w-1/2 mx-auto mt-[40px] md:mt-10 md:ml-10 md:mr-auto z-10"
            style={{ position: 'sticky', top: 150 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:bg-transparent px-6 md:px-0 pt-6 pb-8 md:pt-0 md:pb-0"
            >
              <h2 className="text-3xl md:text-7xl font-bold mb-6">
                {t('home.seeBeyond.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('home.seeBeyond.description')}
              </p>
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/stories">
                  {t('common.explore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          {/* Video Block (sticky under header) */}
          <div
            className="w-full md:w-2/3 mx-auto mt-20 md:mt-20 md:ml-auto md:mr-0 z-20"
            style={{ position: 'sticky', top: 180 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full h-[300px] md:h-[80vh] flex items-center justify-end"
              style={{ zIndex: 20 }}
            >
              <video
                src="/videos/beyond.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full shadow-xl rounded"
                style={{
                  maxHeight: '80vh',
                  minHeight: '300px',
                  width: '100%',
                  position: 'relative',
                  right: 0,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {t('home.readyToSeeDifferently.title')}
            </h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button size="lg" className="rounded-none font-bold">
                  {t('home.readyToSeeDifferently.joinButton')}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="center" className="w-80 p-0 border-none shadow-2xl">
                <div className="flex flex-col divide-y divide-muted-foreground/10">
                  <a href="/stories/all-stories" className="flex items-center gap-4 p-5 hover:bg-muted transition rounded-t-md group focus:outline-none" tabIndex={0}>
                    <BookOpen className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('home.joinOptions.readStories.title')}</div>
                      <div className="text-sm text-muted-foreground">{t('home.joinOptions.readStories.description')}</div>
                    </div>
                  </a>
                  <a href="/write" className="flex items-center gap-4 p-5 hover:bg-muted transition group focus:outline-none" tabIndex={0}>
                    <PencilLine className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('home.joinOptions.shareExperiences.title')}</div>
                      <div className="text-sm text-muted-foreground">{t('home.joinOptions.shareExperiences.description')}</div>
                    </div>
                  </a>
                  <a href="/volunteer" className="flex items-center gap-4 p-5 hover:bg-muted transition rounded-b-md group focus:outline-none" tabIndex={0}>
                    <HeartHandshake className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('home.joinOptions.volunteer.title')}</div>
                      <div className="text-sm text-muted-foreground">{t('home.joinOptions.volunteer.description')}</div>
                    </div>
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
