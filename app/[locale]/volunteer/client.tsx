"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Volunteer Application: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nNationality: ${nationality}\nEmail: ${email}\nReason to Volunteer: ${reason}\n\nBio/Experience: ${bio}`
    );
    window.open(
      `mailto:truelifestories@lifeupsideview.org?subject=${subject}&body=${body}`
    );
  };

  return (
    <div className="bg-background">
      <section className="pt-40 md:pt-44 pb-20 md:pb-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— Get involved</p>
              <p className="eyebrow mt-1">Volunteer</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                Volunteer{" "}
                <span className="italic text-accent-warm">with us.</span>
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                Join a community of people offering time, care, and skill in
                service of mental wellbeing. Tell us a little about yourself
                and how you'd like to help.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-foreground/40">Application</p>
            </div>
            <div className="md:col-span-8 space-y-10 max-w-2xl">
              <div>
                <label htmlFor="name" className="block eyebrow text-foreground/60 mb-3">
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
                <label htmlFor="nationality" className="block eyebrow text-foreground/60 mb-3">
                  Nationality
                </label>
                <input
                  id="nationality"
                  type="text"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className={inputCls}
                  placeholder="Your nationality"
                />
              </div>
              <div>
                <label htmlFor="email" className="block eyebrow text-foreground/60 mb-3">
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
                <label htmlFor="reason" className="block eyebrow text-foreground/60 mb-3">
                  Reason to volunteer
                </label>
                <textarea
                  id="reason"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className={`${inputCls} min-h-[140px] resize-y`}
                  placeholder="Why do you want to volunteer?"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block eyebrow text-foreground/60 mb-3">
                  Bio / experience <span className="lowercase tracking-normal text-foreground/40">(optional)</span>
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className={`${inputCls} min-h-[100px] resize-y`}
                  placeholder="Tell us a little about yourself or your experience"
                />
              </div>
              <div className="pt-6 border-t border-border">
                <button type="submit" className="btn-solid">
                  Send application
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
