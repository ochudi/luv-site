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
      "The terms governing your use of lifeupsideview.org — acceptable use, intellectual property of stories and content, limitations of liability, and how we update these terms.",
    path: "/terms-of-service",
    locale,
  });
}

export default function Page() {
  return <TermsClient />;
}
