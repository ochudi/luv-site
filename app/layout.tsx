import type React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${workSans.className} antialiased`}>
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
      </body>
    </html>
  );
}