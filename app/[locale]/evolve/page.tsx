import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import EvolveClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Evolve",
    description:
      "A small-wins journal, lessons from adversity, and a personal mental toolkit. Practical writing on building resilience without pretending the hard stuff away.",
    path: "/evolve",
    locale,
    keywords: [
      "small wins journal",
      "personal resilience",
      "mental health toolkit",
      "lessons from adversity",
      "personal growth practices",
    ],
  });
}

export default function Page() {
  return <EvolveClient />;
}
