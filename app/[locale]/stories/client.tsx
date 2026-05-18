"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";
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

const stories = [
  {
    href: "/stories/from-broken-bones-to-unbreakable-dreams",
    titleKey: "featuredStories.story1.title",
    descKey: "featuredStories.story1.description",
    image: "/images/covers/fbbtud.png",
    alt: "Cover image for From Broken Bones To Unbreakable Dreams",
  },
  {
    href: "/stories/my-upside-view-of-sickle-cell-anemia",
    titleKey: "featuredStories.story2.title",
    descKey: "featuredStories.story2.description",
    image: "/images/covers/muvossa.png",
    alt: "Cover image for My Upside View of Sickle Cell Anemia",
  },
  {
    href: "/stories/saffiyas-story-part-1-2",
    titleKey: "featuredStories.story3.title",
    descKey: "featuredStories.story3.description",
    image: "/images/covers/ssp12.png",
    alt: "Cover image for Saffiya's Story",
  },
  {
    href: "/stories/supported-by-my-fears",
    titleKey: "featuredStories.story4.title",
    descKey: "featuredStories.story4.description",
    image: "/images/covers/sbmf.png",
    alt: "Cover image for Supported by my Fears",
  },
];

export default function StoriesPage() {
  const t = useTranslations();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  return (
    <div className="relative bg-background">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/site/stories.jpg"
            alt="Stories"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85" />
        </div>

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
            <p className="eyebrow text-white/80 mb-8">— {t("stories.heroEyebrow")}</p>
            <h1 className="font-serif text-white display-1">
              {t("stories.pageTitle")}
            </h1>
            <p className="text-white/85 text-lg md:text-xl mt-8 max-w-2xl">
              {t("stories.pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 md:py-36">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-20"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— I.</p>
              <p className="eyebrow mt-1">{t("stories.eyebrowFeatured")}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl mb-6">
                {t("stories.storiesThatHeal")}
              </h2>
              <p className="lede text-muted-foreground max-w-3xl">
                {t("stories.storiesThatHealDesc")}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-16">
            {stories.map((story, i) => (
              <motion.div
                key={story.href}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
                className="group"
              >
                <Link href={story.href} className="block">
                  <div className="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden mb-6 bg-foreground/5">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="eyebrow text-foreground/40 mb-3">
                        Story · 0{i + 1}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-3">
                        {t(story.titleKey)}
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {t(story.descKey)}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 mt-2 text-foreground/60 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-20 md:mt-24">
            <Link href="/stories/all-stories" className="btn-ghost">
              {t("stories.viewAllStories")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="py-24 md:py-36 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <motion.div {...fadeUp} className="md:col-span-7">
              <p className="eyebrow mb-6">— II. {t("stories.eyebrowSubscribe")}</p>
              <h2 className="font-serif display-2 tracking-tight mb-6 max-w-2xl">
                {t("stories.diveDeeperTitle")}
              </h2>
              <p className="lede text-muted-foreground mb-10 max-w-xl">
                {t("stories.diveDeeperDesc")}
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({
                    title: t("stories.subscribed"),
                    description: t("stories.subscribedDesc"),
                  });
                  setEmail("");
                }}
              >
                <input
                  type="email"
                  placeholder={t("stories.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-transparent border-b border-foreground/40 focus:border-foreground outline-none py-3 text-base placeholder:text-foreground/40 transition-colors"
                />
                <button type="submit" className="btn-solid">
                  {t("stories.subscribe")}
                </button>
              </form>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="md:col-span-5 relative aspect-[4/5]"
            >
              <video
                src="/videos/beyond.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
