import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CookieClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Cookie policy",
    description:
      "What cookies Life Upside View uses, how we use them, and how you can manage cookie preferences.",
    path: "/cookie-policy",
    locale,
  });
}

export default function Page() {
  return <CookieClient />;
}
