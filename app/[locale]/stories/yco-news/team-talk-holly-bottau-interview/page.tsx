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

export default function InterviewPage() {
  return (
    <article className="relative bg-background">
      <section className="relative h-[75vh] md:h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Holly Bottau portrait"
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
              Back to news
            </Link>
            <p className="eyebrow text-white/80 mb-8">— Team Talk · 26 March 2025</p>
            <h1 className="font-serif text-white display-1 mb-6">
              Meet Holly Bottau,
              <br />
              <span className="italic text-white/85">Innovation Director.</span>
            </h1>
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
              In this edition of Team Talk, we sit down with Holly Bottau, our
              Innovation Director, to discuss her journey, vision, and the
              future of luxury experiences.
            </p>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Holly Bottau at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>The Journey to Innovation</h2>
            <p>
              <strong>
                Q: Holly, tell us about your background and how you came to
                join our team.
              </strong>
            </p>
            <p>
              A: My journey has been anything but conventional. I started my
              career in marine biology, spending years studying ocean
              ecosystems around the world. That experience gave me a deep
              appreciation for the ocean and a desire to help others connect
              with it in meaningful ways.
            </p>
            <p>
              After completing my Ph.D., I worked with several tech startups
              focused on sustainability and experiential design. When the
              opportunity arose to join this company as Innovation Director,
              it felt like the perfect intersection of my passions — the
              ocean, technology, and creating transformative experiences.
            </p>

            <h2>Redefining Luxury</h2>
            <p>
              <strong>
                Q: How do you define innovation in the context of luxury
                experiences?
              </strong>
            </p>
            <p>
              A: I believe true innovation in luxury isn't just about adding
              more — more features, more extravagance. It's about creating
              deeper connections and more meaningful experiences. Luxury today
              is about access to the extraordinary, whether that's untouched
              natural environments, unique cultural exchanges, or moments of
              genuine discovery.
            </p>
            <p>
              Our clients have experienced conventional luxury. They're looking
              for something that moves them, challenges them, or reveals
              something new about the world or themselves. That's where our
              innovation efforts are focused.
            </p>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Innovation workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>Current Projects</h2>
            <p>
              <strong>
                Q: Can you share some of the exciting projects your team is
                currently working on?
              </strong>
            </p>
            <p>
              A: One of our most exciting initiatives is what we call
              "Invisible Technology" — integrating cutting-edge tech into
              experiences in ways that enhance rather than distract. For
              example, we're developing systems that can predict and respond
              to guests' preferences without them having to ask, creating a
              sense of intuitive service that feels magical.
            </p>
            <p>
              We're also exploring new frontiers in sustainable luxury. We've
              partnered with several marine conservation organizations to
              create experiences that not only minimize environmental impact
              but actively contribute to research and preservation efforts.
              Our guests can participate in citizen science initiatives during
              their journey, adding purpose to pleasure.
            </p>

            <blockquote>
              The future of luxury is experiential, sustainable, and deeply
              personal. We're creating moments that can't be replicated or
              mass-produced.
            </blockquote>

            <h2>Looking Ahead</h2>
            <p>
              <strong>Q: What's your vision for the future of our offerings?</strong>
            </p>
            <p>
              A: I'm particularly excited about the intersection of wellness
              and adventure. We're developing experiences that challenge
              guests physically and mentally while providing deep rejuvenation.
              Think guided wilderness expeditions with world-class wellness
              facilities integrated into the journey.
            </p>
            <p>
              We're also exploring how to make extraordinary experiences more
              accessible through virtual and augmented reality. While nothing
              replaces being there in person, these technologies allow us to
              extend aspects of our experiences to more people and create
              anticipation for those planning to join us in the future.
            </p>

            <h2>Personal Insights</h2>
            <p>
              <strong>
                Q: What's been your most memorable experience with the company
                so far?
              </strong>
            </p>
            <p>
              A: Without a doubt, it was testing our submarine experience in
              the South Pacific. Being hundreds of feet below the surface,
              surrounded by an ecosystem few humans have ever seen, while
              simultaneously evaluating how we could share this with our
              clients — it was a perfect fusion of my scientific background
              and my current role.
            </p>
            <p>
              What made it truly special was seeing the reactions of our test
              group. These were people who had experienced luxury in all its
              forms, yet they were moved to tears by what they witnessed. That
              moment confirmed for me that we're on the right path — creating
              experiences that go beyond luxury to something truly
              transformative.
            </p>

            <figure className="my-16 -mx-6 md:-mx-24 lg:-mx-40">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/placeholder.svg?height=1000&width=1500"
                  alt="Holly in submarine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </figure>

            <h2>Final Thoughts</h2>
            <p>
              <strong>
                Q: Any advice for those looking to innovate in their own
                fields?
              </strong>
            </p>
            <p>
              A: Listen deeply — to your clients, your team, and to the quiet
              voice of your own curiosity. The best innovations often come
              from asking "What if?" about things others take for granted. And
              don't be afraid to bring together ideas from seemingly
              unrelated fields. Some of our most successful experiences came
              from combining concepts from science, art, technology, and
              ancient traditions.
            </p>
            <p>
              Also, remember that innovation isn't always about creating
              something entirely new. Sometimes it's about rediscovering
              something essential that's been forgotten in our fast-paced
              world — like the simple joy of genuine connection with nature
              or with each other.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-36 border-t border-border bg-muted/40">
        <div className="editorial-container">
          <motion.div {...slow} className="max-w-3xl">
            <p className="eyebrow mb-8">— Team</p>
            <h2 className="font-serif display-2 tracking-tight mb-8">
              Meet our team.
            </h2>
            <p className="lede text-muted-foreground mb-10 max-w-xl">
              Discover the passionate individuals who make our work possible.
            </p>
            <Link href="/about" className="link-quiet">
              View team <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
