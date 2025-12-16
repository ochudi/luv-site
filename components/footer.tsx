"use client";

import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('footer');
  
  const navSections = [
    {
      titleKey: "explore",
      links: [
        { href: "/", labelKey: "home" },
        { href: "/about", labelKey: "about" },
        { href: "/stories", labelKey: "stories" },
      ],
    },
    {
      titleKey: "resources",
      links: [
        { href: "/self-help", labelKey: "selfHelp" },
        { href: "/check-ups", labelKey: "mentalHealthCheckUps" },
        { href: "/support", labelKey: "findSupport" },
      ],
    },
    {
      titleKey: "legal",
      links: [
        { href: "/privacy-policy", labelKey: "privacyPolicy" },
        { href: "/terms-of-service", labelKey: "termsOfService" },
        { href: "/cookie-policy", labelKey: "cookiePolicy" },
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
            <h3 className="text-lg font-bold mb-4">{t('brand')}</h3>
            <p className="text-muted-foreground">
              {t('brandDescription')}
            </p>
          </div>

          {/* Navigation Links */}
          {navSections.map((section) => (
            <div key={section.titleKey}>
              <h3 className="text-lg font-bold mb-4">{t(section.titleKey)}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('connectWithUs')}</h3>
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
              {t('connectDescription')}
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 flex flex-wrap gap-x-4 gap-y-2 items-center">
            <Link href="/privacy-policy" className="hover:underline hover:text-foreground transition-colors" aria-label="Privacy Policy">{t('privacyPolicy')}</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/terms-of-service" className="hover:underline hover:text-foreground transition-colors" aria-label="Terms of Service">{t('termsOfService')}</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/cookie-policy" className="hover:underline hover:text-foreground transition-colors" aria-label="Cookie Policy">{t('cookiePolicy')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
