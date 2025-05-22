"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stories } from "@/lib/stories";

export default function StoryPage() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  if (!story) return notFound();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {story.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            {story.description}
          </motion.p>
        </div>
      </section>

      {/* Story Body */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Link
                href="/stories"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO STORIES
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {story.content.map((paragraph, i) => (
                <div key={i}>
                  <p>{paragraph}</p>
                  {story.images[i] && (
                    <div className="my-12 relative h-[500px]">
                      <Image
                        src={story.images[i]}
                        alt={`${story.title} image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex justify-between items-center"
            >
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/stories">
                  <ArrowLeft className="mr-2 h-4 w-4" /> PREVIOUS STORY
                </Link>
              </Button>
              <Button asChild className="rounded-none">
                <Link href="/stories">
                  NEXT STORY <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
