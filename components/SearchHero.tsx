"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useRouter, Link } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { useTranslations } from "next-intl";

const SEARCH_DATA = [
  { label: "Home", description: "See the world through a different lens.", href: "/", type: "Page", key: "home-page" },
  { label: "About", description: "Our story, mission, and team.", href: "/about", type: "Page", key: "about-page" },
  { label: "Reflect", description: "Insights for new ways of seeing.", href: "/reflect", type: "Page", key: "reflect-page" },
  { label: "Evolve", description: "Growth, resilience, and transformation.", href: "/evolve", type: "Page", key: "evolve-page" },
  { label: "Explore", description: "Resources and perspectives to uplift your mood.", href: "/explore", type: "Page", key: "explore-page" },
  { label: "Stories", description: "Real stories of navigating the unseen.", href: "/stories", type: "Page", key: "stories-page" },
  { label: "All Stories", description: "Every inspiring story on Life Upside View.", href: "/stories/all-stories", type: "Page", key: "all-stories-page" },
  { label: "Get Help Now", description: "Immediate crisis and support guidance.", href: "/support", type: "Page", key: "support-page" },
  { label: "Self-Help Toolkit", description: "CBT tips, grounding exercises, and coping tools.", href: "/self-help", type: "Page", key: "self-help-page" },
  { label: "Mental Health Check-Up", description: "Quick emotional wellness self-assessment.", href: "/checkups", type: "Page", key: "checkups-page" },
  { label: "Letting Go of Control", description: "Reflect: Insightful thoughts on control.", href: "/reflect#letting-go", type: "Section", key: "letting-go-section" },
  { label: "The Beauty in Uncertainty", description: "Reflect: Embracing uncertainty.", href: "/reflect#beauty-uncertainty", type: "Section", key: "beauty-uncertainty-section" },
  { label: "Learning from Stillness", description: "Reflect: Lessons from stillness.", href: "/reflect#learning-stillness", type: "Section", key: "learning-stillness-section" },
  { label: "Small Wins Journal", description: "Evolve: Celebrate small victories.", href: "/evolve#small-wins", type: "Section", key: "small-wins-section" },
  { label: "Lessons from Adversity", description: "Evolve: Growth through adversity.", href: "/evolve#lessons-adversity", type: "Section", key: "lessons-adversity-section" },
  { label: "Your Mental Toolkit", description: "Evolve: Tools for resilience.", href: "/evolve#mental-toolkit", type: "Section", key: "mental-toolkit-section" },
  { label: "Guided Journals", description: "Explore: Journaling for well-being.", href: "/explore#guided-journals", type: "Section", key: "guided-journals-section" },
  { label: "Wellness Playlists", description: "Explore: Playlists for your mood.", href: "/explore#wellness-playlists", type: "Section", key: "wellness-playlists-section" },
  { label: "Mindful Articles", description: "Explore: Articles for emotional support.", href: "/explore#mindful-articles", type: "Section", key: "mindful-articles-section" },
  { label: "A Break From Despair", description: "How a girl broke free from near depression.", href: "/stories/a-break-from-despair", type: "Story", key: "a-break-from-despair-story" },
  { label: "A Life Defined By Defiance", description: "An extraordinary life of perseverance.", href: "/stories/a-life-defined-by-defiance", type: "Story", key: "a-life-defined-by-defiance-story" },
  { label: "A Light Through Pain", description: "A moving tribute to a young woman who battled sickle cell.", href: "/stories/a-light-through-pain", type: "Story", key: "a-light-through-pain-story" },
  { label: "Broken Dreams, Brighter Paths: Part 1", description: "A med student's derailed dream leads to burnout.", href: "/stories/broken-dreams-brighter-paths", type: "Story", key: "broken-dreams-1-story" },
  { label: "Broken Dreams, Brighter Paths: Part 2", description: "A med student's journey through unexpected detours.", href: "/stories/broken-dreams-brighter-paths-2", type: "Story", key: "broken-dreams-2-story" },
  { label: "From Broken Bones To Unbreakable Dreams", description: "A law student's journey from childhood ambition.", href: "/stories/from-broken-bones-to-unbreakable-dreams", type: "Story", key: "from-broken-bones-story" },
  { label: "My Upside View of Sickle Cell Anemia", description: "Ruqaiyyah Aliyu shares her courageous journey.", href: "/stories/my-upside-view-of-sickle-cell-anemia", type: "Story", key: "muvossa-story" },
  { label: "Safiyya's Story", description: "From a struggling single mother to a beacon of hope.", href: "/stories/safiyya-story", type: "Story", key: "safiyya-story" },
  { label: "Supported by my Fears", description: "A pharmacy student's journey through setbacks.", href: "/stories/supported-by-my-fears", type: "Story", key: "supported-by-my-fears-story" },
];

