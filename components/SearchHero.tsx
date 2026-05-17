"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
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

function useTypewriter(words: string[], typingSpeed = 80, pause = 1400) {
  const [, setDisplay] = useState("");
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
        setDisplay(words[wordIdx].slice(0, charIdx + 1));
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
  const router = useRouter();
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

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

  const grouped = filtered.reduce<{ [key: string]: typeof SEARCH_DATA }>(
    (acc, item) => {
      acc[item.type] = acc[item.type] || [];
      acc[item.type].push(item);
      return acc;
    },
    {}
  );

  const handleSearch = () => {
    if (input.trim()) {
      router.push(`/search?q=${encodeURIComponent(input.trim())}`);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    setHighlightIdx(-1);
  }, [input, showSuggestions]);

  const onDark = tone === "dark";
  const lineColor = onDark ? "border-white/40" : "border-foreground/30";
  const focusLine = onDark ? "border-white" : "border-foreground";
  const textColor = onDark ? "text-white" : "text-foreground";
  const placeholderColor = onDark ? "placeholder:text-white/55" : "placeholder:text-foreground/45";

  return (
    <div className="w-full max-w-xl mx-auto relative">
      <div
        className={`relative flex items-center gap-3 border-b ${
          isInputFocused ? focusLine : lineColor
        } transition-colors duration-300 pb-3`}
      >
        <Search className={`h-4 w-4 ${onDark ? "text-white/70" : "text-foreground/60"}`} />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => {
            setIsInputFocused(true);
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsInputFocused(false);
              setShowSuggestions(false);
            }, 150);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            } else if (e.key === "ArrowDown") {
              setHighlightIdx((i) => Math.min(i + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              setHighlightIdx((i) => Math.max(i - 1, 0));
            }
          }}
          placeholder={animatedPlaceholder}
          className={`flex-1 bg-transparent outline-none border-none focus:ring-0 ${textColor} ${placeholderColor} text-base md:text-lg font-light tracking-wide`}
          autoComplete="off"
          aria-label="Search Life Upside View"
        />
        <button
          onClick={handleSearch}
          aria-label={t("button")}
          type="button"
          className={`hidden md:inline-block text-[10px] uppercase tracking-[0.24em] font-medium ${
            onDark ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
          } transition-colors`}
        >
          {t("button")}
        </button>
      </div>

      <AnimatePresence>
        {showSuggestions && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mt-3 bg-background border border-border shadow-xl max-h-80 overflow-y-auto z-50"
          >
            {Object.entries(grouped).map(([type, items]) => (
              <div key={type} className="py-2">
                <p className="px-5 pt-3 pb-2 eyebrow">{type}</p>
                <ul>
                  {items.map((item, i) => (
                    <li
                      key={item.key}
                      className={`px-5 py-3 cursor-pointer transition-colors ${
                        i === highlightIdx ? "bg-muted" : "hover:bg-muted/60"
                      }`}
                      onMouseDown={() => {
                        router.push(item.href);
                        setShowSuggestions(false);
                      }}
                      onMouseEnter={() => setHighlightIdx(i)}
                    >
                      <p className="font-serif text-base text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
