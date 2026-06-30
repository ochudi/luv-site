"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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

export default function SearchPage() {
  const t = useTranslations("searchPage");
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <p className="eyebrow">{t("loading")}</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}

function SearchResults() {
  const t = useTranslations("searchPage");
  const tCat = useTranslations("search.categories");
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const { filtered, grouped } = useMemo(() => {
    const filtered = q.trim()
      ? SEARCH_DATA.filter(
          (item) =>
            item.label.toLowerCase().includes(q.toLowerCase()) ||
            item.description.toLowerCase().includes(q.toLowerCase())
        )
      : [];
    const grouped = filtered.reduce<{ [k: string]: typeof SEARCH_DATA }>(
      (acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
      },
      {}
    );
    return { filtered, grouped };
  }, [q]);

  const typeLabel = (type: string) => {
    const key = type.toLowerCase() as "page" | "section" | "story";
    try {
      return tCat(key);
    } catch {
      return type;
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-40 md:pt-44 pb-16 md:pb-20">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <p className="eyebrow">{t("eyebrowSearch")}</p>
              <p className="eyebrow mt-1">{t("eyebrowResults")}</p>
            </div>
            <div className="md:col-span-9">
              {q ? (
                <h1 className="font-serif display-2 tracking-tight max-w-4xl">
                  {t("resultsFor")}{" "}
                  <span className="italic text-foreground/55">
                    &ldquo;{q}&rdquo;
                  </span>
                </h1>
              ) : (
                <h1 className="font-serif display-2 tracking-tight max-w-4xl">
                  {t("enterTerm")}
                </h1>
              )}
              {q && (
                <p className="eyebrow mt-8 text-muted-foreground">
                  {filtered.length}{" "}
                  {filtered.length === 1 ? t("match") : t("matches")}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="editorial-container">
          {filtered.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center border border-border p-12 md:p-16">
              <p className="eyebrow mb-4">{t("nothingFound")}</p>
              <p className="font-serif text-2xl md:text-3xl tracking-tight">
                {t("noResults")}
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-16">
              {Object.entries(grouped).map(([type, items]) => (
                <div key={type}>
                  <p className="eyebrow mb-6 text-foreground/60">
                    {typeLabel(type)}
                  </p>
                  <ul className="border-t border-border">
                    {items.map((item) => (
                      <li key={item.key}>
                        <a
                          href={item.href}
                          className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-border hover:bg-muted/40 transition-colors px-2 -mx-2"
                        >
                          <div className="md:col-span-5">
                            <p className="font-serif text-xl md:text-2xl tracking-tight group-hover:opacity-70 transition-opacity">
                              {item.label}
                            </p>
                          </div>
                          <div className="md:col-span-6">
                            <p className="text-[14px] text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="md:col-span-1 flex md:justify-end items-center">
                            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
