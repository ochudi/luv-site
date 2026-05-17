"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Brain, HeartPulse, Wind } from "lucide-react";

const breathPattern = ["Inhale (4)", "Hold (4)", "Exhale (6)", "Pause (2)"];

const groundingPrompts = [
  "Name 5 things you can see.",
  "Name 4 things you can feel.",
  "Name 3 things you can hear.",
  "Name 2 things you can smell.",
  "Name 1 thing you can taste.",
];

const cbtReframes = [
  {
    trigger: "I always fail.",
    reframe: "I am struggling right now, but I have handled hard things before.",
  },
  {
    trigger: "Nobody cares about me.",
    reframe: "I feel isolated right now, but support is still available and I can ask for it.",
  },
  {
    trigger: "If I rest, I am weak.",
    reframe: "Rest helps my nervous system recover so I can function better.",
  },
];

export default function SelfHelpPage() {
  const [mood, setMood] = useState(5);

  const moodGuidance = useMemo(() => {
    if (mood <= 3) return "Low energy day. Focus on one tiny action: hydrate, breathe, and message someone you trust.";
    if (mood <= 7) return "Moderate day. Keep momentum with a short walk, mindful break, and realistic task list.";
    return "Higher energy day. Protect your progress with boundaries, sleep, and one meaningful connection.";
  }, [mood]);

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-sm tracking-[0.18em] uppercase text-primary mb-3">Self-Help Toolkit</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Evidence-informed tools for hard moments.</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            These short practices are designed to reduce overwhelm, regulate emotions, and help you return to steady ground.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <section className="rounded-xl border border-border p-6 bg-card">
            <Wind className="h-6 w-6 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">1-Minute Breathing Reset</h2>
            <ul className="space-y-2 text-muted-foreground">
              {breathPattern.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border p-6 bg-card">
            <HeartPulse className="h-6 w-6 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">5-4-3-2-1 Grounding</h2>
            <ul className="space-y-2 text-muted-foreground">
              {groundingPrompts.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-border p-6 bg-card">
            <Brain className="h-6 w-6 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">CBT Reframe Starters</h2>
            <ul className="space-y-3 text-muted-foreground">
              {cbtReframes.map((item) => (
                <li key={item.trigger}>
                  <p className="font-medium text-foreground">{item.trigger}</p>
                  <p>{item.reframe}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-border p-6 md:p-8 bg-muted/30 mb-10">
          <h2 className="text-2xl font-semibold mb-3">Mood Check</h2>
          <p className="text-muted-foreground mb-5">How is your mood right now on a 1 to 10 scale?</p>
          <input
            type="range"
            min={1}
            max={10}
            value={mood}
            onChange={(e) => setMood(Number(e.target.value))}
            className="w-full accent-yellow-500"
          />
          <div className="mt-3 text-sm text-muted-foreground">Current mood: {mood}/10</div>
          <p className="mt-4">{moodGuidance}</p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-sm">
            <Link href="/checkups">Take Mental Health Check-Up</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-sm">
            <Link href="/support">Need Immediate Support?</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
