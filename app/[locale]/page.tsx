import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HomeClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Home",
    description:
      "You are not alone. Healing is possible. Read first-person stories of anxiety, depression and trauma, take a free mental health check-up, and find immediate crisis support — all in one place.",
    path: "/",
    locale,
    keywords: [
      "mental health foundation",
      "free mental health check-up",
      "lived experience stories",
      "mental health support Nigeria",
      "anxiety help",
      "depression help",
      "crisis support",
    ],
  });
}

export default function Page() {
  return <HomeClient />;
}
