import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CheckupsClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    title: "Mental health check-up",
    description:
      "A free, private 5-question self-assessment covering mood, sleep, isolation, coping, and safety. Get an immediate read on whether you might benefit from support — no signup, no diagnosis.",
    path: "/checkups",
    locale,
    keywords: [
      "free mental health check-up",
      "mental health self-assessment",
      "anxiety screening online",
      "depression test free",
      "burnout assessment",
      "wellbeing check",
    ],
  });
}

export default function Page() {
  return <CheckupsClient />;
}
