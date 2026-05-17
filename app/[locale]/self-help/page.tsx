import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SelfHelpClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Self-help toolkit",
    description:
      "Evidence-informed self-help tools for hard moments. 1-minute breathing reset, 5-4-3-2-1 grounding, CBT reframe starters, and a quick mood check — short practices to return to steady ground.",
    path: "/self-help",
    locale,
    keywords: [
      "self help mental health",
      "grounding technique",
      "5-4-3-2-1 grounding",
      "breathing exercise",
      "CBT reframes",
      "coping tools",
      "anxiety coping",
    ],
  });
}

export default function Page() {
  return <SelfHelpClient />;
}
