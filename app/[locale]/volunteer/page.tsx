import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import VolunteerClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Volunteer",
    description:
      "Join a community of people offering time, care, and skill in service of mental wellbeing. Apply to volunteer with Life Upside View.",
    path: "/volunteer",
    locale,
    keywords: ["mental health volunteer", "volunteer Nigeria", "mental health foundation volunteer"],
  });
}

export default function Page() {
  return <VolunteerClient />;
}