// Lightweight featured cards (title via i18n) — no full story content imported,
// so the homepage bundle stays small.
const FEATURED = [
  { titleKey: "featuredStories.story1.title", href: "/stories/from-broken-bones-to-unbreakable-dreams", image: "/images/covers/fbbtud.png" },
  { titleKey: "featuredStories.story2.title", href: "/stories/my-upside-view-of-sickle-cell-anemia", image: "/images/covers/muvossa.png" },
  { titleKey: "featuredStories.story3.title", href: "/stories/safiyya-story", image: "/images/covers/ssp12.png" },
  { titleKey: "featuredStories.story4.title", href: "/stories/supported-by-my-fears", image: "/images/covers/sbmf.png" },
] as const;

// Trending chips fill the query so results render inside the overlay.
const TRENDING = [
  { labelKey: "trending1", query: "self-help" },
  { labelKey: "trending2", query: "support" },
  { labelKey: "trending3", query: "check-up" },
  { labelKey: "trending4", query: "sickle" },
  { labelKey: "trending5", query: "dream" },
  { labelKey: "trending6", query: "reflect" },
] as const;

function useTypewriter(words: string[], typingSpeed = 80, pause = 1400) {
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const [display, setD] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (charIdx < words[wordIdx].length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
        setD(words[wordIdx].slice(0, charIdx + 1));
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), typingSpeed / 2);
        setD(words[wordIdx].slice(0, charIdx - 1));
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, wordIdx, words, typingSpeed, pause]);

  return display;
}

interface SearchHeroProps {
  tone?: "light" | "dark";
}

