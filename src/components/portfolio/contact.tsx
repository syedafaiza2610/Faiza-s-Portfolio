"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { useState } from "react";
import { toast } from "sonner";

// Simple toast import shim — use shadcn toaster if available
function showToast(message: string) {
  try {
    toast.success(message);
  } catch {
    // Fallback: console
    console.log(message);
  }
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — open mail client
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Recruiter"}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}\n${form.email}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setSending(false);
      showToast("Opening your email client…");
    }, 600);
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-emerald-500 to-amber-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "syeda-faiza",
      href: personalInfo.linkedin,
      color: "from-amber-500 to-rose-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "syedafaiza2610",
      href: personalInfo.github,
      color: "from-amber-500 to-emerald-500",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Get in Touch
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Let&apos;s build something{" "}
          <span className="text-gradient-static">amazing together</span>
        </motion.h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          I&apos;m currently open to Full Stack Developer roles and freelance projects. Whether you
          have a question, an opportunity, or just want to say hi — drop a message and I&apos;ll
          get back to you.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact cards */}
          <div className="lg:col-span-2 space-y-3">
            {contactCards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 glass rounded-xl p-4 card-lift"
              >
                <div
                  className={`inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-lg`}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-zinc-500">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium text-white truncate">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-all group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="glass rounded-xl p-4 flex items-center gap-4"
            >
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 text-emerald-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-500">Location</div>
                <div className="text-sm font-medium text-white">{personalInfo.location}</div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 border-gradient p-6 sm:p-8"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Recruiter"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Hi Faiza, we have an exciting opportunity…"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary group inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
