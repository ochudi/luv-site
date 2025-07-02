"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SearchHero from "@/components/SearchHero";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { BookOpen, PencilLine, HeartHandshake } from "lucide-react";

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
        <div
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <div
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6"
          >
            YOU&apos;RE NOT<br />
            ALONE
          </div>
          <div
            className="mt-20"
          >
            <SearchHero />
          </div>
        </div>
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

      <section className="relative overflow-x-clip">
        <div className="max-w-full mx-0 flex flex-col items-start min-h-[160vh] md:min-h-[120vh]">
          {/* Text Block */}
          <div
            className="w-full md:w-1/2 mx-auto mt-[40px] md:mt-10 md:ml-10 md:mr-auto z-10"
            style={{ position: 'sticky', top: 150 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:bg-transparent px-6 md:px-0 pt-6 pb-8 md:pt-0 md:pb-0"
            >
              <h2 className="text-3xl md:text-7xl font-bold mb-6">
                SEE BEYOND
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stories, experiences, and lessons from those who have dared to look at life differently. Step outside the usual and explore what lies beyond.
              </p>
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/stories">
                  EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          {/* Video Block (sticky under header) */}
          <div
            className="w-full md:w-2/3 mx-auto mt-20 md:mt-20 md:ml-auto md:mr-0 z-20"
            style={{ position: 'sticky', top: 180 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full h-[300px] md:h-[80vh] flex items-center justify-end"
              style={{ zIndex: 20 }}
            >
              <video
                src="/videos/beyond.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full shadow-xl rounded"
                style={{
                  maxHeight: '80vh',
                  minHeight: '300px',
                  width: '100%',
                  position: 'relative',
                  right: 0,
                }}
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
            <Popover>
              <PopoverTrigger asChild>
                <Button size="lg" className="rounded-none font-bold">
                  JOIN THE JOURNEY
                </Button>
              </PopoverTrigger>
              <PopoverContent align="center" className="w-80 p-0 border-none shadow-2xl">
                <div className="flex flex-col divide-y divide-muted-foreground/10">
                  <a href="/stories/all-stories" className="flex items-center gap-4 p-5 hover:bg-muted transition rounded-t-md group focus:outline-none" tabIndex={0}>
                    <BookOpen className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">Read Stories</div>
                      <div className="text-sm text-muted-foreground">Inspiring journeys from our community</div>
                    </div>
                  </a>
                  <a href="/write" className="flex items-center gap-4 p-5 hover:bg-muted transition group focus:outline-none" tabIndex={0}>
                    <PencilLine className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">Share Experiences</div>
                      <div className="text-sm text-muted-foreground">Write and share your own story</div>
                    </div>
                  </a>
                  <a href="/volunteer" className="flex items-center gap-4 p-5 hover:bg-muted transition rounded-b-md group focus:outline-none" tabIndex={0}>
                    <HeartHandshake className="h-7 w-7 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-semibold text-lg">Volunteer</div>
                      <div className="text-sm text-muted-foreground">Join us in making a difference</div>
                    </div>
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
