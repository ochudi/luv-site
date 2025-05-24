"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/stories";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AllStoriesPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ALL STORIES</h1>
          <p className="text-lg text-muted-foreground">
            Read every inspiring, honest, and deeply personal story shared on
            Life Upside View.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group"
            >
              <Link href={`/stories/${story.slug}`} className="block">
                <div className="relative h-[400px] mb-4 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {story.title}
                    </h3>
                    <p className="text-white/80">{story.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
