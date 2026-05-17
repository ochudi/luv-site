"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const questions = [
  "Over the last 2 weeks, I have felt persistently low, anxious, or emotionally exhausted.",
  "I have had difficulty sleeping, concentrating, or completing daily tasks.",
  "I feel disconnected from people or activities I usually enjoy.",
  "I have been using avoidance, substances, or unhealthy coping to get through stress.",
  "I have had thoughts that life is not worth it or that I might harm myself.",
];

export default function CheckupsPage() {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));

  const score = useMemo(() => answers.reduce((total, item) => total + item, 0), [answers]);

  const guidance = useMemo(() => {
    if (score <= 4) return "Low concern right now. Keep supporting your wellbeing with routines, sleep, and connection.";
    if (score <= 9) return "Moderate concern. Consider speaking to someone you trust and using practical coping tools this week.";
    if (score <= 14) return "Elevated concern. A mental health professional can help you with a care plan and support.";
    return "High concern. Please seek professional or crisis support as soon as possible.";
  }, [score]);

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm tracking-[0.18em] uppercase text-primary mb-3">Mental Health Check-Up</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Quick emotional wellness self-assessment</h1>
          <p className="text-muted-foreground text-lg">
            This is not a diagnosis. It is a reflection tool to help you decide whether you may need extra support.
          </p>
        </motion.div>

        <div className="space-y-5 mb-10">
          {questions.map((question, index) => (
            <div key={question} className="rounded-xl border border-border bg-card p-6">
              <p className="font-medium mb-4">{index + 1}. {question}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[index] = value;
                        return next;
                      });
                    }}
                    className={`rounded-sm border px-3 py-2 text-sm transition ${
                      answers[index] === value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {value === 0 && "Never"}
                    {value === 1 && "Some days"}
                    {value === 2 && "Often"}
                    {value === 3 && "Almost daily"}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border p-6 md:p-8 bg-muted/30 mb-8">
          <h2 className="text-2xl font-bold mb-2">Your Check-Up Result</h2>
          <p className="text-muted-foreground mb-4">Score: {score} / 15</p>
          <p>{guidance}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-sm">
            <Link href="/support">Get Support Options</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-sm">
            <Link href="/self-help">Try Coping Tools</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
