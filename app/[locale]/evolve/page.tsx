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
      "Growth, resilience, and transformation. Tools and writing for celebrating small wins, learning from adversity, and building your personal mental toolkit.",
    path: "/evolve",
    locale,
    keywords: ["personal growth", "resilience", "small wins journal", "mental toolkit", "transformation"],
  });
}

export default function Page() {
  return <EvolveClient />;
}
