"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const breathPattern = ["Inhale", "Hold", "Exhale", "Pause"];
const breathCounts = ["4", "4", "6", "2"];

const groundingPrompts = [
  { count: "5", label: "things you can see" },
  { count: "4", label: "things you can feel" },
  { count: "3", label: "things you can hear" },
  { count: "2", label: "things you can smell" },
  { count: "1", label: "thing you can taste" },
];

const cbtReframes = [
  {
    trigger: "I always fail.",
    reframe:
      "I am struggling right now, but I have handled hard things before.",
  },
  {
    trigger: "Nobody cares about me.",
    reframe:
      "I feel isolated right now, but support is still available and I can ask for it.",
  },
  {
    trigger: "If I rest, I am weak.",
    reframe:
      "Rest helps my nervous system recover so I can function better.",
  },
];

export default function SelfHelpPage() {
  const [mood, setMood] = useState(5);

  const moodGuidance = useMemo(() => {
    if (mood <= 3)
      return "Low energy day. Focus on one tiny action: hydrate, breathe, and message someone you trust.";
    if (mood <= 7)
      return "Moderate day. Keep momentum with a short walk, mindful break, and realistic task list.";
    return "Higher energy day. Protect your progress with boundaries, sleep, and one meaningful connection.";
  }, [mood]);

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
              <p className="eyebrow">— Toolkit </p>
              <p className="eyebrow mt-1">Self-help</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                Evidence-informed tools{" "}
                <span className="italic text-accent-warm">
                  for hard moments.
                </span>
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                Short practices designed to reduce overwhelm, regulate
                emotions, and help you return to steady ground.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THREE TOOLS */}
      <section className="py-24 md:py-32">
        <div className="editorial-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
            {/* BREATH */}
            <motion.div {...fadeUp} className="pt-8 border-t border-border">
              <p className="eyebrow text-foreground/40 mb-8">01 · Breath</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                1-minute breathing reset.
              </h2>
              <ul className="space-y-1">
                {breathPattern.map((step, i) => (
                  <li
                    key={step}
                    className="grid grid-cols-12 py-3 border-b border-border items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-accent-warm">
                      {breathCounts[i]}
                    </span>
                    <span className="col-span-10 text-[15px] text-foreground/80">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* GROUNDING */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="pt-8 border-t border-border"
            >
              <p className="eyebrow text-foreground/40 mb-8">02 · Ground</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                5-4-3-2-1 grounding.
              </h2>
              <ul className="space-y-1">
                {groundingPrompts.map((p) => (
                  <li
                    key={p.count}
                    className="grid grid-cols-12 py-3 border-b border-border items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-accent-warm">
                      {p.count}
                    </span>
                    <span className="col-span-10 text-[15px] text-foreground/80">
                      {p.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* REFRAME */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="pt-8 border-t border-border"
            >
              <p className="eyebrow text-foreground/40 mb-8">03 · Reframe</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-8">
                CBT reframe starters.
              </h2>
              <ul className="space-y-6">
                {cbtReframes.map((item) => (
                  <li
                    key={item.trigger}
                    className="border-l-2 border-foreground/20 pl-5"
                  >
                    <p className="font-serif italic text-foreground mb-2">
                      "{item.trigger}"
                    </p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {item.reframe}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOOD CHECK */}
      <section className="py-24 md:py-32 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— IV. </p>
              <p className="eyebrow mt-1">Mood check</p>
            </div>
            <div className="md:col-span-9 max-w-2xl">
              <h2 className="font-serif display-2 tracking-tight mb-8">
                How are you right now?
              </h2>
              <p className="text-[15px] text-muted-foreground mb-12">
                A simple 1-to-10 read. Use it to gently calibrate what your
                day needs.
              </p>

              <div className="flex items-baseline gap-6 mb-2">
                <span className="font-serif text-7xl md:text-8xl tracking-tight">
                  {mood}
                </span>
                <span className="font-serif text-3xl text-foreground/40">
                  / 10
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={mood}
                onChange={(e) => setMood(Number(e.target.value))}
                className="w-full my-6 accent-[hsl(var(--accent))]"
                aria-label="Mood level"
              />
              <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-10">
                <span>Heavy</span>
                <span>Steady</span>
                <span>Lifted</span>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="eyebrow mb-3 text-foreground/60">Today</p>
                <p className="font-serif text-xl md:text-2xl tracking-tight leading-snug">
                  {moodGuidance}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEXT */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="editorial-container">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="eyebrow mb-8">— Continue</p>
            <h2 className="font-serif display-2 tracking-tight mb-12">
              Take the next small step.
            </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <Link href="/checkups" className="link-quiet">
                Take a check-up <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/support" className="link-quiet">
                Need immediate support? <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/stories/all-stories" className="link-quiet">
                Read stories <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
