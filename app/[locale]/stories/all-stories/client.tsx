"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getStories } from "@/lib/stories-i18n";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Search } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export default function AllStoriesPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as "en" | "fr";
  const stories = getStories(locale);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  // Canonical display order for the topic filter row. Tags live on the story
  // data (see lib/stories.ts) and are labelled via `stories.tags.*`.
  const TAG_ORDER = [
    "anxiety",
    "trauma",
    "chronicIllness",
    "griefLoss",
    "resilience",
    "recovery",
    "faith",
    "tools",
  ];

  const tagLabel = (tag: string) =>
    tag === "all" ? t("stories.allTopics") : t(`stories.tags.${tag}`);

  const taggedStories = stories.map((story) => ({
    ...story,
    tags: story.tags ?? [],
    summary:
      story.description.length > 115
        ? `${story.description.slice(0, 112)}...`
        : story.description,
  }));

  const availableTags = useMemo(() => {
    const present = new Set<string>();
    taggedStories.forEach((story) => story.tags.forEach((tag) => present.add(tag)));
    return ["all", ...TAG_ORDER.filter((tag) => present.has(tag))];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taggedStories]);

  const filteredStories = useMemo(() => {
    return taggedStories.filter((story) => {
      const textMatch =
        !query.trim() ||
        story.title.toLowerCase().includes(query.toLowerCase()) ||
        story.description.toLowerCase().includes(query.toLowerCase());
      const tagMatch = activeTag === "all" || story.tags.includes(activeTag);
      return textMatch && tagMatch;
    });
  }, [activeTag, query, taggedStories]);

  return (
    <div className="bg-background">
      {/* HEADER */}
      <section className="pt-40 md:pt-44 pb-16 md:pb-20 border-b border-border">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <p className="eyebrow">{t("stories.archiveEyebrow")}</p>
              <p className="eyebrow mt-1">{t("stories.allStories")}</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-3xl">
                {t("stories.allStories")}
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                {t("stories.allStoriesDesc")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS — one compact row on desktop, two on mobile */}
      <section className="py-4 md:py-5 border-b border-border sticky top-[64px] md:top-[72px] bg-background/95 backdrop-blur-sm z-30">
        <div className="editorial-container">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-3">
            <div className="flex items-center gap-2 border-b border-foreground/25 focus-within:border-foreground py-1.5 md:max-w-xs flex-shrink-0">
              <Search className="h-3.5 w-3.5 text-foreground/55" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("stories.searchStories")}
                className="flex-1 bg-transparent outline-none border-none text-sm placeholder:text-foreground/40 min-w-0"
              />
            </div>
            <div className="flex flex-1 items-center gap-3 overflow-x-auto -mx-1 px-1 scrollbar-none">
              <ul className="flex items-center gap-x-1 whitespace-nowrap">
                {availableTags.map((tag) => (
                  <li key={tag}>
                    <button
                      type="button"
                      onClick={() => setActiveTag(tag)}
                      className={`px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] font-medium transition-colors ${
                        activeTag === tag
                          ? "text-background bg-foreground"
                          : "text-foreground/55 hover:text-foreground"
                      }`}
                    >
                      {tagLabel(tag)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap md:ml-auto">
              {filteredStories.length}{" "}{filteredStories.length === 1 ? t("stories.storySingular") : t("stories.storyPlural")}
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 md:py-28">
        <div className="editorial-container">
          {filteredStories.length === 0 ? (
            <div className="border border-border p-10 md:p-16 text-center max-w-2xl mx-auto">
              <p className="eyebrow mb-4">{t("stories.noMatches")}</p>
              <p className="font-serif text-2xl md:text-3xl tracking-tight">
                {t("stories.noStoriesMatch")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredStories.map((story, i) => (
                <motion.div
                  key={story.slug}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.03 * (i % 6) }}
                  className="group"
                >
                  <Link href={`/stories/${story.slug}`} className="block">
                    <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-foreground/5">
                      <Image
                        src={story.coverImage}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
                          {story.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                            >
                              {tagLabel(tag)}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl tracking-tight mb-2 group-hover:opacity-70 transition-opacity">
                          {story.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {story.summary}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 mt-2 text-foreground/50 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
