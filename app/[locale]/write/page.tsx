"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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

export default function WritePage() {
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
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Home
              </Link>
              <p className="eyebrow">— Contribute</p>
              <p className="eyebrow mt-1">Write</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                Share your{" "}
                <span className="italic text-accent-warm">experience.</span>
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                Your story might be the lifeline someone else is searching for.
                Tell us in your own words — we read every submission with care.
              </p>
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
              <p className="eyebrow text-foreground/40">Form</p>
            </div>
            <div className="md:col-span-8 space-y-10 max-w-2xl">
              <div>
                <label
                  htmlFor="name"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  Email <span className="lowercase tracking-normal text-foreground/40">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  Story title
                </label>
                <input
                  id="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputCls}
                  placeholder="Give your story a title"
                />
              </div>
              <div>
                <label
                  htmlFor="story"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  Your story
                </label>
                <textarea
                  id="story"
                  required
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className={`${inputCls} min-h-[200px] resize-y`}
                  placeholder="Write your story here..."
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block eyebrow text-foreground/60 mb-3"
                >
                  Short bio <span className="lowercase tracking-normal text-foreground/40">(optional)</span>
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={`${inputCls} min-h-[100px] resize-y`}
                  placeholder="Tell us a little about yourself"
                />
              </div>

              <div className="pt-6 border-t border-border">
                <button type="submit" className="btn-solid">
                  Send your story
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
