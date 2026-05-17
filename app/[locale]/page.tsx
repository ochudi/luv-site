"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookHeart, BrainCircuit, HeartHandshake, LifeBuoy, Sparkles, Stethoscope } from "lucide-react";
import { Link } from "@/i18n/routing";
import SearchHero from "@/components/SearchHero";

export default function Home() {
  const supportPaths = [
    {
      title: "I Need Immediate Support",
      description: "Crisis resources, urgent steps, and contacts you can use right now.",
      href: "/support",
      icon: LifeBuoy,
      cta: "Get Help Now",
    },
    {
      title: "I Want Coping Tips",
      description: "Grounding tools, CBT-informed reframes, and short mindfulness practices.",
      href: "/self-help",
      icon: BrainCircuit,
      cta: "Explore Tips and Tools",
    },
    {
      title: "I Want to Read Stories",
      description: "Real experiences of anxiety, trauma, recovery, and resilience.",
      href: "/stories/all-stories",
      icon: BookHeart,
      cta: "Read Stories",
    },
  ];

  const resourceCards = [
    {
      title: "Self-Help",
      description: "Practical emotional wellness techniques you can start in minutes.",
      href: "/self-help",
      icon: Sparkles,
    },
    {
      title: "Mental Health Check-Ups",
      description: "Quick self-assessment prompts to reflect on stress, mood, and burnout.",
      href: "/checkups",
      icon: Stethoscope,
    },
    {
      title: "Find Support",
      description: "When to seek help, what to say, and where to get trusted support.",
      href: "/support",
      icon: HeartHandshake,
    },
  ];

  const testimonials = [
    {
      quote:
        "I came for one story and ended up finding language for what I had been carrying for years.",
      name: "Community Member",
    },
    {
      quote:
        "The check-up prompts helped me realize I needed support sooner, not later.",
      name: "Caregiver",
    },
    {
      quote:
        "This platform made me feel less alone and more capable of asking for help.",
      name: "Young Adult Reader",
    },
  ];

  return (
    <div className="relative overflow-x-clip">
      <section
        className="hero-section relative min-h-[95vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/65 dark:bg-black/75" />
        </div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(252,211,77,0.22),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.16),transparent_40%)]" />

        <div className="relative z-10 container mx-auto px-4 text-center hero-content">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs md:text-sm tracking-[0.2em] uppercase text-white/90 mb-6">
            Life Upside View Mental Health Foundation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 hero-title leading-[1.05]">
            You Are Not Alone.
            <br />
            Healing Is Possible.
          </h1>
          <p className="max-w-4xl mx-auto text-base md:text-xl text-white/85 mb-10">
            Supporting emotional wellness and recovery through lived stories, practical tools, and access to help for people navigating anxiety, depression, trauma, and emotional overwhelm.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <Button asChild size="lg" className="rounded-sm font-semibold">
              <Link href="/support">Get Help Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-sm font-semibold">
              <Link href="/self-help">Explore Tips and Tools</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-sm font-semibold border-gray-300 dark:border-white/70 text-foreground dark:text-white hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black">
              <Link href="/write">Share Your Story</Link>
            </Button>
          </div>
          <div className="mt-8 hero-search">
            <SearchHero />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Support</h2>
            <p className="text-lg text-muted-foreground">
              Individuals experiencing anxiety, depression, trauma, grief, burnout, and emotional distress, along with caregivers, young people, and communities seeking compassionate mental health guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportPaths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * (index + 1) }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card p-8 border border-border/60 hover:border-primary/60 transition-colors duration-300"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  {item.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/35">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mental Health Resources</h2>
            <p className="text-lg text-muted-foreground">
              Find the right support pathway, from immediate help to daily emotional wellness practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {resourceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <card.icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <Link href={card.href} className="inline-flex items-center text-primary hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border border-red-300/40 bg-red-50 dark:bg-red-950/25 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">Get Help Now</h3>
              <p className="text-sm md:text-base text-red-800/80 dark:text-red-200/85">
                If you or someone you know may be in immediate danger, contact local emergency services right away.
              </p>
            </div>
            <Button asChild className="rounded-sm bg-red-600 hover:bg-red-700 text-white w-full md:w-auto">
              <Link href="/support">Open Crisis Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Impact So Far</h2>
              <p className="text-lg text-muted-foreground">Stories that normalize emotional honesty and inspire recovery-centered action.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { value: "100+", label: "Lived Experience Stories Published" },
                { value: "20k+", label: "Community Readers Reached" },
                { value: "40+", label: "Countries Engaged" },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-card p-8 text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="rounded-xl border border-border bg-card p-6 text-left">
                  <p className="text-base mb-4">"{item.quote}"</p>
                  <footer className="text-sm font-semibold text-muted-foreground">{item.name}</footer>
                </blockquote>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-sm font-semibold">
                <Link href="/support">Get Help Now</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-sm font-semibold">
                <Link href="/self-help">Explore Tips and Tools</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm font-semibold">
                <Link href="/write">Share Your Story</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm font-semibold">
                <Link href="/checkups">Take a Mental Health Checkup</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
