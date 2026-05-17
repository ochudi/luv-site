import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "About",
    description:
      "Who we are and why we do this. Life Upside View is a mental health foundation built around lived experience, evidence-informed practice, and accessible support — meet the team and our mission.",
    path: "/about",
    locale,
    keywords: ["about Life Upside View", "mental health foundation team", "mission", "values"],
  });
}

export default function Page() {
  return <AboutClient />;
}
