"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const categories = [
  { value: "Issue", translationKey: "categories.issue" },
  { value: "Message", translationKey: "categories.message" },
  { value: "Story", translationKey: "categories.story" },
];

export default function FloatingBotButton() {
  const t = useTranslations("talkToUs");
  const [category, setCategory] = useState(categories[0].value);
  const [message, setMessage] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 240);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = () => {
    const subject = encodeURIComponent(`[LUV Site] ${category}`);
    const body = encodeURIComponent(message);
    window.open(
      `mailto:truelifestories@lifeupsideview.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <div
      className={cn(
        "fixed z-40 inset-x-4 bottom-4 md:inset-x-auto md:left-auto md:right-6 md:bottom-6",
        // On mobile the full-width bar only appears past the hero so it never
        // collides with the hero search bar; the desktop bubble always shows.
        scrolled ? "block" : "hidden md:block"
      )}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label={t("title")}
            className={cn(
              "inline-flex items-center justify-center bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
              "uppercase tracking-[0.22em] font-bold hover:brightness-95 transition-all",
              // Mobile: a full-width centered CTA bar; desktop: a tidy pill
              "w-full py-4 text-[11px] md:w-auto md:px-7 md:py-3.5 md:text-[10px] md:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]"
            )}
          >
            {t("title")}
          </button>
        </DialogTrigger>

        <DialogContent className="p-0 border border-border bg-background max-w-[95vw] sm:max-w-md rounded-none">
          <div className="p-6 md:p-8">
            <DialogHeader>
              <p className="eyebrow mb-2">Talk to us</p>
              <DialogTitle className="font-serif text-2xl md:text-3xl tracking-tight">
                {t("title")}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2">
                {t("description")}
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="mt-6 space-y-6"
            >
              <div>
                <label
                  htmlFor="category"
                  className="block eyebrow text-foreground/60 mb-2"
                >
                  {t("category")}
                </label>
                <select
                  id="category"
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 text-base transition-colors"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  aria-label={t("category")}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {t(cat.translationKey)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block eyebrow text-foreground/60 mb-2"
                >
                  {t("message")}
                </label>
                <textarea
                  id="message"
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 text-base min-h-[100px] placeholder:text-foreground/35 transition-colors resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder={t("messagePlaceholder")}
                  aria-label={t("messagePlaceholder")}
                />
              </div>
              <DialogFooter className="flex gap-3 mt-4">
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="btn-solid disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t("send")}
                </button>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("dismiss")}
                  </button>
                </DialogClose>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
