"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

// Unified search data: ensure unique keys by appending type
const SEARCH_DATA = [
  { label: "Home", description: "See the world through a different lens.", href: "/", type: "Page", key: "home-page" },
  { label: "About", description: "Our story, mission, and team.", href: "/about", type: "Page", key: "about-page" },
  { label: "Reflect", description: "Insights for new ways of seeing.", href: "/reflect", type: "Page", key: "reflect-page" },
  { label: "Evolve", description: "Growth, resilience, and transformation.", href: "/evolve", type: "Page", key: "evolve-page" },
  { label: "Explore", description: "Resources and perspectives to uplift your mood.", href: "/explore", type: "Page", key: "explore-page" },
  { label: "Stories", description: "Real stories of navigating the unseen.", href: "/stories", type: "Page", key: "stories-page" },
  { label: "All Stories", description: "Every inspiring story on Life Upside View.", href: "/stories/all-stories", type: "Page", key: "all-stories-page" },
  // Key sections
  { label: "Letting Go of Control", description: "Reflect: Insightful thoughts on control.", href: "/reflect#letting-go", type: "Section", key: "letting-go-section" },
  { label: "The Beauty in Uncertainty", description: "Reflect: Embracing uncertainty.", href: "/reflect#beauty-uncertainty", type: "Section", key: "beauty-uncertainty-section" },
  { label: "Learning from Stillness", description: "Reflect: Lessons from stillness.", href: "/reflect#learning-stillness", type: "Section", key: "learning-stillness-section" },
  { label: "Small Wins Journal", description: "Evolve: Celebrate small victories.", href: "/evolve#small-wins", type: "Section", key: "small-wins-section" },
  { label: "Lessons from Adversity", description: "Evolve: Growth through adversity.", href: "/evolve#lessons-adversity", type: "Section", key: "lessons-adversity-section" },
  { label: "Your Mental Toolkit", description: "Evolve: Tools for resilience.", href: "/evolve#mental-toolkit", type: "Section", key: "mental-toolkit-section" },
  { label: "Guided Journals", description: "Explore: Journaling for well-being.", href: "/explore#guided-journals", type: "Section", key: "guided-journals-section" },
  { label: "Wellness Playlists", description: "Explore: Playlists for your mood.", href: "/explore#wellness-playlists", type: "Section", key: "wellness-playlists-section" },
  { label: "Mindful Articles", description: "Explore: Articles for emotional support.", href: "/explore#mindful-articles", type: "Section", key: "mindful-articles-section" },
  // Stories (sampled, add more as needed)
  { label: "A Break From Despair", description: "How a girl broke free from near depression.", href: "/stories/a-break-from-despair", type: "Story", key: "a-break-from-despair-story" },
  { label: "A Life Defined By Defiance", description: "An extraordinary life of perseverance.", href: "/stories/a-life-defined-by-defiance", type: "Story", key: "a-life-defined-by-defiance-story" },
  { label: "A Light Through Pain", description: "A moving tribute to a young woman who battled sickle cell.", href: "/stories/a-light-through-pain", type: "Story", key: "a-light-through-pain-story" },
  { label: "Broken Dreams, Brighter Paths: Part 1", description: "A med student's derailed dream leads to burnout.", href: "/stories/broken-dreams-brighter-paths", type: "Story", key: "broken-dreams-1-story" },
  { label: "Broken Dreams, Brighter Paths: Part 2", description: "A med student's journey through unexpected detours.", href: "/stories/broken-dreams-brighter-paths-2", type: "Story", key: "broken-dreams-2-story" },
  { label: "From Broken Bones To Unbreakable Dreams", description: "A law student's journey from childhood ambition.", href: "/stories/from-broken-bones-to-unbreakable-dreams", type: "Story", key: "from-broken-bones-story" },
  { label: "My Upside View of Sickle Cell Anemia", description: "Ruqaiyyah Aliyu shares her courageous journey.", href: "/stories/my-upside-view-of-sickle-cell-anemia", type: "Story", key: "muvossa-story" },
  { label: "Safiyya's Story", description: "From a struggling single mother to a beacon of hope.", href: "/stories/safiyya-story", type: "Story", key: "safiyya-story" },
  { label: "Supported by my Fears", description: "A pharmacy student's journey through setbacks.", href: "/stories/supported-by-my-fears", type: "Story", key: "supported-by-my-fears-story" },
  // ...add all other stories here
];

