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
      "Three free tools you can use right now: a 1-minute box-breathing reset, the 5-4-3-2-1 grounding exercise, and CBT reframes for spiraling thoughts. Plus a quick mood check.",
    path: "/self-help",
    locale,
    keywords: [
      "free self-help tools",
      "5-4-3-2-1 grounding technique",
      "box breathing 4-4-6-2",
      "CBT thought reframes",
      "anxiety coping tools",
      "panic attack help",
      "mood tracker free",
    ],
  });
}

export default function Page() {
  return <SelfHelpClient />;
}
