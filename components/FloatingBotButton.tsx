"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const categories = [
  { value: "Issue", label: "Issue" },
  { value: "Message", label: "Message" },
  { value: "Story", label: "Story" },
];

export default function FloatingBotButton() {
  const [category, setCategory] = useState(categories[0].value);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = encodeURIComponent(`[LUV Site] ${category}`);
    const body = encodeURIComponent(message);
    window.open(`mailto:truelifestories@lifeupsideview.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            aria-label="Open bot"
            className="rounded-full w-14 h-14 shadow-lg bg-gradient-to-br from-indigo-600 to-indigo-500 text-white flex items-center justify-center p-0"
          >
            <Bot size={28} />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="p-0 border-none shadow-xl animate-fade-in bg-white overflow-visible max-w-[95vw] sm:max-w-sm"
          style={{
            borderRadius: 18,
            background: "#fff",
            border: "none",
          }}
        >
          
          <div className="p-6 pb-4 sm:pb-6">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-lg font-bold text-indigo-700">
                <Bot size={20} className="text-indigo-600" />
                Talk to Us
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Share an issue, message, or story. Your message will be sent to our team via email.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={e => { e.preventDefault(); handleSend(); }}>
              <div className="mb-4 mt-2">
                <label htmlFor="category" className="block mb-1 font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  required
                  aria-label="Select category"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  placeholder="Type your message here..."
                  aria-label="Type your message here"
                />
              </div>
              <DialogFooter className="flex gap-2 mt-4">
                <Button type="submit" disabled={!message.trim()} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded shadow">
                  Send
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="ghost" className="text-gray-500 hover:text-gray-700">Dismiss</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
} 