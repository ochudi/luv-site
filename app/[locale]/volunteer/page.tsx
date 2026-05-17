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
      "Offer your time, skills, or lived experience to support mental wellbeing. Open to writers, designers, peer supporters, and translators worldwide — apply in five minutes.",
    path: "/volunteer",
    locale,
    keywords: [
      "mental health volunteer",
      "remote mental health volunteer",
      "volunteer Nigeria",
      "writing volunteer NGO",
      "mental health foundation volunteer",
    ],
  });
}

export default function Page() {
  return <VolunteerClient />;
}
