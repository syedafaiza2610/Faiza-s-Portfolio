"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="kicker mb-4"
        >
          <Briefcase className="h-3.5 w-3.5" /> Career
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight max-w-3xl"
        >
          Where I&apos;ve{" "}
          <span className="text-gradient-static">made an impact</span>
        </motion.h2>

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-teal-500/30 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                    <div className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 ring-4 ring-[#07060d]">
                      <Briefcase className="h-3.5 w-3.5 text-white" />
                      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
                    </div>
                  </div>

                  {/* Spacer for the opposite column on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card */}
                  <div
                    className={`pl-14 sm:pl-0 sm:w-1/2 ${
                      isLeft ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <div
                      className={`border-gradient p-6 card-lift ${
                        isLeft ? "sm:text-right" : "sm:text-left"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-2 text-xs text-emerald-300 mb-3 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {job.period}
                        <span className="mx-1 text-zinc-600">·</span>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 ring-1 ring-emerald-500/30 text-[10px] uppercase tracking-wider">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <div
                        className={`mt-1 flex items-center gap-1.5 text-sm text-zinc-400 ${
                          isLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <Building2 className="h-3.5 w-3.5 text-teal-300" />
                        {job.company}
                      </div>

                      <ul
                        className={`mt-4 space-y-2 ${
                          isLeft ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        {job.highlights.map((h, idx) => (
                          <li
                            key={idx}
                            className={`flex gap-2 text-sm text-zinc-300/90 leading-relaxed ${
                              isLeft ? "sm:flex-row-reverse" : ""
                            }`}
                          >
                            <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
