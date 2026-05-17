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
      "Submit a lived-experience story to Life Upside View. Anonymity is supported, every submission is read with care, and your words might be the lifeline someone else is searching for.",
    path: "/write",
    locale,
    keywords: [
      "submit mental health story",
      "share lived experience",
      "write for Life Upside View",
      "anonymous story submission",
      "mental health writing",
    ],
  });
}

export default function Page() {
  return <WriteClient />;
}
