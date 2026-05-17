import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CheckupsClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Mental health check-up",
    description:
      "A quick, private self-assessment to reflect on stress, mood, sleep, and burnout. This is not a diagnosis — it's a tool to help you decide whether you might benefit from extra support.",
    path: "/checkups",
    locale,
    keywords: [
      "mental health check-up",
      "mental health self-assessment",
      "burnout test",
      "anxiety screening",
      "depression screening",
    ],
  });
}

export default function Page() {
  return <CheckupsClient />;
}
