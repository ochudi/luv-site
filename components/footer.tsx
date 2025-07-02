"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// TikTok SVG icon component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M232 72.9v36.2a103.88 103.88 0 01-56.3-16.5v73.6a88 88 0 11-88-88h8v36.3a51.89 51.89 0 00-8-.6 52 52 0 1052 52V24h36.3a67.61 67.61 0 0048.7 48.9z" />
  </svg>
);

export default function Footer() {
  const navSections = [
    {
      title: "EXPLORE",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/stories", label: "Stories" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { href: "/self-help", label: "Self-Help" },
        { href: "/check-ups", label: "Mental Health Check-Ups" },
        { href: "/support", label: "Find Support" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/cookie-policy", label: "Cookie Policy" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/life_upside_view/",
      label: "Instagram",
      icon: Instagram,
      color: "#E1306C",
      hover: "#B22556",
    },
    {
      href: "https://x.com/lifeUpsideView",
      label: "X (Formerly Twitter)",
      icon: Twitter,
      color: "#1DA1F2",
      hover: "#1877C9",
    },
    {
      href: "https://youtube.com/@life_upside_view",
      label: "YouTube",
      icon: Youtube,
      color: "#FF0000",
      hover: "#B20000",
    },
    {
      href: "https://www.facebook.com/LifeUpsideView",
      label: "Facebook",
      icon: Facebook,
      color: "#1877F3",
      hover: "#145DB2",
    },
    {
      href: "https://www.linkedin.com/company/life-upside-view-mental-health-foundation/",
      label: "LinkedIn",
      icon: Linkedin,
      color: "#0A66C2",
      hover: "#004182",
    },
    {
      href: "https://www.tiktok.com/@life.upside.view",
      label: "TikTok",
      icon: TikTokIcon,
      color: "#000000",
      hover: "#25F4EE",
    },
  ];

  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Intro */}
          <div>
            <h3 className="text-lg font-bold mb-4">LIFE UPSIDE VIEW</h3>
            <p className="text-muted-foreground">
              Sharing real stories, offering resources, and providing support to
              help you navigate life's challenges.
            </p>
          </div>

          {/* Navigation Links */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ href, label, icon: Icon, color, hover }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-colors"
                  aria-label={label}
                >
                  <Icon
                    className="h-5 w-5 transition-colors"
                    style={{ color }}
                  />
                  <style jsx>{`
                    .group:hover .h-5 {
                      color: ${hover} !important;
                    }
                  `}</style>
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground">
              Join our community. Subscribe for inspiring stories and mental
              health insights.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Life Upside View Mental Health
            Foundation. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex flex-wrap gap-x-4 gap-y-2 items-center">
            <Link href="/privacy-policy" className="hover:underline hover:text-foreground transition-colors" aria-label="Privacy Policy">Privacy Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/terms-of-service" className="hover:underline hover:text-foreground transition-colors" aria-label="Terms of Service">Terms of Service</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/cookie-policy" className="hover:underline hover:text-foreground transition-colors" aria-label="Cookie Policy">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
