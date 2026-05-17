import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PrivacyClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Privacy policy",
    description:
      "Exactly what data Life Upside View collects (very little), how cookies and Google Analytics are used, who your data is shared with, and how to request deletion of your information.",
    path: "/privacy-policy",
    locale,
  });
}

export default function Page() {
  return <PrivacyClient />;
}
