"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getStories } from "@/lib/stories-i18n";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AllStoriesPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as 'en' | 'fr';
  const stories = getStories(locale);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const inferTags = (title: string, description: string) => {
    const haystack = `${title} ${description}`.toLowerCase();
    const tags: string[] = [];

    if (haystack.includes("depress") || haystack.includes("anx") || haystack.includes("fear")) {
      tags.push("anxiety/depression");
    }
    if (haystack.includes("pain") || haystack.includes("broken") || haystack.includes("crisis") || haystack.includes("sickle")) {
      tags.push("trauma");
    }
    if (haystack.includes("recover") || haystack.includes("healing") || haystack.includes("journey") || haystack.includes("support")) {
      tags.push("recovery");
    }
    if (haystack.includes("dream") || haystack.includes("resilien") || haystack.includes("defiance") || haystack.includes("success")) {
      tags.push("resilience");
    }

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
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t('stories.allStories')}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t('stories.allStoriesDesc')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories by title or topic..."
            className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag === "all" ? "all topics" : tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group"
            >
              <Link href={`/stories/${story.slug}`} className="block">
                <div className="relative h-[400px] mb-4 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {story.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-3">{story.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 px-2 py-1 text-[11px] font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="rounded-xl border border-border bg-card p-8 text-center mt-8">
            <p className="text-muted-foreground">No stories match your search yet. Try another keyword or topic.</p>
          </div>
        )}
      </div>
    </div>
  );
}
