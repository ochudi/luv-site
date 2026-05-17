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
      "Guided journals, wellness playlists, and mindful articles to uplift your mood and support emotional wellbeing.",
    path: "/explore",
    locale,
    keywords: ["guided journals", "wellness playlists", "mindful articles", "wellbeing resources"],
  });
}

export default function Page() {
  return <ExploreClient />;
}
