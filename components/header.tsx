"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("navigation");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { nameKey: "about", path: "/about" },
    { nameKey: "stories", path: "/stories" },
    { name: "Tools", path: "/self-help" },
    { name: "Check-Up", path: "/checkups" },
    { name: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      setOverHero(window.scrollY < window.innerHeight * 0.7);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages that open with a full-bleed dark image/video hero
  const isAllStories = pathname === "/stories/all-stories";
  const hasDarkHero =
    !isAllStories &&
    (pathname === "/" ||
      pathname === "/about" ||
      pathname === "/stories" ||
      pathname.startsWith("/stories/"));
  const transparent = hasDarkHero && overHero && !scrolled && !isOpen;

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const textTone = transparent ? "text-white" : "text-foreground";
  const subTone = transparent ? "text-white/80" : "text-muted-foreground";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || isOpen
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="editorial-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Life Upside View — home"
          onClick={() => setIsOpen(false)}
          className="relative z-50 inline-flex items-center"
        >
          <Image
            src="/images/site/logo.png"
            alt="Life Upside View"
            width={705}
            height={354}
            priority
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300",
                  textTone,
                  "hover:opacity-70",
                  active && "after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:bg-current"
                )}
              >
                {item.nameKey ? t(item.nameKey) : item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className={cn("flex items-center gap-1", subTone)}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <a
            href="https://paystack.shop/pay/life-upside-view"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-[11px] uppercase tracking-[0.22em] font-medium border-b border-current pb-1 transition-opacity hover:opacity-70",
              textTone
            )}
          >
            {t("donate")}
          </a>
          <Link
            href="/support"
            className={cn(
              "inline-flex items-center px-5 py-3 text-[10px] uppercase tracking-[0.24em] font-medium border transition-colors duration-300",
              transparent
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-foreground text-foreground hover:bg-foreground hover:text-background"
            )}
          >
            Get Help
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("z-50 focus:outline-none", textTone)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 h-screen w-screen bg-background z-40 flex flex-col"
          >
            <div className="editorial-container pt-24 pb-12 flex-1 flex flex-col">
              <div className="eyebrow mb-10">Menu</div>
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 + index * 0.06 }}
                  >
                    <Link
                      href={item.path}
                      className={cn(
                        "font-serif text-4xl md:text-5xl tracking-tight transition-opacity",
                        pathname === item.path
                          ? "text-foreground"
                          : "text-foreground/55 hover:text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.nameKey ? t(item.nameKey) : item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-12 border-t border-border flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://paystack.shop/pay/life-upside-view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("donate")}
                  </a>
                  <Link
                    href="/support"
                    className="btn-solid"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Help Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
