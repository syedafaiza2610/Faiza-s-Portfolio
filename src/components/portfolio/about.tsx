"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Code2, Users, Sparkles } from "lucide-react";
import { personalInfo, stats } from "@/lib/portfolio-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(value); // show final value immediately as fallback
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Robust IntersectionObserver works even if framer-motion's useInView fails
    let triggered = false;
    const startAnim = () => {
      if (triggered) return;
      triggered = true;
      setStarted(true);
      setCount(0);
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(eased * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Use native IntersectionObserver
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnim();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
      );
      observer.observe(el);

      // Fallback: if not triggered within 2.5s, just show final value
      const fallback = setTimeout(() => {
        if (!triggered) {
          setCount(value);
        }
      }, 2500);

      return () => {
        observer.disconnect();
        clearTimeout(fallback);
      };
    } else {
      // No IntersectionObserver support just show final value
      setCount(value);
    }
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const statIcons = [Briefcase, Code2, Users, GraduationCap];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <Sparkles /> About Me
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          A developer who{" "}
          <span className="text-gradient-static">codes, teaches</span>, and leads.
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-lg text-zinc-300/90 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              Currently serving as{" "}
              <span className="text-fuchsia-300 font-medium">Manager Academics</span> at Aptech
              North Karachi, I lead a team of faculty members while continuing to build and ship
              full-stack applications. Previously I served as{" "}
              <span className="text-violet-300 font-medium">Developer Lead & IT Instructor</span>,
              where I mentored 100+ students, led 15+ full-stack projects from concept to deployment,
              and architected curriculum across 4 batches. My journey spans the{" "}
              <span className="text-violet-300 font-medium">MERN stack</span>,{" "}
              <span className="text-violet-300 font-medium">ASP.NET / C#</span>, and{" "}
              <span className="text-violet-300 font-medium">PHP / MySQL</span> with hands-on
              experience designing REST APIs, integrating databases, and mentoring the next
              generation of developers.
            </p>
            <p className="text-base text-zinc-400 leading-relaxed">
              I care deeply about clean architecture, intuitive UX, and continuous learning. I&apos;m
              especially excited about leveraging AI tools to ship faster, smarter solutions and
              helping others do the same.
            </p>

            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                { k: "Current Role", v: "Manager Academics" },
                { k: "Focus", v: "Full Stack Web Apps" },
                { k: "Stacks", v: "MERN · .NET · PHP" },
                { k: "Open to", v: "Remote & On-site" },
              ].map((f) => (
                <div
                  key={f.k}
                  className="glass rounded-xl px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-xs uppercase tracking-wider text-zinc-500">{f.k}</span>
                  <span className="text-sm font-medium text-fuchsia-200">{f.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div
                  key={s.label}
                  className="border-gradient card-lift p-5 group"
                >
                  <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-fuchsia-500/10 ring-1 ring-fuchsia-500/30 text-fuchsia-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
