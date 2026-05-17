import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import TermsClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Terms of service",
    description:
      "The terms under which Life Upside View provides this website, its content, and related services.",
    path: "/terms-of-service",
    locale,
  });
}

export default function Page() {
  return <TermsClient />;
}
