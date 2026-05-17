"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { AlertTriangle, ExternalLink, PhoneCall, ShieldCheck } from "lucide-react";

const emergencySteps = [
  "If there is immediate danger, call your local emergency number now.",
  "If self-harm thoughts are intense, do not stay alone. Call a trusted person immediately.",
  "Move to a safer environment and remove anything you may use to hurt yourself.",
  "Reach out to a local crisis line, hospital, or nearest urgent care center.",
];

const supportOptions = [
  {
    title: "Professional Help",
    description: "Find a licensed therapist, psychologist, psychiatrist, or trauma-informed counselor.",
  },
  {
    title: "Community Support",
    description: "Join a peer support group, trusted faith community, or local wellbeing circle.",
  },
  {
    title: "Caregiver Guidance",
    description: "Support someone you love with active listening, safety checks, and practical help.",
  },
];

export default function SupportPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm tracking-[0.18em] uppercase text-primary mb-3">Get Help Now</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">You deserve support right now.</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            If you are in crisis or feeling unsafe, use this page as a quick action guide. You are not a burden, and asking for help is a strong step.
          </p>
        </motion.div>

        <div className="rounded-xl border border-red-300/50 bg-red-50 dark:bg-red-950/20 p-6 md:p-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-300">Immediate Safety Plan</h2>
          </div>
          <ul className="space-y-3 text-red-900/90 dark:text-red-200/90">
            {emergencySteps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-sm bg-red-600 hover:bg-red-700 text-white" asChild>
              <a href="tel:112">
                <PhoneCall className="mr-2 h-4 w-4" /> Call Emergency Services
              </a>
            </Button>
            <Button variant="outline" className="rounded-sm" asChild>
              <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">
                Find a Helpline <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((item) => (
            <div key={item.title} className="rounded-xl border border-border p-6 bg-card">
              <ShieldCheck className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border p-6 md:p-8 bg-muted/30">
          <h2 className="text-2xl font-bold mb-3">What to say when asking for help</h2>
          <p className="text-muted-foreground mb-3">
            Use this script if words feel hard: “I’m not doing okay right now. I need help and I don’t want to be alone.”
          </p>
          <p className="text-muted-foreground mb-6">
            If you are helping someone else, stay calm, remove immediate danger, and connect them to professional care as quickly as possible.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-sm">
              <Link href="/self-help">Open Coping Tools</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-sm">
              <Link href="/checkups">Take a Quick Check-Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
