import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, SITE_URL, SITE_NAME } from "@/lib/seo";
import { getStoryBySlug } from "@/lib/stories-i18n";
import StoryClient from "./client";

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = getStoryBySlug(slug, locale === "fr" ? "fr" : "en");

  if (!story) {
    return pageMetadata({
      title: "Story not found",
      description: "This story could not be found.",
      path: `/stories/${slug}`,
      locale,
      noIndex: true,
    });
  }

  return pageMetadata({
    title: story.title,
    description: story.description,
    path: `/stories/${slug}`,
    locale,
    image: story.coverImage,
    imageAlt: story.title,
    type: "article",
    keywords: [
      "mental health story",
      "lived experience",
      "personal essay",
      "recovery",
      story.title,
    ],
  });
}

export default async function Page({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const story = getStoryBySlug(slug, locale === "fr" ? "fr" : "en");
  if (!story) notFound();

  const path =
    locale === "en" ? `/stories/${slug}` : `/${locale}/stories/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.description,
    image: [`${SITE_URL}${story.coverImage}`],
    url: `${SITE_URL}${path}`,
    inLanguage: locale === "fr" ? "fr" : "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/site/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <StoryClient />
    </>
  );
}
