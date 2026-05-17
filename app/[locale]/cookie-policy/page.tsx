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
      "Plain-language explanation of the cookies Life Upside View uses, what they do, how to manage or disable them in your browser, and which are first-party vs third-party.",
    path: "/cookie-policy",
    locale,
  });
}

export default function Page() {
  return <CookieClient />;
}