export default function SearchHero({ tone = "dark" }: SearchHeroProps) {
  const t = useTranslations("search");
  const tRoot = useTranslations();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  const animatedSuggestions = [
    t("placeholder.1"),
    t("placeholder.2"),
    t("placeholder.3"),
    t("placeholder.4"),
    t("placeholder.5"),
    t("placeholder.6"),
  ];
  const animatedPlaceholder = useTypewriter(animatedSuggestions);

  const filtered = input.trim()
    ? SEARCH_DATA.filter(
        (item) =>
          item.label.toLowerCase().includes(input.toLowerCase()) ||
          item.description.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  const grouped = filtered.reduce<{ [key: string]: typeof SEARCH_DATA }>((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  // Flattened in render order so arrow-key highlighting maps to the right item.
  const flatItems = Object.values(grouped).flat();
  const hasQuery = input.trim().length > 0;

  const closeOverlay = useCallback(() => {
    setOpen(false);
    setInput("");
    setHighlightIdx(-1);
  }, []);

  const goToItem = useCallback(
    (href: string) => {
      closeOverlay();
      router.push(href);
    },
    [closeOverlay, router]
  );

  const handleSearch = () => {
    if (input.trim()) {
      const q = input.trim();
      closeOverlay();
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  // Reset the active option whenever the query changes.
  useEffect(() => setHighlightIdx(-1), [input]);

  // Body scroll lock + focus + Escape handling while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeOverlay]);

  const onDark = tone === "dark";

  return (
    <div className="w-full">
      {/* Trigger — looks like a search bar, opens the full overlay on click */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("open")}
        className={`group w-full flex items-center gap-3 md:gap-4 border-2 border-[hsl(var(--accent))] transition-colors duration-300 pl-5 pr-2 py-2 md:py-3 text-left ${
          onDark ? "bg-black/30 backdrop-blur-sm" : "bg-background"
        }`}
      >
        <Search className="h-4 w-4 md:h-5 md:w-5 text-[hsl(var(--accent))] shrink-0" />
        <span
          className={`flex-1 min-w-0 truncate text-base md:text-lg tracking-wide py-2 ${
            onDark ? "text-white/70" : "text-foreground/45"
          }`}
        >
          {animatedPlaceholder || t("placeholder.1")}
        </span>
        <span className="shrink-0 inline-flex items-center justify-center bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-xs uppercase tracking-[0.22em] font-bold px-4 md:px-6 py-3 group-hover:brightness-95 transition-all">
          <span className="hidden md:inline">{t("button")}</span>
          <ArrowRight className="h-5 w-5 md:hidden" />
        </span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="search-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                role="dialog"
                aria-modal="true"
                aria-label={t("open")}
                className="fixed inset-x-0 bottom-0 top-[88px] md:top-[96px] z-[100] bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] flex flex-col"
              >
                {/* Header: close + search field (stays put while results scroll) */}
                <div className="editorial-container pt-5 md:pt-8 pb-4 md:pb-6 shrink-0">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeOverlay}
                      aria-label={t("close")}
                      className="inline-flex items-center justify-center h-10 w-10 -mr-2 text-[hsl(var(--accent-foreground))]/70 hover:text-[hsl(var(--accent-foreground))] transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <motion.div
                    initial={{ y: -12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    className="mt-1 flex items-center gap-2 md:gap-4 border-2 border-[hsl(var(--accent-foreground))] px-4 md:px-6 py-2.5 md:py-3"
                  >
                    <Search className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          if (highlightIdx >= 0 && flatItems[highlightIdx]) {
                            goToItem(flatItems[highlightIdx].href);
                          } else {
                            handleSearch();
                          }
                        } else if (e.key === "ArrowDown") {
                          e.preventDefault();
                          setHighlightIdx((i) => Math.min(i + 1, flatItems.length - 1));
                        } else if (e.key === "ArrowUp") {
                          e.preventDefault();
                          setHighlightIdx((i) => Math.max(i - 1, 0));
                        }
                      }}
                      placeholder={animatedPlaceholder || t("placeholder.1")}
                      className="flex-1 min-w-0 bg-transparent outline-none border-none focus:ring-0 text-base md:text-2xl tracking-wide py-1.5 text-[hsl(var(--accent-foreground))] placeholder:text-[hsl(var(--accent-foreground))]/45"
                      autoComplete="off"
                      role="combobox"
                      aria-expanded={hasQuery && filtered.length > 0}
                      aria-controls="search-overlay-results"
                      aria-label={t("open")}
                    />
                    {input && (
                      <button
                        type="button"
                        onClick={() => {
                          setInput("");
                          inputRef.current?.focus();
                        }}
                        aria-label={t("clear")}
                        className="shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full text-[hsl(var(--accent-foreground))]/60 hover:text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent-foreground))]/10 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleSearch}
                      aria-label={t("button")}
                      className="shrink-0 inline-flex items-center justify-center bg-[hsl(var(--accent-foreground))] text-[hsl(var(--accent))] text-xs uppercase tracking-[0.22em] font-bold px-4 md:px-8 py-3 md:py-3.5 hover:opacity-90 transition-opacity"
                    >
                      <span className="hidden md:inline">{t("button")}</span>
                      <ArrowRight className="h-5 w-5 md:hidden" />
                    </button>
                  </motion.div>
                </div>

                {/* Scrollable content */}
                <div
                  id="search-overlay-results"
                  className="flex-1 overflow-y-auto editorial-container pb-10"
                >
                  {hasQuery ? (
                    filtered.length > 0 ? (
                      <div className="pt-2">
                        {(() => {
                          let runningIndex = -1;
                          return Object.entries(grouped).map(([type, items]) => (
                            <div key={type} className="mb-6">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-foreground))]/60 mb-1">
                                {type}
                              </p>
                              <ul className="divide-y divide-[hsl(var(--accent-foreground))]/15">
                                {items.map((item) => {
                                  runningIndex += 1;
                                  const idx = runningIndex;
                                  return (
                                    <li key={item.key}>
                                      <button
                                        type="button"
                                        role="option"
                                        aria-selected={idx === highlightIdx}
                                        onClick={() => goToItem(item.href)}
                                        onMouseEnter={() => setHighlightIdx(idx)}
                                        className={`w-full text-left px-3 py-3 md:py-4 transition-colors ${
                                          idx === highlightIdx
                                            ? "bg-[hsl(var(--accent-foreground))]/10"
                                            : "hover:bg-[hsl(var(--accent-foreground))]/5"
                                        }`}
                                      >
                                        <p className="font-serif text-lg md:text-xl tracking-tight">
                                          {item.label}
                                        </p>
                                        <p className="text-sm text-[hsl(var(--accent-foreground))]/70 mt-0.5">
                                          {item.description}
                                        </p>
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ));
                        })()}
                        <p className="text-center text-xs uppercase tracking-[0.22em] font-semibold text-[hsl(var(--accent-foreground))]/70 border-t border-[hsl(var(--accent-foreground))]/15 pt-6 mt-2">
                          {filtered.length}{" "}
                          {filtered.length === 1 ? t("resultSingular") : t("resultPlural")}
                        </p>
                      </div>
                    ) : (
                      <p className="text-center font-serif text-xl md:text-2xl tracking-tight py-16">
                        {t("noResults")}
                      </p>
                    )
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 pt-4">
                      {/* Featured */}
                      <div className="lg:col-span-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-foreground))]/60 mb-5">
                          {t("featured")}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                          {FEATURED.map((story) => (
                            <Link
                              key={story.href}
                              href={story.href}
                              onClick={closeOverlay}
                              className="group relative block aspect-[16/10] overflow-hidden bg-[hsl(var(--accent-foreground))]/10"
                            >
                              <Image
                                src={story.image}
                                alt={tRoot(story.titleKey)}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                              <h3 className="absolute bottom-3 left-3 right-3 font-serif text-white text-lg md:text-xl leading-tight tracking-tight">
                                {tRoot(story.titleKey)}
                              </h3>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Trending */}
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--accent-foreground))]/60 mb-5">
                          {t("trending")}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {TRENDING.map((item) => (
                            <button
                              key={item.labelKey}
                              type="button"
                              onClick={() => {
                                setInput(item.query);
                                inputRef.current?.focus();
                              }}
                              className="border border-[hsl(var(--accent-foreground))]/40 px-4 py-2 text-xs md:text-sm uppercase tracking-[0.12em] font-medium hover:bg-[hsl(var(--accent-foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                            >
                              {t(item.labelKey)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
