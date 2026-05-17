import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HomeClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Home",
    description:
      "Real stories, evidence-informed tools, and pathways to mental health support. Life Upside View supports emotional wellness and recovery for those navigating anxiety, depression, trauma, and overwhelm.",
    path: "/",
    locale,
    keywords: [
      "mental health foundation",
      "mental wellness",
      "lived experience stories",
      "self-help tools",
      "mental health support",
    ],
  });
}

export default function Page() {
  return <HomeClient />;
}
