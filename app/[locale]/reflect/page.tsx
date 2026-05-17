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
      "Insights on letting go of control, finding beauty in uncertainty, and learning from stillness. Short reflective reads for new ways of seeing the moments that shape us.",
    path: "/reflect",
    locale,
    keywords: ["mental health reflections", "mindfulness reading", "letting go", "uncertainty", "stillness"],
  });
}

export default function Page() {
  return <ReflectClient />;
}
