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
      "Browse every lived-experience story published on Life Upside View. Filter by topic — anxiety, depression, trauma, recovery, resilience — and find the one that meets you where you are.",
    path: "/stories/all-stories",
    locale,
    keywords: [
      "all mental health stories",
      "lived experience archive",
      "mental health blog",
      "personal stories",
    ],
  });
}

export default function Page() {
  return <AllStoriesClient />;
}
