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
      "Real, first-person stories of anxiety, depression, trauma, recovery, and resilience. Read lived experiences from our community to feel less alone and find language for what you're carrying.",
    path: "/stories",
    locale,
    keywords: [
      "mental health stories",
      "lived experience",
      "anxiety stories",
      "depression stories",
      "recovery stories",
      "trauma stories",
    ],
  });
}

export default function Page() {
  return <StoriesClient />;
}
