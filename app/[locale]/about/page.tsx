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
      "Founded to destigmatize mental health in African communities and beyond. Meet the team, learn what drives us, and read the values guiding every story and resource we publish.",
    path: "/about",
    locale,
    keywords: [
      "Life Upside View team",
      "mental health foundation Nigeria",
      "African mental health advocacy",
      "founder Ernest Nwachukwu",
      "nonprofit mental health",
    ],
  });
}

export default function Page() {
  return <AboutClient />;
}
