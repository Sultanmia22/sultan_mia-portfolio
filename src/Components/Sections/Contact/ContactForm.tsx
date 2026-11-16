"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up email service (EmailJS / API route)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      <div className="flex flex-col gap-1.5">
        <label className="text-para text-xs font-semibold tracking-widest uppercase">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-para/50 focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-para text-xs font-semibold tracking-widest uppercase">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-para/50 focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-para text-xs font-semibold tracking-widest uppercase">Your Message</label>
        <textarea
          name="message"
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-para/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm font-medium py-3.5 rounded-full hover:bg-primary/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sent" ? "Message Sent!" : "Send Message"}
        {status !== "sent" && <Send className="w-4 h-4" />}
      </button>

    </form>
  );
}
