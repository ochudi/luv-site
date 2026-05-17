import type { Metadata } from "next";

export const SITE_URL = "https://lifeupsideview.org";
export const SITE_NAME = "Life Upside View";
export const DEFAULT_OG_IMAGE = "/images/lifeupsideview.png";

type Locale = "en" | "fr";

interface PageSeoInput {
  title: string;
  description: string;
  /** Path without locale prefix, e.g. "/about" or "/stories/all-stories" */
  path: string;
  locale: Locale | string;
  /** Override the OG image. Relative paths resolve against metadataBase. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  /** Stop search engines from indexing this page */
  noIndex?: boolean;
  /** Optional ISO date — used for OG type="article" */
  publishedTime?: string;
  /** Keywords specific to this page (added to default keywords) */
  keywords?: string[];
}

const localePath = (locale: string, path: string) =>
  locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;

/**
 * Builds metadata for a page with proper canonical, hreflang, OG, and Twitter
 * cards. Use inside `generateMetadata` so the locale is known.
 */
export function pageMetadata({
  title,
  description,
  path,
  locale,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "Life Upside View Mental Health Foundation",
  type = "website",
  noIndex,
  publishedTime,
  keywords,
}: PageSeoInput): Metadata {
  const url = localePath(locale, path);
  const isHome = path === "/";

  const ogImageEntry =
    image === DEFAULT_OG_IMAGE
      ? {
          url: image,
          width: 1200,
          height: 500,
          alt: imageAlt,
          type: "image/png" as const,
        }
      : { url: image, alt: imageAlt };

  // For home, use the absolute title (bypasses title.template).
  // For other pages, the layout's title.template fills it as "<title> · Life Upside View".
  const resolvedTitle = isHome
    ? { absolute: `${SITE_NAME} — Mental Health Foundation` }
    : title;

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: localePath("en", path),
        fr: localePath("fr", path),
      },
    },
    openGraph: {
      title: isHome ? `${SITE_NAME} — Mental Health Foundation` : `${title} · ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      images: [ogImageEntry],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: isHome ? `${SITE_NAME} Mental Health Foundation` : `${title} · ${SITE_NAME}`,
      description,
      images: [image],
      site: "@lifeUpsideView",
      creator: "@lifeUpsideView",
    },
    ...(noIndex
      ? {
          robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
        }
      : {}),
  };
}
