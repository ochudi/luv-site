import type { MetadataRoute } from "next";
import { getStories } from "@/lib/stories-i18n";

const SITE_URL = "https://lifeupsideview.org";
const LOCALES = ["en", "fr"] as const;
type Locale = (typeof LOCALES)[number];

// English uses no prefix (localePrefix: "as-needed"); French uses /fr
const localePath = (locale: Locale, path: string) =>
  locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;

const url = (locale: Locale, path: string) =>
  `${SITE_URL}${localePath(locale, path)}`;

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/",                  changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",             changeFrequency: "monthly", priority: 0.8 },
  { path: "/stories",           changeFrequency: "weekly",  priority: 0.9 },
  { path: "/stories/all-stories", changeFrequency: "weekly", priority: 0.8 },
  { path: "/self-help",         changeFrequency: "monthly", priority: 0.8 },
  { path: "/checkups",          changeFrequency: "monthly", priority: 0.8 },
  { path: "/support",           changeFrequency: "monthly", priority: 0.9 },
  { path: "/reflect",           changeFrequency: "monthly", priority: 0.6 },
  { path: "/evolve",            changeFrequency: "monthly", priority: 0.6 },
  { path: "/explore",           changeFrequency: "monthly", priority: 0.6 },
  { path: "/write",             changeFrequency: "monthly", priority: 0.7 },
  { path: "/volunteer",         changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy-policy",    changeFrequency: "yearly",  priority: 0.3 },
  { path: "/terms-of-service",  changeFrequency: "yearly",  priority: 0.3 },
  { path: "/cookie-policy",     changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static pages — one entry per locale with hreflang alternates
  for (const { path, changeFrequency, priority } of STATIC_PATHS) {
    for (const locale of LOCALES) {
      entries.push({
        url: url(locale, path),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, url(l, path)])
          ),
        },
      });
    }
  }

  // Dynamic story pages
  for (const locale of LOCALES) {
    const stories = getStories(locale);
    for (const story of stories) {
      entries.push({
        url: url(locale, `/stories/${story.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, url(l, `/stories/${story.slug}`)])
          ),
        },
      });
    }
  }

  return entries;
}
