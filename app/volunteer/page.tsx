"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Volunteer Application: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nNationality: ${nationality}\nEmail: ${email}\nReason to Volunteer: ${reason}\n\nBio/Experience: ${bio}`
    );
    window.open(`mailto:truelifestories@lifeupsideview.org?subject=${subject}&body=${body}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <Link href="/" className="text-sm text-yellow-600 hover:underline mb-6 inline-block">← Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Volunteer With Us</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="nationality">Nationality</label>
            <input id="nationality" type="text" required value={nationality} onChange={e => setNationality(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your nationality" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">Email <span className="text-gray-400 font-normal">(optional)</span></label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your email (optional)" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="reason">Reason to Volunteer</label>
            <textarea id="reason" required value={reason} onChange={e => setReason(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Why do you want to volunteer?" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="bio">Bio / Relevant Experience <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell us a little about yourself or your experience (optional)" />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow transition">Send Application</button>
        </form>
      </div>
    </motion.section>
  );
} 