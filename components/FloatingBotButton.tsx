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
import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
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
    <div className="fixed bottom-6 right-6 z-40">
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <button
                  aria-label={t("title")}
                  className={`group inline-flex items-center gap-2 text-white font-medium uppercase tracking-[0.22em] text-[10px] transition-all duration-300 animate-soft-bounce animate-soft-pulse bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(var(--primary)))] hover:brightness-110 ${
                    scrolled
                      ? "pl-4 pr-5 py-3"
                      : "rounded-full h-12 w-12 p-0 justify-center"
                  }`}
                >
                  <MessageCircle className={`${scrolled ? "h-4 w-4" : "h-5 w-5"} shrink-0`} />
                  {scrolled && <span>{t("title")}</span>}
                </button>
              </DialogTrigger>
            </TooltipTrigger>
            {!scrolled && (
              <TooltipContent
                side="left"
                className="bg-foreground text-background text-[10px] uppercase tracking-[0.22em] font-medium"
              >
                {t("title")}
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>

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
