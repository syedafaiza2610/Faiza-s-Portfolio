"use client";

import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer, ScrollProgress } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-noise">
      {/* Animated background layers */}
      <div className="bg-aurora" />
      <div className="bg-grid-pattern" />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
