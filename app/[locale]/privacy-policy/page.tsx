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
      "How Life Upside View handles your data, cookies, analytics, and the choices you have over your personal information.",
    path: "/privacy-policy",
    locale,
  });
}

export default function Page() {
  return <PrivacyClient />;
}
