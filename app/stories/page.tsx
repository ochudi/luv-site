"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BeneathTheSurfacePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Underwater scene"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            BENEATH THE SURFACE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Discover the hidden stories and experiences that define us
          </motion.p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">STORIES THAT INSPIRE</h2>
            <p className="text-lg text-muted-foreground">
              Explore the extraordinary experiences, innovations, and adventures that make our company unique.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={item} className="group">
              <Link
                href="/stories/yacht-charter/subsea-thrills-submarine-treasure-hunt-legend"
                className="block"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Submarine adventure"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">SUBSEA THRILLS: SUBMARINE TREASURE HUNT</h3>
                    <p className="text-white/80">An underwater adventure like no other</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item} className="group">
              <Link href="/stories/yco-news/team-talk-holly-bottau-interview" className="block">
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Team interview"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">TEAM TALK: HOLLY BOTTAU INTERVIEW</h3>
                    <p className="text-white/80">Meet the people behind our success</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item} className="group">
              <Link href="#" className="block">
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Innovation story"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">INNOVATION AT SEA</h3>
                    <p className="text-white/80">How we're revolutionizing the industry</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={item} className="group">
              <Link href="#" className="block">
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Sustainability story"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">SUSTAINABILITY COMMITMENT</h3>
                    <p className="text-white/80">Our journey toward a better future</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="rounded-none">
              <Link href="#">
                VIEW ALL STORIES <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">DIVE DEEPER</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter to receive exclusive stories, insights, and offers directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="rounded-none">
                  SUBSCRIBE
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 relative h-[400px] w-full"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Newsletter subscription"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

