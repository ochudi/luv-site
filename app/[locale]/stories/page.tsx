"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import React from "react"
import { useTranslations } from "next-intl"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

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
]

export default function BeneathTheSurfacePage() {
  const t = useTranslations();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/site/stories.jpg"
            alt="Underwater scene"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {t('stories.pageTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {t('stories.pageSubtitle')}
          </motion.p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('stories.storiesThatHeal')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('stories.storiesThatHealDesc')}
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {stories.map((story, index) => (
              <motion.div key={index} variants={item} className="group">
                <Link href={story.href} className="block">
                  <div className="relative h-[400px] mb-6 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{t(story.titleKey)}</h3>
                      <p className="text-white/80">{t(story.descKey)}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="rounded-none">
              <Link href="/stories/all-stories">
                {t('stories.viewAllStories')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('stories.diveDeeperTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('stories.diveDeeperDesc')}
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={e => {
                  e.preventDefault();
                  toast({
                    title: t('stories.subscribed'),
                    description: t('stories.subscribedDesc'),
                  });
                  setEmail("");
                }}
              >
                <input
                  type="email"
                  placeholder={t('stories.emailPlaceholder')}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="rounded-none">
                  {t('stories.subscribe')}
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 relative h-[400px] w-full"
            >
              <video
                src="/videos/beyond.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full absolute inset-0"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
