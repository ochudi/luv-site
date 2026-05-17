import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AllStoriesClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "All stories",
    description:
      "Search and filter every lived-experience story by topic — anxiety and depression, trauma, recovery, resilience. Find the story that meets you where you are.",
    path: "/stories/all-stories",
    locale,
    keywords: [
      "search mental health stories",
      "filter stories by topic",
      "lived experience archive",
      "anxiety story library",
    ],
  });
}

export default function Page() {
  return <AllStoriesClient />;
}
