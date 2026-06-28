"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BadgeCheck,
  Trophy,
  ScrollText,
  Calendar,
} from "lucide-react";
import { education, certificates, accomplishments } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <GraduationCap className="h-3.5 w-3.5" /> Education & Credentials
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Academic foundation &{" "}
          <span className="text-gradient-static">continuous learning</span>
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Education column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
                <GraduationCap className="h-4 w-4 text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-gradient p-5 card-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-white">{e.degree}</h4>
                      <p className="mt-1 text-sm text-zinc-400">{e.institution}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 text-xs text-emerald-300">
                        <Calendar className="h-3 w-3" />
                        {e.year}
                      </div>
                      <div className="mt-1 text-xs font-medium text-teal-200">{e.score}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates & Accomplishments column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="inline-grid h-9 w-9 place-items-center rounded-lg bg-teal-500/10 ring-1 ring-teal-500/30">
                <Award className="h-4 w-4 text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Certificates</h3>
            </div>

            <div className="space-y-3">
              {certificates.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-xl p-4 flex items-start gap-3 card-lift"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-emerald-300 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {c.issuer}
                      {c.year && <span className="text-zinc-600"> · {c.year}</span>}
                    </p>
                  </div>
                  <ScrollText className="h-4 w-4 text-zinc-600" />
                </motion.div>
              ))}
            </div>

            {/* Accomplishments */}
            <div className="flex items-center gap-2 mt-8 mb-4">
              <div className="inline-grid h-9 w-9 place-items-center rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30">
                <Trophy className="h-4 w-4 text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold text-white">Accomplishments</h3>
            </div>
            <div className="space-y-3">
              {accomplishments.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-xl p-5 border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-emerald-500/5"
                >
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-amber-500/10 blur-xl" />
                  <div className="relative flex items-start gap-3">
                    <Trophy className="h-6 w-6 shrink-0 text-amber-300 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">{a.title}</h4>
                      <p className="text-xs text-amber-200/70 mt-1">{a.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
