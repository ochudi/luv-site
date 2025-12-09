import type React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import FloatingBotButton from "@/components/FloatingBotButton";
import { Toaster } from "@/components/ui/toaster"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Disable caching for locale pages to ensure language switches work properly
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Life Upside View",
  description:
    "Life Upside View Mental Health Foundation provides inspiring real-life stories, mental health resources, self-help tools, and access to professional support to empower individuals on their wellness journey.",
  keywords:
    "mental health, mental wellness, self-help, emotional support, mental health resources, therapy access, mental resilience, personal growth, life challenges, mental well-being",
  openGraph: {
    title:
      "Life Upside View Mental Health Foundation | Empowering Mental Well-being",
    description:
      "Join a supportive community sharing real-life stories, mental health resources, and self-help tools to promote mental resilience and well-being.",
    url: "https://lifeupsideview.org",
    type: "website",
    images: [
      {
        url: "https://lifeupsideview.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Life Upside View Mental Health Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Upside View Mental Health Foundation | Mental Wellness & Support",
    description:
      "Discover inspiring stories, mental health resources, and self-help tools to support your well-being.",
    images: ["https://lifeupsideview.org/og-image.jpg"],
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <div className={`${workSans.className} antialiased`}>
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange={false}
      >
        <div className="flex min-h-screen flex-col">
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
