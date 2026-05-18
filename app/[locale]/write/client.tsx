"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const inputCls =
  "w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-base placeholder:text-foreground/35 transition-colors";

const emphasis = (chunks: React.ReactNode) => (
  <span className="italic text-accent-warm">{chunks}</span>
);

export default function WritePage() {
  const t = useTranslations("write");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Story Submission: ${title}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nStory Title: ${title}\n\nStory:\n${story}\n\nBio: ${bio}`
    );
    window.open(
      `mailto:truelifestories@lifeupsideview.org?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className="bg-background">
      {/* HEADER */}
      <section className="pt-40 md:pt-44 pb-20 md:pb-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— {t("eyebrowContribute")}</p>
              <p className="eyebrow mt-1">{t("eyebrowWrite")}</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                {t.rich("h1", { em: emphasis })}
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">{t("lede")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-foreground/40">{t("form")}</p>
            </div>
            <div className="md:col-span-8 space-y-10 max-w-2xl">
              <div>
                <label
                  htmlFor="name"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  {t("fieldName")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                  placeholder={t("placeholderName")}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  {t("fieldEmail")}{" "}
                  <span className="lowercase tracking-normal text-foreground/40">
                    {t("optional")}
                  </span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder={t("placeholderEmail")}
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  {t("fieldTitle")}
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputCls}
                  placeholder={t("placeholderTitle")}
                />
              </div>
              <div>
                <label
                  htmlFor="story"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  {t("fieldStory")}
                </label>
                <textarea
                  id="story"
                  required
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className={`${inputCls} min-h-[200px] resize-y`}
                  placeholder={t("placeholderStory")}
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  {t("fieldBio")}{" "}
                  <span className="lowercase tracking-normal text-foreground/40">
                    {t("optional")}
                  </span>
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={`${inputCls} min-h-[100px] resize-y`}
                  placeholder={t("placeholderBio")}
                />
              </div>

              <div className="pt-6 border-t border-border">
                <button type="submit" className="btn-solid">
                  {t("submit")}
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
