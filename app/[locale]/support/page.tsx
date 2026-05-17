"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ArrowUpRight, PhoneCall } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

const emergencySteps = [
  "If there is immediate danger, call your local emergency number now.",
  "If self-harm thoughts are intense, do not stay alone. Call a trusted person immediately.",
  "Move to a safer environment and remove anything you may use to hurt yourself.",
  "Reach out to a local crisis line, hospital, or nearest urgent care center.",
];

const supportOptions = [
  {
    number: "01",
    title: "Professional help",
    description:
      "Find a licensed therapist, psychologist, psychiatrist, or trauma-informed counselor.",
  },
  {
    number: "02",
    title: "Community support",
    description:
      "Join a peer support group, trusted faith community, or local wellbeing circle.",
  },
  {
    number: "03",
    title: "Caregiver guidance",
    description:
      "Support someone you love with active listening, safety checks, and practical help.",
  },
];

export default function SupportPage() {
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
              <p className="eyebrow text-destructive">— Help now </p>
              <p className="eyebrow mt-1">Support</p>
            </div>
            <div className="md:col-span-9">
              <h1 className="font-serif display-1 tracking-tight mb-8 max-w-4xl">
                You deserve support{" "}
                <span className="italic text-accent-warm">right now.</span>
              </h1>
              <p className="lede text-muted-foreground max-w-2xl">
                If you are in crisis or feeling unsafe, use this page as a
                quick action guide. You are not a burden, and asking for help
                is a strong step.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAFETY PLAN */}
      <section className="py-20 md:py-28">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow text-destructive">— I. </p>
              <p className="eyebrow mt-1">Immediate</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight mb-12 max-w-3xl">
                Immediate safety plan.
              </h2>
              <ol className="border-t border-border max-w-2xl">
                {emergencySteps.map((step, i) => (
                  <li
                    key={step}
                    className="py-6 border-b border-border grid grid-cols-12 gap-4 items-baseline"
                  >
                    <span className="col-span-2 font-serif text-2xl tracking-tight text-foreground/40">
                      0{i + 1}
                    </span>
                    <span className="col-span-10 text-[15px] md:text-base leading-relaxed text-foreground/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-12 flex flex-wrap gap-3">
                <a
                  href="tel:112"
                  className="btn-solid"
                >
                  <PhoneCall className="h-3.5 w-3.5 mr-3" />
                  Call emergency services
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Find a helpline
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="py-24 md:py-32 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— II. </p>
              <p className="eyebrow mt-1">Pathways</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif display-2 tracking-tight max-w-3xl">
                Where to turn for ongoing support.
              </h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {supportOptions.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * i }}
                className="pt-8 border-t border-border"
              >
                <p className="eyebrow text-foreground/40 mb-8">
                  {item.number}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCRIPT */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="editorial-container">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-3">
              <p className="eyebrow">— III. </p>
              <p className="eyebrow mt-1">Asking</p>
            </div>
            <div className="md:col-span-9 max-w-3xl">
              <h2 className="font-serif display-2 tracking-tight mb-10">
                What to say when asking for help.
              </h2>
              <blockquote className="font-serif italic text-2xl md:text-3xl tracking-tight leading-snug border-l-2 border-foreground pl-6 md:pl-8 mb-10 max-w-2xl">
                "I'm not doing okay right now. I need help and I don't want to
                be alone."
              </blockquote>
              <p className="text-[15px] text-muted-foreground mb-10 max-w-xl">
                If you are helping someone else, stay calm, remove immediate
                danger, and connect them to professional care as quickly as
                possible.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 pt-10 border-t border-border">
                <Link href="/self-help" className="link-quiet">
                  Open coping tools <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/checkups" className="link-quiet">
                  Take a quick check-up <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
