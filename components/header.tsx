"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LifeBuoy, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { nameKey: "home", path: "/" },
    { nameKey: "about", path: "/about" },
    { nameKey: "stories", path: "/stories" },
    { name: "Tools", path: "/self-help" },
    { name: "Check-Up", path: "/checkups" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-background/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo (Always Visible) */}
        <Link href="/" className="text-2xl font-bold text-primary z-50">
          <Image
            src="/images/site/logo.png"
            alt="Underwater scene"
            width={140}
            height={40}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-md font-semibold transition-colors hover:text-primary",
                scrolled
                  ? pathname === item.path
                    ? "text-primary"
                    : "text-foreground"
                  : pathname === item.path
                  ? "text-primary"
                  : "text-white"
              )}
            >
              {item.nameKey ? t(item.nameKey) : item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="https://paystack.shop/pay/life-upside-view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-sm">{t('donate')}</Button>
          </a>
          <Button asChild className="rounded-sm bg-red-600 hover:bg-red-700 text-white">
            <Link href="/support">
              <LifeBuoy className="h-4 w-4 mr-2" />
              Get Help Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-background z-40 flex flex-col"
          >
            {/* Menu Items */}
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-2xl font-medium transition-colors hover:text-primary",
                      pathname === item.path
                        ? "text-primary"
                        : "text-foreground/70"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.nameKey ? t(item.nameKey) : item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
              >
                <Button asChild size="lg" className="rounded-none mt-2 bg-red-600 hover:bg-red-700 text-white">
                  <Link href="/support" onClick={() => setIsOpen(false)}>
                    <LifeBuoy className="h-4 w-4 mr-2" /> Get Help Now
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <a
                  href="https://paystack.shop/pay/life-upside-view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="rounded-none mt-4">
                    {t('donate')}
                  </Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
