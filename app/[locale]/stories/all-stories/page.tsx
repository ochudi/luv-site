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

  const inferTags = (title: string, description: string) => {
    const haystack = `${title} ${description}`.toLowerCase();
    const tags: string[] = [];
    if (haystack.includes("depress") || haystack.includes("anx") || haystack.includes("fear")) tags.push("anxiety/depression");
    if (haystack.includes("pain") || haystack.includes("broken") || haystack.includes("crisis") || haystack.includes("sickle")) tags.push("trauma");
    if (haystack.includes("recover") || haystack.includes("healing") || haystack.includes("journey") || haystack.includes("support")) tags.push("recovery");
    if (haystack.includes("dream") || haystack.includes("resilien") || haystack.includes("defiance") || haystack.includes("success")) tags.push("resilience");
    return tags.length ? tags : ["lived experience"];
  };

  const taggedStories = stories.map((story) => ({
    ...story,
    tags: inferTags(story.title, story.description),
    summary:
      story.description.length > 115
        ? `${story.description.slice(0, 112)}...`
        : story.description,
  }));

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    taggedStories.forEach((story) => story.tags.forEach((tag) => tags.add(tag)));
    return ["all", ...Array.from(tags)];
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
              <p className="eyebrow">— Archive</p>
              <p className="eyebrow mt-1">All stories</p>
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

      {/* FILTERS */}
      <section className="py-10 md:py-12 border-b border-border sticky top-[68px] md:top-[80px] bg-background/95 backdrop-blur-sm z-30">
        <div className="editorial-container">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-foreground/30 focus-within:border-foreground pb-3 max-w-2xl">
              <Search className="h-4 w-4 text-foreground/60" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by title or topic"
                className="flex-1 bg-transparent outline-none border-none text-base placeholder:text-foreground/40"
              />
            </div>
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${
                    activeTag === tag
                      ? "text-background bg-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {tag === "all" ? "All topics" : tag}
                </button>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 md:py-28">
        <div className="editorial-container">
          {filteredStories.length === 0 ? (
            <div className="border border-border p-10 md:p-16 text-center max-w-2xl mx-auto">
              <p className="eyebrow mb-4">No matches</p>
              <p className="font-serif text-2xl md:text-3xl tracking-tight">
                No stories match your search yet. Try another keyword or topic.
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
                              {tag}
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
