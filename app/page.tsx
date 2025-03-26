"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury yacht on ocean"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        <motion.div style={{ opacity, scale, y }} className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6"
          >
            AMAZING AWAITS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Experience luxury and innovation like never before
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="rounded-none">
              <Link href="/about">
                DISCOVER MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">REDEFINING LUXURY</h2>
            <p className="text-lg text-muted-foreground">
              We combine innovative design with exceptional craftsmanship to create experiences that transcend
              expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CHARTER",
                description: "Experience the ultimate in luxury travel with our exclusive charter options.",
                delay: 0.2,
              },
              {
                title: "PURCHASE",
                description: "Find your perfect vessel with our curated selection of luxury options.",
                delay: 0.4,
              },
              {
                title: "BUILD",
                description: "Create a custom experience tailored to your exact specifications.",
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
                <Link href="#" className="inline-flex items-center text-primary hover:underline">
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">BENEATH THE SURFACE</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Discover the stories, innovations, and experiences that make us unique. Dive deeper into our world and
                uncover what sets us apart.
              </p>
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/beneath-the-surface">
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
              <Image src="/placeholder.svg?height=800&width=600" alt="Underwater scene" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-5xl font-bold mb-8">READY TO BEGIN YOUR JOURNEY?</h2>
            <Button size="lg" className="rounded-none">
              ENQUIRE NOW
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

