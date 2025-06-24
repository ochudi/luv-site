"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const [muted, setMuted] = useState(true);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden group"
      >
        {/* Video Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <video
            src="/videos/about.mp4"
            autoPlay
            loop
            playsInline
            muted={muted}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </motion.div>

        {/* Mute Button */}
        <button
          onClick={() => setMuted((prev) => !prev)}
          className="absolute bottom-6 right-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-black transition-opacity opacity-0 group-hover:opacity-100"
        >
          {muted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>

        {/* Content */}
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
            Real people. Honest stories. Healing together.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                WHO WE ARE
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Life Upside View is a heartfelt initiative driven by a simple
                truth: stories heal. We are a collective of advocates, artists,
                and everyday people committed to creating space for
                vulnerability, reflection, and transformation.
              </p>
              <p className="text-lg text-muted-foreground">
                Through storytelling and community dialogue, we work to
                destigmatize mental health, spotlight human resilience, and
                offer hope — especially in places where silence often wins.
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
              <Image
                src="/images/site/mission.jpg"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                OUR MISSION
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                To amplify lived experiences and elevate conversations around
                mental health, trauma, and healing — especially within African
                communities and underrepresented voices.
              </p>
              <p className="text-lg text-muted-foreground">
                We strive to normalize emotional honesty, honor pain and joy
                equally, and build spaces where people feel seen, heard, and
                valued — just as they are.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                OUR VALUES
              </h3>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li>
                  <strong>Empathy:</strong> We listen with compassion and lead
                  with kindness.
                </li>
                <li>
                  <strong>Authenticity:</strong> Every voice matters, and every
                  story is valid.
                </li>
                <li>
                  <strong>Community:</strong> Healing doesn't happen in
                  isolation — we show up together.
                </li>
                <li>
                  <strong>Transparency:</strong> We share our truths and honor
                  others' with respect.
                </li>
                <li>
                  <strong>Resilience:</strong> We believe in the human spirit's
                  ability to rise and rebuild.
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
              <Image
                src="/images/site/values.jpg"
                alt="Our values"
                fill
                className="object-cover"
              />
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              OUR LEADERSHIP
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Meet the people behind Life Upside View — storytellers, advocates,
              and everyday changemakers committed to mental wellness and
              meaningful connection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ernest Nwachukwu",
                title: "Founder & Mental Health Advocate",
                imageUrl: "/images/team/ernest.png",
                delay: 0.2,
              },
              {
                name: "Ruqaiyah Umar Shuwa Esq.",
                title: "Legal Advisor & Mental Health Advocate",
                imageUrl: "/images/team/ruqaiyah.png",
                delay: 0.4,
              },
              {
                name: "Omkar Khadamkar",
                title: "UX Designer & Story Strategist",
                imageUrl: "/images/team/omkar.png",
                delay: 0.6,
              },
              {
                name: "Sa'adatu Ali Shuwa",
                title: "HR Advisor & Well-being Advocate",
                imageUrl: "/images/team/saadatu.png",
                delay: 0.8,
              },
              {
                name: "Chinedu Michael Dike",
                title: "Medical Advisor & Family Doctor",
                imageUrl: "/images/team/chinedu.png",
                delay: 1.0,
              },
              {
                name: "Abdulwahab Umar Shuwa",
                title: "Tech Volunteer & Mental Health Promoter",
                imageUrl: "/images/team/abdulwahab.png",
                delay: 1.2,
              },
              {
                name: "Happiness (Patience) Enogela",
                title: "Team Support & Content Contributor",
                imageUrl: "/images/team/happiness.png",
                delay: 1.4,
              },
              {
                name: "Ogieriakhi Osasogie Fredrick",
                title: "Social Media Manager",
                imageUrl: "/images/team/fredrick.png",
                delay: 1.6,
              },
              {
                name: "Chukwudi Ofoma",
                title: "Software Engineer & Tech Lead",
                imageUrl: "/images/team/chukwudi.png",
                delay: 1.8,
              },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: member.delay }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative aspect-square w-full bg-black/80 overflow-hidden group shadow-xl"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                  <span className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg text-center">
                    {member.name}
                  </span>
                  <span className="text-md md:text-lg font-medium text-white/80 drop-shadow text-center mt-2">
                    {member.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
