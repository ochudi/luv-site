"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

const categories = [
  { value: "Issue", translationKey: "categories.issue" },
  { value: "Message", translationKey: "categories.message" },
  { value: "Story", translationKey: "categories.story" },
];

export default function FloatingBotButton() {
  const t = useTranslations('talkToUs');
  const [category, setCategory] = useState(categories[0].value);
  const [message, setMessage] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSend = () => {
    const subject = encodeURIComponent(`[LUV Site] ${category}`);
    const body = encodeURIComponent(message);
    window.open(`mailto:truelifestories@lifeupsideview.com?subject=${subject}&body=${body}`);
  };

  return (
    <div
      className={
        scrolled
          ? "fixed bottom-0 left-0 w-full z-50 flex justify-center animate-fade-in"
          : "fixed bottom-6 right-6 z-50"
      }
    >
      <Dialog>
        <DialogTrigger asChild>
          {scrolled ? (
            <button
              aria-label="Open bot bar"
              className="w-full max-w-md mx-auto rounded-t-xl shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white flex items-center justify-center py-3 px-6 font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
            >
              <Bot size={22} className="mr-2 text-white" />
              <span>{t('title')}</span>
            </button>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      aria-label="Open bot"
                      className="rounded-full w-14 h-14 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-white flex items-center justify-center p-0 transition-all duration-900 animate-bounce"
                    >
                      <Bot size={28} />
                    </Button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-white text-yellow-400 font-semibold pointer-events-none">
                  {t('title')}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </DialogTrigger>
        <DialogContent
          className="p-0 border-none shadow-xl animate-fade-in bg-white overflow-visible max-w-[95vw] sm:max-w-sm"
          style={{
            borderRadius: 18,
            background: "#fff",
            border: "none",
          }}
        >
          <div className="p-6 pb-4 sm:pb-6">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                <Bot size={20} className="text-yellow-500" />
                {t('title')}
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                {t('description')}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={e => { e.preventDefault(); handleSend(); }}>
              <div className="mb-4 mt-2">
                <label htmlFor="category" className="block mb-1 font-medium text-gray-700">{t('category')}</label>
                <select
                  id="category"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  required
                  aria-label={t('category')}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{t(cat.translationKey)}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">{t('message')}</label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  placeholder={t('messagePlaceholder')}
                  aria-label={t('messagePlaceholder')}
                />
              </div>
              <DialogFooter className="flex gap-2 mt-4">
                <Button type="submit" disabled={!message.trim()} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow">
                  {t('send')}
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="ghost" className="text-gray-500 hover:text-gray-700">{t('dismiss')}</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 