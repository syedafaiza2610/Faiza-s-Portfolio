"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Download } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";
import { Hero3DScene } from "./hero-3d";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D scene layer — confined to the right half on desktop so it never sits behind the intro text */}
      <div className="absolute inset-0 z-0 hero-scene-wrap">
        <Hero3DScene />
      </div>

      {/* Readability gradient overlay — darkens only the left side where the intro sits */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none hero-readability-overlay"
      />

      {/* Decorative blobs (dimmed) */}
      <div className="blob -left-24 top-24 h-72 w-72 bg-emerald-600/20" />
      <div className="blob right-0 bottom-10 h-80 w-80 bg-teal-600/15" style={{ animationDelay: "-6s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Full Stack opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m <span className="text-gradient">Faiza Parveen</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-zinc-200 font-semibold">
              I build scalable
            </span>{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gradient-static font-semibold">
              web apps
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300/90 leading-relaxed"
          >
            {personalInfo.tagline}. Skilled in{" "}
            <span className="text-emerald-300 font-medium">.NET, PHP, JavaScript</span> and the{" "}
            <span className="text-teal-300 font-medium">MERN stack</span>, with a strong interest
            in AI-powered solutions and mentoring the next generation of developers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/Faiza-Parveen-Resume.pdf"
              download="Faiza-Parveen-Resume.pdf"
              className="btn-secondary group inline-flex items-center gap-2 px-6 py-3 text-sm"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 px-5 py-3 text-sm"
            >
              <Mail className="h-4 w-4 text-amber-400" />
              Get in Touch
            </a>
          </motion.div>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-emerald-300" />
              {personalInfo.location}
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors link-underline"
            >
              <Github className="h-3.5 w-3.5 text-emerald-300" />
              github.com/syedafaiza2610
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors link-underline"
            >
              <Linkedin className="h-3.5 w-3.5 text-emerald-300" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-[1.5px] bg-gradient-to-b from-emerald-500 to-transparent">
          <motion.div
            animate={{ y: [0, 38, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-3 w-[1.5px] bg-emerald-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
