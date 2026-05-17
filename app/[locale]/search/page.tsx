import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SearchClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Search",
    description: "Search Life Upside View — stories, tools, and support pathways.",
    path: "/search",
    locale,
    noIndex: true,
  });
}

export default function Page() {
  return <SearchClient />;
}