// Typewriter effect for animated placeholder
function useTypewriter(words: string[], typingSpeed = 80, pause = 1200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (charIdx < words[wordIdx].length) {
        timeout = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
        setDisplay(words[wordIdx].slice(0, charIdx + 1));
      } else {
        setTyping(false);
        timeout = setTimeout(() => setTyping(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx((c) => c - 1), typingSpeed / 2);
        setDisplay(words[wordIdx].slice(0, charIdx - 1));
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, typing, wordIdx, words, typingSpeed, pause]);

  return display;
}

export default function SearchHero() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIdx, setHighlightIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Animated placeholder suggestions
  const animatedSuggestions = [
    "Stories of Resilience",
    "Mental Health Resources",
    "Support Networks",
    "Personal Growth",
    "Well-being Tools",
    "Real Life Experiences",
  ];
  const animatedPlaceholder = useTypewriter(animatedSuggestions);

  // Filtered results
  const filtered = input.trim()
    ? SEARCH_DATA.filter((item) =>
        item.label.toLowerCase().includes(input.toLowerCase()) ||
        item.description.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  // Grouped results
  const grouped = filtered.reduce<{ [key: string]: typeof SEARCH_DATA }>((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item);
    return acc;
  }, {});

  // Handle search/enter
  const handleSearch = () => {
    if (input.trim()) {
      router.push(`/search?q=${encodeURIComponent(input.trim())}`);
      setShowSuggestions(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    setHighlightIdx(-1);
  }, [input, showSuggestions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full flex flex-col items-center"
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center px-2 relative">
        <div className="relative w-full flex items-center bg-white/80 backdrop-blur-md shadow-xl rounded-full border border-white/60 focus-within:ring-2 focus-within:ring-yellow-300 transition-all duration-300">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer z-10" onClick={handleSearch}>
            <Search className="h-7 w-7" />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              } else if (e.key === "ArrowDown") {
                setHighlightIdx((i) => Math.min(i + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                setHighlightIdx((i) => Math.max(i - 1, 0));
              }
            }}
            placeholder={animatedPlaceholder || "Search Life Upside View..."}
            className="w-full pl-16 pr-8 py-5 bg-transparent text-gray-900 placeholder-gray-500 font-semibold text-xl md:text-2xl rounded-full outline-none border-none focus:ring-0 transition-all duration-300"
            autoComplete="off"
            aria-label="Search Life Upside View"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-bold text-lg px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all duration-200"
            onClick={handleSearch}
            aria-label="Search"
            type="button"
          >
            Search
          </button>
        </div>
        {/* Suggestions dropdown */}
        <AnimatePresence>
          {showSuggestions && filtered.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 mt-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl z-20 max-h-64 overflow-y-auto"
              style={{ top: '100%', marginTop: '1rem' }}
            >
              {Object.entries(grouped).map(([type, items]) => (
                <li key={type} className="px-6 pt-3 pb-1 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {type}
                  <ul>
                    {items.map((item, i) => (
                      <li
                        key={item.key}
                        className={`px-2 py-3 cursor-pointer text-gray-900 font-semibold text-lg transition-all duration-200 rounded-xl mx-2 my-1 flex items-center gap-2 ${
                          i === highlightIdx ? "bg-yellow-300 text-gray-900" : "hover:bg-yellow-100"
                        }`}
                        onMouseDown={() => {
                          router.push(item.href);
                          setShowSuggestions(false);
                        }}
                        onMouseEnter={() => setHighlightIdx(i)}
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-gray-500 font-normal">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 