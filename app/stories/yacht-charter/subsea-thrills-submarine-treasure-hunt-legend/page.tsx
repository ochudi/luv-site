"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubseaThrillsPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Submarine adventure"
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
            SUBSEA THRILLS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Submarine Treasure Hunt Legend
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
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
              <p className="text-xl font-medium leading-relaxed">
                The ocean holds countless mysteries beneath its surface. For our clients, we've created an experience
                that combines luxury, adventure, and discovery in a way never before imagined.
              </p>

              <div className="my-12 relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Submarine exploration"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>The Adventure Begins</h2>
              <p>
                It started with a simple question: How can we create an experience that truly immerses our guests in the
                wonders of the ocean? The answer came in the form of a custom-designed submarine expedition that takes
                guests on a journey to discover hidden treasures and marine life in some of the world's most pristine
                waters.
              </p>

              <p>
                Our team of marine biologists, adventure specialists, and luxury experience designers collaborated to
                create a one-of-a-kind underwater treasure hunt that combines education, excitement, and exclusivity.
              </p>

              <div className="my-12 relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Underwater treasures"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>The Experience</h2>
              <p>
                Guests board our state-of-the-art submarine, equipped with panoramic viewing windows and comfortable
                seating. As they descend into the depths, our expert guides share stories of ancient shipwrecks, marine
                ecosystems, and the legends that surround these underwater realms.
              </p>

              <p>
                The treasure hunt itself is a carefully crafted experience, combining real historical artifacts with
                conservation education. Participants use advanced underwater detection equipment to locate hidden
                objects, each revealing a piece of a larger narrative about the ocean's importance to our planet.
              </p>

              <blockquote>
                "It was like entering another world entirely. The colors, the creatures, the sense of discovery—it's an
                experience I'll never forget." — Charter Client, Summer 2023
              </blockquote>

              <div className="my-12 relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Marine life encounter"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Conservation at Heart</h2>
              <p>
                While the adventure is thrilling, it also serves a deeper purpose. A portion of each expedition fee goes
                directly to marine conservation efforts in the regions we explore. Guests not only leave with
                unforgettable memories but also the knowledge that they've contributed to preserving these underwater
                wonders for future generations.
              </p>

              <p>
                Our submarine is designed with minimal environmental impact in mind, using electric propulsion and
                adhering to strict guidelines to ensure we don't disturb the delicate ecosystems we visit.
              </p>

              <h2>The Future of Underwater Exploration</h2>
              <p>
                As we continue to develop our submarine experiences, we're exploring new technologies that will allow
                for deeper dives, enhanced viewing experiences, and even more interactive educational components. The
                ocean remains largely unexplored, and we're committed to opening up this final frontier to our clients
                in ways that inspire wonder and respect.
              </p>

              <p>
                For those seeking an adventure that transcends the ordinary, our Submarine Treasure Hunt offers a
                glimpse into a world few have the privilege to experience—a true journey beneath the surface.
              </p>
            </motion.div>

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

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">EXPERIENCE IT YOURSELF</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to embark on your own underwater adventure? Contact our team to learn more about our exclusive
              submarine experiences.
            </p>
            <Button size="lg" className="rounded-none">
              ENQUIRE NOW
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

