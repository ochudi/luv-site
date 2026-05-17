import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import StoriesClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Stories",
    description:
      "First-person stories of anxiety, depression, trauma, sickle cell, single motherhood, and recovery — written by the people who lived them. Read to feel less alone.",
    path: "/stories",
    locale,
    keywords: [
      "mental health stories",
      "lived experience stories",
      "anxiety recovery story",
      "depression recovery",
      "trauma healing",
      "sickle cell story",
      "personal essays mental health",
    ],
  });
}

export default function Page() {
  return <StoriesClient />;
}
