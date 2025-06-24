"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SearchHero from "@/components/SearchHero";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
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
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        {/* Foreground Content */}
        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6"
          >
            YOU&apos;RE NOT ALONE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            See the world through a different lens and embrace the beauty of the
            unknown.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SearchHero />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A NEW WAY TO SEE
            </h2>
            <p className="text-lg text-muted-foreground">
              Life Upside View is about shifting perspectives and seeing the
              world through a different lens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "REFLECT",
                url: "/reflect",
                description:
                  "Dive into shared insights that can help change the way you see life.",
                delay: 0.2,
              },
              {
                title: "EXPLORE",
                url: "/explore",
                description:
                  "Discover new ideas and perspectives through resources that can uplift your mood.",
                delay: 0.4,
              },
              {
                title: "EVOLVE",
                url: "/evolve",
                description:
                  "Transform your mindset and embrace the unexpected in everyday moments.",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card p-8 hover:bg-accent transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link
                  href={item.url}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                SEE BEYOND
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stories, experiences, and lessons from those who have dared to
                look at life differently. Step outside the usual and explore
                what lies beyond.
              </p>
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/stories">
                  EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 relative h-[400px] w-full"
            >
              <Image
                src="/images/site/beyond.jpg"
                alt="A new perspective"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              ARE YOU READY TO SEE DIFFERENTLY?
            </h2>
            <Button size="lg" className="rounded-none">
              <Link href="/stories/all-stories">JOIN THE JOURNEY</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
