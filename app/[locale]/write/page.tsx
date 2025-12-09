"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WritePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Story Submission: ${title}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nStory Title: ${title}\n\nStory:\n${story}\n\nBio: ${bio}`
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
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Share Your Experience</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">Email <span className="text-gray-400 font-normal">(optional)</span></label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your email (optional)" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="title">Story Title</label>
            <input id="title" type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Give your story a title" />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="story">Your Story</label>
            <textarea id="story" required value={story} onChange={e => setStory(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Write your story here..." />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="bio">Short Bio <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea id="bio" value={bio} onChange={e => setBio(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell us a little about yourself (optional)" />
          </div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow transition">Send Story</button>
        </form>
      </div>
    </motion.section>
  );
} 