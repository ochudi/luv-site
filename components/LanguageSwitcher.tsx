"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const switchLanguage = (newLocale: "en" | "fr") => {
    if (locale === newLocale) return;
    startTransition(() => {
      const newPath = newLocale === "en" ? pathname : `/fr${pathname}`;
      window.location.replace(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="inline-flex items-center gap-1 px-2 py-1.5 text-[11px] uppercase tracking-[0.22em] font-medium hover:opacity-70 transition-opacity"
          aria-label="Switch language"
        >
          <span>{locale}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] rounded-none border-border"
      >
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className={`cursor-pointer text-[11px] uppercase tracking-[0.22em] font-medium rounded-none ${
            locale === "en" ? "bg-muted" : ""
          }`}
        >
          <span className="flex items-center justify-between w-full">
            <span>English</span>
            <span className="text-muted-foreground">EN</span>
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("fr")}
          className={`cursor-pointer text-[11px] uppercase tracking-[0.22em] font-medium rounded-none ${
            locale === "fr" ? "bg-muted" : ""
          }`}
        >
          <span className="flex items-center justify-between w-full">
            <span>Français</span>
            <span className="text-muted-foreground">FR</span>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
