"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { personalInfo, navItems } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-emerald-500/15">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                FP
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  Faiza <span className="text-emerald-300">Parveen</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
                  Full Stack Developer
                </span>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm text-zinc-400 leading-relaxed">
              Building scalable web applications and mentoring the next generation of developers.
              Always excited to take on new challenges.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Github, href: personalInfo.github, label: "GitHub" },
                { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg glass text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Navigate</h4>
            <ul className="space-y-2">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-zinc-400 hover:text-emerald-300 transition-colors link-underline"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-zinc-400 hover:text-emerald-300 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="text-zinc-400 hover:text-emerald-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-zinc-400">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 inline-flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart className="h-3 w-3 fill-emerald-400 text-emerald-400" />
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-emerald-300 transition-colors"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full glass group-hover:bg-emerald-500/10 transition-colors">
              <ArrowUp className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* Scroll progress bar at top */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-emerald-500 via-amber-500 to-teal-500"
      style={{ scaleX }}
    />
  );
}
