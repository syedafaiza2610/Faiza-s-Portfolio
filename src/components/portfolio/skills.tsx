"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Palette, Server, Database, Cloud, Wrench, Sparkles } from "lucide-react";
import { technicalSkills, softSkills } from "@/lib/portfolio-data";

const categoryMeta: Record<
  string,
  { icon: typeof Cpu; color: string; ring: string }
> = {
  Frontend: { icon: Layers, color: "text-fuchsia-300", ring: "ring-fuchsia-500/30 bg-fuchsia-500/10" },
  Backend: { icon: Server, color: "text-violet-300", ring: "ring-violet-500/30 bg-violet-500/10" },
  Database: { icon: Database, color: "text-pink-300", ring: "ring-pink-500/30 bg-pink-500/10" },
  Architecture: { icon: Cpu, color: "text-amber-300", ring: "ring-amber-500/30 bg-amber-500/10" },
  Tools: { icon: Wrench, color: "text-cyan-300", ring: "ring-cyan-500/30 bg-cyan-500/10" },
  Design: { icon: Palette, color: "text-rose-300", ring: "ring-rose-500/30 bg-rose-500/10" },
  CMS: { icon: Cloud, color: "text-emerald-300", ring: "ring-emerald-500/30 bg-emerald-500/10" },
  AI: { icon: Sparkles, color: "text-fuchsia-300", ring: "ring-fuchsia-500/30 bg-fuchsia-500/10" },
  Marketing: { icon: Palette, color: "text-amber-300", ring: "ring-amber-500/30 bg-amber-500/10" },
};

// Marquee strip duplicate list for seamless loop
const marqueeSkills = [...technicalSkills, ...technicalSkills];

export function Skills() {
  const categories = Array.from(new Set(technicalSkills.map((s) => s.category)));

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <Cpu className="h-3.5 w-3.5" /> Technical Skills
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Tools I use to{" "}
          <span className="text-gradient-static">ship products</span>
        </motion.h2>

        {/* Marquee strip */}
        <div className="relative mt-10 mb-14 py-4 overflow-hidden mask-fade">
          <div className="marquee-track gap-3">
            {marqueeSkills.map((s, i) => {
              const meta = categoryMeta[s.category] ?? categoryMeta.Tools;
              const Icon = meta.icon;
              return (
                <span
                  key={`${s.name}-${i}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  <Icon className={`h-3.5 w-3.5 ${meta.color}`} />
                  {s.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Skill bars by category */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, ci) => {
            const meta = categoryMeta[cat] ?? categoryMeta.Tools;
            const Icon = meta.icon;
            const items = technicalSkills.filter((s) => s.category === cat);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
                className="border-gradient p-5 card-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-grid h-9 w-9 place-items-center rounded-lg ring-1 ${meta.ring}`}>
                    <Icon className={`h-4 w-4 ${meta.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{cat}</h3>
                </div>
                <div className="space-y-3">
                  {items.map((s) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-zinc-300">{s.name}</span>
                        <span className="text-zinc-500">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14"
        >
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {softSkills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 px-4 py-2 text-sm font-medium text-fuchsia-100 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/10 transition-colors cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
