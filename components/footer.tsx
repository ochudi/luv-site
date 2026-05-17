"use client";

import { Link } from "@/i18n/routing";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("footer");

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
        { href: "/checkups", labelKey: "mentalHealthCheckUps" },
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
    { href: "https://www.instagram.com/life_upside_view/", label: "Instagram", icon: Instagram },
    { href: "https://x.com/lifeUpsideView", label: "X", icon: Twitter },
    { href: "https://youtube.com/@life_upside_view", label: "YouTube", icon: Youtube },
    { href: "https://www.facebook.com/LifeUpsideView", label: "Facebook", icon: Facebook },
    { href: "https://www.linkedin.com/company/life-upside-view-mental-health-foundation/", label: "LinkedIn", icon: Linkedin },
    { href: "https://www.tiktok.com/@life.upside.view", label: "TikTok", icon: TikTokIcon },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="editorial-container py-20 md:py-28">
        {/* Top — wordmark + crisis line */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-border">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">{t("brand")}</p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-2xl">
              You are not alone. <span className="italic text-foreground/60">Healing is possible.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l border-border flex flex-col justify-between gap-6">
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              {t("brandDescription")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/support" className="btn-solid">
                Get Help Now
              </Link>
              <a
                href="https://paystack.shop/pay/life-upside-view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {t("donate")}
              </a>
            </div>
          </div>
        </div>

        {/* Middle — link columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 py-16">
          {navSections.map((section) => (
            <div key={section.titleKey} className="md:col-span-3">
              <p className="eyebrow mb-6">{t(section.titleKey)}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3 col-span-2">
            <p className="eyebrow mb-6">{t("connectWithUs")}</p>
            <div className="flex flex-wrap items-center gap-5 mb-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t("connectDescription")}
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 items-center">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">{t("privacyPolicy")}</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">{t("termsOfService")}</Link>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors">{t("cookiePolicy")}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
