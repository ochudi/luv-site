import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ExploreClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Explore",
    description:
      "Curated journals to start writing, wellness playlists to steady the day, and mindful articles to read at your own pace. Resources to support your emotional wellbeing.",
    path: "/explore",
    locale,
    keywords: [
      "guided journals mental health",
      "wellness playlists",
      "mindful articles",
      "free wellbeing resources",
      "journaling prompts",
    ],
  });
}

export default function Page() {
  return <ExploreClient />;
}
