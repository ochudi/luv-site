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
      "Crisis resources, immediate safety steps, and pathways to professional and community mental health support. If you or someone you know may be in immediate danger, this page is for you.",
    path: "/support",
    locale,
    keywords: [
      "mental health crisis support",
      "suicide prevention",
      "find a helpline",
      "mental health emergency",
      "how to ask for help mental health",
      "self-harm safety plan",
    ],
  });
}

export default function Page() {
  return <SupportClient />;
}
