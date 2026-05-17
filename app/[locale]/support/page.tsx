import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SupportClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Get help now",
    description:
      "If you're in crisis or unsafe right now: a 4-step safety plan, direct line to emergency services, helpline finder, and the exact words to use when asking someone for help.",
    path: "/support",
    locale,
    keywords: [
      "mental health crisis support",
      "suicide prevention helpline",
      "find a helpline",
      "what to say when asking for help",
      "self-harm safety plan",
      "mental health emergency Nigeria",
    ],
  });
}

export default function Page() {
  return <SupportClient />;
}
