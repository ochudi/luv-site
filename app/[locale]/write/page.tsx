import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import WriteClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Share your story",
    description:
      "Your story might be the lifeline someone else is searching for. Submit a lived-experience piece to Life Upside View — we read every submission with care.",
    path: "/write",
    locale,
    keywords: ["share mental health story", "submit story", "write for Life Upside View", "personal story submission"],
  });
}

export default function Page() {
  return <WriteClient />;
}
