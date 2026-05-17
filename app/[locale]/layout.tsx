import type React from "react";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import FloatingBotButton from "@/components/FloatingBotButton";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SITE_URL = "https://lifeupsideview.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Life Upside View — Mental Health Foundation",
    template: "%s · Life Upside View",
  },
  description:
    "Life Upside View Mental Health Foundation supports emotional wellness and recovery through real-life stories, evidence-informed self-help tools, mental health check-ups, and access to professional support.",
  keywords: [
    "mental health",
    "mental wellness",
    "mental health foundation",
    "self-help",
    "emotional support",
    "mental health resources",
    "therapy access",
    "anxiety support",
    "depression support",
    "trauma recovery",
    "lived experience stories",
    "mental health Nigeria",
    "Life Upside View",
  ],
  applicationName: "Life Upside View",
  authors: [{ name: "Life Upside View Mental Health Foundation", url: SITE_URL }],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "Life Upside View Mental Health Foundation",
    description:
      "Real stories, evidence-informed tools, and pathways to mental health support — for anyone navigating anxiety, depression, trauma, or emotional overwhelm.",
    url: "/",
    siteName: "Life Upside View",
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Life Upside View Mental Health Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Upside View Mental Health Foundation",
    description:
      "Real stories, mental health resources, and self-help tools to support your emotional wellbeing.",
    images: ["/og-image.jpg"],
    creator: "@lifeUpsideView",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "ighY4_Zzw8pC1kh_0ncrAgElyXBYyrhhCxUx-BTpiIs",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Life Upside View Mental Health Foundation",
  alternateName: "Life Upside View",
  url: SITE_URL,
  logo: `${SITE_URL}/images/site/logo.png`,
  description:
    "Mental health foundation supporting emotional wellness and recovery through lived stories, self-help tools, and access to professional support.",
  sameAs: [
    "https://www.instagram.com/life_upside_view/",
    "https://x.com/lifeUpsideView",
    "https://youtube.com/@life_upside_view",
    "https://www.facebook.com/LifeUpsideView",
    "https://www.linkedin.com/company/life-upside-view-mental-health-foundation/",
    "https://www.tiktok.com/@life.upside.view",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "general support",
      email: "truelifestories@lifeupsideview.org",
      availableLanguage: ["English", "French"],
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <div className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange={false}
      >
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CommandMenu />
        </div>
        <FloatingBotButton />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
