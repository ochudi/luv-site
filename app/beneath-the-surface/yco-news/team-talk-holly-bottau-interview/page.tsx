"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InterviewPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Holly Bottau portrait"
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
            TEAM TALK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Holly Bottau Interview
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
                href="/beneath-the-surface"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO NEWS
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <p className="text-sm text-muted-foreground">PUBLISHED: MARCH 26, 2025</p>
                <h1 className="text-3xl md:text-4xl font-bold mt-2">Meet Holly Bottau: Innovation Director</h1>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl font-medium leading-relaxed">
                  In this edition of Team Talk, we sit down with Holly Bottau, our Innovation Director, to discuss her
                  journey, vision, and the future of luxury experiences.
                </p>

                <div className="my-12 relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=1000&width=1500"
                    alt="Holly Bottau at work"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2>The Journey to Innovation</h2>
                <p>
                  <strong>Q: Holly, tell us about your background and how you came to join our team.</strong>
                </p>

                <p>
                  A: My journey has been anything but conventional. I started my career in marine biology, spending
                  years studying ocean ecosystems around the world. That experience gave me a deep appreciation for the
                  ocean and a desire to help others connect with it in meaningful ways.
                </p>

                <p>
                  After completing my Ph.D., I worked with several tech startups focused on sustainability and
                  experiential design. When the opportunity arose to join this company as Innovation Director, it felt
                  like the perfect intersection of my passions—the ocean, technology, and creating transformative
                  experiences.
                </p>

                <h2>Redefining Luxury</h2>
                <p>
                  <strong>Q: How do you define innovation in the context of luxury experiences?</strong>
                </p>

                <p>
                  A: I believe true innovation in luxury isn't just about adding more—more features, more extravagance.
                  It's about creating deeper connections and more meaningful experiences. Luxury today is about access
                  to the extraordinary, whether that's untouched natural environments, unique cultural exchanges, or
                  moments of genuine discovery.
                </p>

                <p>
                  Our clients have experienced conventional luxury. They're looking for something that moves them,
                  challenges them, or reveals something new about the world or themselves. That's where our innovation
                  efforts are focused.
                </p>

                <div className="my-12 relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=1000&width=1500"
                    alt="Innovation workshop"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2>Current Projects</h2>
                <p>
                  <strong>Q: Can you share some of the exciting projects your team is currently working on?</strong>
                </p>

                <p>
                  A: One of our most exciting initiatives is what we call "Invisible Technology"—integrating
                  cutting-edge tech into experiences in ways that enhance rather than distract. For example, we're
                  developing systems that can predict and respond to guests' preferences without them having to ask,
                  creating a sense of intuitive service that feels magical.
                </p>

                <p>
                  We're also exploring new frontiers in sustainable luxury. We've partnered with several marine
                  conservation organizations to create experiences that not only minimize environmental impact but
                  actively contribute to research and preservation efforts. Our guests can participate in citizen
                  science initiatives during their journey, adding purpose to pleasure.
                </p>

                <blockquote>
                  "The future of luxury is experiential, sustainable, and deeply personal. We're creating moments that
                  can't be replicated or mass-produced."
                </blockquote>

                <h2>Looking Ahead</h2>
                <p>
                  <strong>Q: What's your vision for the future of our offerings?</strong>
                </p>

                <p>
                  A: I'm particularly excited about the intersection of wellness and adventure. We're developing
                  experiences that challenge guests physically and mentally while providing deep rejuvenation. Think
                  guided wilderness expeditions with world-class wellness facilities integrated into the journey.
                </p>

                <p>
                  We're also exploring how to make extraordinary experiences more accessible through virtual and
                  augmented reality. While nothing replaces being there in person, these technologies allow us to extend
                  aspects of our experiences to more people and create anticipation for those planning to join us in the
                  future.
                </p>

                <h2>Personal Insights</h2>
                <p>
                  <strong>Q: What's been your most memorable experience with the company so far?</strong>
                </p>

                <p>
                  A: Without a doubt, it was testing our submarine experience in the South Pacific. Being hundreds of
                  feet below the surface, surrounded by an ecosystem few humans have ever seen, while simultaneously
                  evaluating how we could share this with our clients—it was a perfect fusion of my scientific
                  background and my current role.
                </p>

                <p>
                  What made it truly special was seeing the reactions of our test group. These were people who had
                  experienced luxury in all its forms, yet they were moved to tears by what they witnessed. That moment
                  confirmed for me that we're on the right path—creating experiences that go beyond luxury to something
                  truly transformative.
                </p>

                <div className="my-12 relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=1000&width=1500"
                    alt="Holly in submarine"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2>Final Thoughts</h2>
                <p>
                  <strong>Q: Any advice for those looking to innovate in their own fields?</strong>
                </p>

                <p>
                  A: Listen deeply—to your clients, your team, and to the quiet voice of your own curiosity. The best
                  innovations often come from asking "What if?" about things others take for granted. And don't be
                  afraid to bring together ideas from seemingly unrelated fields. Some of our most successful
                  experiences came from combining concepts from science, art, technology, and ancient traditions.
                </p>

                <p>
                  Also, remember that innovation isn't always about creating something entirely new. Sometimes it's
                  about rediscovering something essential that's been forgotten in our fast-paced world—like the simple
                  joy of genuine connection with nature or with each other.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex justify-between items-center"
            >
              <Button asChild variant="outline" className="rounded-none">
                <Link href="/beneath-the-surface">
                  <ArrowLeft className="mr-2 h-4 w-4" /> PREVIOUS ARTICLE
                </Link>
              </Button>
              <Button asChild className="rounded-none">
                <Link href="/beneath-the-surface">
                  NEXT ARTICLE <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">MEET OUR TEAM</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover the passionate individuals who make our company exceptional.
            </p>
            <Button asChild size="lg" className="rounded-none">
              <Link href="/about">VIEW TEAM</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

