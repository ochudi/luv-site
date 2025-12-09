"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

// Import the same SEARCH_DATA as in SearchHero
const SEARCH_DATA = [
  { label: "Home", description: "See the world through a different lens.", href: "/", type: "Page", key: "home-page" },
  { label: "About", description: "Our story, mission, and team.", href: "/about", type: "Page", key: "about-page" },
  { label: "Reflect", description: "Insights for new ways of seeing.", href: "/reflect", type: "Page", key: "reflect-page" },
  { label: "Evolve", description: "Growth, resilience, and transformation.", href: "/evolve", type: "Page", key: "evolve-page" },
  { label: "Explore", description: "Resources and perspectives to uplift your mood.", href: "/explore", type: "Page", key: "explore-page" },
  { label: "Stories", description: "Real stories of navigating the unseen.", href: "/stories", type: "Page", key: "stories-page" },
  { label: "All Stories", description: "Every inspiring story on Life Upside View.", href: "/stories/all-stories", type: "Page", key: "all-stories-page" },
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
  // ...add all other stories here
];

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}

function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  // Filter and group results
  const { filtered, grouped } = useMemo(() => {
    const filtered = q.trim()
      ? SEARCH_DATA.filter(
          (item) =>
            item.label.toLowerCase().includes(q.toLowerCase()) ||
            item.description.toLowerCase().includes(q.toLowerCase())
        )
      : [];
    const grouped = filtered.reduce<{ [key: string]: typeof SEARCH_DATA }>((acc, item) => {
      acc[item.type] = acc[item.type] || [];
      acc[item.type].push(item);
      return acc;
    }, {});
    return { filtered, grouped };
  }, [q]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Search Results</h1>
        {q ? (
          <p className="text-lg text-muted-foreground mb-8">
            Showing results for <span className="font-bold text-yellow-400">{q}</span>
          </p>
        ) : (
          <p className="text-lg text-muted-foreground mb-8">Enter a search term above.</p>
        )}
        {filtered.length === 0 ? (
          <div className="bg-card rounded-xl p-8 shadow-lg">
            <p className="text-muted-foreground">No results found. Try a different search term.</p>
          </div>
        ) : (
          <div className="bg-white/95 dark:bg-black/80 rounded-2xl shadow-2xl p-6 text-left mt-6">
            {Object.entries(grouped).map(([type, items]) => (
              <div key={type} className="mb-8">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">{type}</div>
                <ul>
                  {items.map((item) => (
                    <li key={item.key} className="mb-2">
                      <a
                        href={item.href}
                        className="block px-4 py-3 rounded-xl hover:bg-yellow-100 dark:hover:bg-yellow-400/20 transition-all text-gray-900 dark:text-white font-semibold text-lg"
                      >
                        <span>{item.label}</span>
                        <span className="block text-xs text-gray-500 dark:text-gray-300 font-normal">{item.description}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 