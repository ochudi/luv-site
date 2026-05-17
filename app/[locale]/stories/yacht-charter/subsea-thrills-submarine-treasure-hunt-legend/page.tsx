"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const slow = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export default function SubseaThrillsPage() {
  return (
    <article className="relative bg-background">
      <section className="relative h-[80vh] md:h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Submarine adventure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/90" />
        </div>

        <div className="editorial-container relative z-10 pb-16 md:pb-24 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            className="max-w-4xl"
          >
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[11px] uppercase tracking-[0.24em] mb-10 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to stories
            </Link>
            <p className="eyebrow text-white/80 mb-8">— Yacht Charter</p>
            <h1 className="font-serif text-white display-1 mb-8">
              Subsea thrills.
            </h1>
            <p className="text-white/85 text-lg md:text-xl max-w-2xl">
              Submarine treasure hunt legend.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="editorial-container">
          <motion.div
            {...slow}
            className="mx-auto max-w-2xl prose font-serif text-lg leading-[1.75] text-foreground/85"
          >
            <p className="lede font-serif italic text-foreground/90">
              The ocean holds countless mysteries beneath its surface. For our
              clients, we've created an experience that combines luxury,
              adventure, and discovery in a way never before imagined.
            </p>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Submarine exploration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>The Adventure Begins</h2>
            <p>
              It started with a simple question: How can we create an experience
              that truly immerses our guests in the wonders of the ocean? The
              answer came in the form of a custom-designed submarine expedition
              that takes guests on a journey to discover hidden treasures and
              marine life in some of the world's most pristine waters.
            </p>
            <p>
              Our team of marine biologists, adventure specialists, and luxury
              experience designers collaborated to create a one-of-a-kind
              underwater treasure hunt that combines education, excitement, and
              exclusivity.
            </p>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Underwater treasures"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>The Experience</h2>
            <p>
              Guests board our state-of-the-art submarine, equipped with
              panoramic viewing windows and comfortable seating. As they
              descend into the depths, our expert guides share stories of
              ancient shipwrecks, marine ecosystems, and the legends that
              surround these underwater realms.
            </p>
            <p>
              The treasure hunt itself is a carefully crafted experience,
              combining real historical artifacts with conservation education.
              Participants use advanced underwater detection equipment to
              locate hidden objects, each revealing a piece of a larger
              narrative about the ocean's importance to our planet.
            </p>

            <blockquote>
              It was like entering another world entirely. The colors, the
              creatures, the sense of discovery — it's an experience I'll
              never forget.
              <footer className="text-sm uppercase tracking-[0.18em] mt-4 not-italic text-muted-foreground font-sans">
                — Charter Client, Summer 2023
              </footer>
            </blockquote>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Marine life encounter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>Conservation at Heart</h2>
            <p>
              While the adventure is thrilling, it also serves a deeper
              purpose. A portion of each expedition fee goes directly to
              marine conservation efforts in the regions we explore. Guests
              not only leave with unforgettable memories but also the
              knowledge that they've contributed to preserving these
              underwater wonders for future generations.
            </p>
            <p>
              Our submarine is designed with minimal environmental impact in
              mind, using electric propulsion and adhering to strict
              guidelines to ensure we don't disturb the delicate ecosystems
              we visit.
            </p>

            <h2>The Future of Underwater Exploration</h2>
            <p>
              As we continue to develop our submarine experiences, we're
              exploring new technologies that will allow for deeper dives,
              enhanced viewing experiences, and even more interactive
              educational components. The ocean remains largely unexplored,
              and we're committed to opening up this final frontier to our
              clients in ways that inspire wonder and respect.
            </p>
            <p>
              For those seeking an adventure that transcends the ordinary,
              our Submarine Treasure Hunt offers a glimpse into a world few
              have the privilege to experience — a true journey beneath the
              surface.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-36 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div {...slow} className="max-w-3xl">
            <p className="eyebrow mb-8">— Enquire</p>
            <h2 className="font-serif display-2 tracking-tight mb-8">
              Experience it yourself.
            </h2>
            <p className="lede text-muted-foreground mb-10 max-w-xl">
              Ready to embark on your own underwater adventure? Contact our
              team to learn more about our exclusive submarine experiences.
            </p>
            <Link href="/stories" className="link-quiet">
              Enquire now <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
