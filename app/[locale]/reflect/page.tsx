import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ReflectClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Reflect",
    description:
      "Three short reads on letting go of control, finding beauty in uncertainty, and learning from stillness. Mindful writing for moments when you need to slow down and see clearly.",
    path: "/reflect",
    locale,
    keywords: [
      "mindfulness reflections",
      "letting go of control",
      "beauty in uncertainty",
      "stillness meditation",
      "mental health reflections",
    ],
  });
}

export default function Page() {
  return <ReflectClient />;
}
