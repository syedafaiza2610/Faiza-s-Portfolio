"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  ShoppingCart,
  BookOpen,
  Trophy,
  Syringe,
  Library,
  PawPrint,
  Gamepad2,
  Smartphone,
  Plane,
  Dumbbell,
  BedDouble,
  ArrowUpRight,
  Star,
  Code2,
} from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { useState } from "react";

const iconMap: Record<string, typeof ShoppingCart> = {
  "shopping-cart": ShoppingCart,
  "book-open": BookOpen,
  trophy: Trophy,
  syringe: Syringe,
  library: Library,
  "paw-print": PawPrint,
  gamepad: Gamepad2,
  smartphone: Smartphone,
  plane: Plane,
  dumbbell: Dumbbell,
  "bed-double": BedDouble,
};

const categoryColor: Record<string, string> = {
  "Full Stack": "from-fuchsia-500 to-violet-500",
  "Web App": "from-pink-500 to-fuchsia-500",
  Frontend: "from-amber-500 to-pink-500",
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <FolderGit2 className="h-3.5 w-3.5" /> Featured Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Projects I&apos;ve{" "}
          <span className="text-gradient-static">designed & shipped</span>
        </motion.h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          A selection of full-stack and frontend applications built across the MERN stack, ASP.NET,
          and PHP — from e-commerce platforms to library management systems.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? FolderGit2;
            const isHovered = hovered === i;
            const gradient = categoryColor[p.category] ?? "from-fuchsia-500 to-violet-500";
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative border-gradient overflow-hidden card-lift"
              >
                {/* glow on hover */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${gradient} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-20`}
                />

                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 ring-1 ring-amber-500/30">
                        <Star className="h-3 w-3 fill-amber-300" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & category */}
                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-200 transition-colors">
                      {p.title}
                    </h3>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-zinc-400 ring-1 ring-white/10">
                      {p.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-4">
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-md bg-fuchsia-500/5 px-2 py-1 text-[11px] font-medium text-fuchsia-200 ring-1 ring-fuchsia-500/20"
                      >
                        <Code2 className="h-2.5 w-2.5" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Personal Project</span>
                    <a
                      href="https://github.com/syedafaiza2610"
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1 text-xs font-semibold transition-all ${
                        isHovered
                          ? "text-fuchsia-300"
                          : "text-zinc-400"
                      }`}
                    >
                      View Code
                      <ArrowUpRight
                        className={`h-3.5 w-3.5 transition-transform ${
                          isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
                        }`}
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
