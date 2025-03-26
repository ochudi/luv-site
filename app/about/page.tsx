"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Company headquarters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            OUR STORY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Pioneering luxury experiences since 2004
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">WHO WE ARE</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded on the principles of excellence and innovation, our company has grown from a small team of
                passionate individuals to a global leader in luxury experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in pushing boundaries, challenging conventions, and creating moments that last a lifetime.
                Our commitment to quality and attention to detail sets us apart in an industry where excellence is the
                standard.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px]"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our team" fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">OUR MISSION</h3>
              <p className="text-lg text-muted-foreground mb-4">
                To redefine luxury by creating experiences that transcend expectations and inspire a sense of wonder and
                discovery.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to sustainability, innovation, and excellence in everything we do. Our goal is to leave
                a positive impact on the world while delivering unparalleled experiences to our clients.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">OUR VALUES</h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li>
                  <strong>Excellence:</strong> We strive for perfection in every detail.
                </li>
                <li>
                  <strong>Innovation:</strong> We constantly push boundaries and explore new possibilities.
                </li>
                <li>
                  <strong>Integrity:</strong> We operate with honesty, transparency, and respect.
                </li>
                <li>
                  <strong>Sustainability:</strong> We are committed to responsible practices that protect our planet.
                </li>
                <li>
                  <strong>Passion:</strong> We are driven by a genuine love for what we do.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[500px] order-1 md:order-2"
            >
              <Image src="/placeholder.svg?height=1000&width=800" alt="Our values" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">OUR LEADERSHIP</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Meet the visionaries who guide our company toward excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                title: "Chief Executive Officer",
                delay: 0.2,
              },
              {
                name: "Sam Taylor",
                title: "Chief Operations Officer",
                delay: 0.4,
              },
              {
                name: "Jordan Lee",
                title: "Chief Innovation Officer",
                delay: 0.6,
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: person.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-card p-8"
              >
                <div className="relative h-[300px] mb-6">
                  <Image src="/placeholder.svg?height=600&width=400" alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-muted-foreground">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

