"use client";

import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getStoryBySlug, getStories } from "@/lib/stories-i18n";
import { useTranslations } from "next-intl";

export default function StoryPage() {
  const t = useTranslations();
  const params = useParams();
  const slug = params.slug as string;
  const locale = params.locale as "en" | "fr";
  const story = getStoryBySlug(slug, locale);

  if (!story) return notFound();

  const allStories = getStories(locale);
  const idx = allStories.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? allStories[idx - 1] : null;
  const next = idx >= 0 && idx < allStories.length - 1 ? allStories[idx + 1] : null;

  return (
    <article className="relative bg-background">
      {/* HERO */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/90" />
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
            <Link
              href="/stories/all-stories"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[11px] uppercase tracking-[0.24em] mb-10 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("stories.backToStories")}
            </Link>
            <p className="eyebrow text-white/80 mb-8">{t("stories.storyEyebrow")}</p>
            <h1 className="font-serif text-white display-1 mb-8">
              {story.title}
            </h1>
            <p className="text-white/85 text-lg md:text-xl max-w-2xl">
              {story.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="mx-auto max-w-2xl prose font-serif text-lg leading-[1.75] text-foreground/85"
          >
            {story.content.map((paragraph, i) => (
              <div key={i}>
                <p>{paragraph}</p>
                {story.images?.[i] && (
                  <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
                    <div className="relative aspect-[3/2] md:aspect-[16/10]">
                      <Image
                        src={story.images[i]}
                        alt={`${story.title} · figure ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </figure>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {prev ? (
              <Link href={`/stories/${prev.slug}`} className="group">
                <p className="eyebrow text-foreground/40 mb-4">
                  ← {t("stories.previousStory")}
                </p>
                <p className="font-serif text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/stories/${next.slug}`}
                className="group md:text-right"
              >
                <p className="eyebrow text-foreground/40 mb-4">
                  {t("stories.nextStory")} →
                </p>
                <p className="font-serif text-2xl md:text-3xl tracking-tight group-hover:opacity-70 transition-opacity">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div className="md:text-right">
                <Link
                  href="/stories/all-stories"
                  className="inline-flex items-center gap-2 link-quiet"
                >
                  View all stories <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
