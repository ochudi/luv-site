import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CommandMenu } from "@/components/command-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Y.Modern | Luxury Experience",
  description: "Experience luxury and innovation with Y.Modern",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CommandMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'