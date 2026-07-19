"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { navItems, personalInfo } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems.map((n) => n.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    // Close menu first, then navigate after the close animation finishes
    setOpen(false);
    setTimeout(() => {
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 300);
  };

  return (
    <>
      {/* Top bar — always visible */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-2xl shadow-emerald-500/10" : ""
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="group flex items-center gap-2.5"
            >
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                FP
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-white">
                  Faiza <span className="text-emerald-300"></span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
                  Full Stack Developer
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === item.href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="/Faiza-Parveen-Resume.pdf"
                download="Faiza-Parveen-Resume.pdf"
                className="btn-primary hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Hire Me
              </a>

              {/* Mobile toggle — high z-index, explicit touch target */}
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                style={{ touchAction: "manipulation", position: "relative", zIndex: 110 }}
                className="md:hidden grid h-11 w-11 place-items-center rounded-lg glass text-white active:scale-95 transition-transform"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen overlay menu — rendered OUTSIDE the header so nothing can block it */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] md:hidden"
            style={{
              background: "rgba(4, 8, 6, 0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* Close button — top right */}
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ touchAction: "manipulation" }}
              className="absolute top-6 right-5 grid h-11 w-11 place-items-center rounded-lg glass text-white active:scale-95 transition-transform"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav links — centered, large touch targets */}
            <nav className="flex flex-col items-center justify-center min-h-screen gap-2 px-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  style={{ touchAction: "manipulation" }}
                  className={`w-full max-w-xs text-center rounded-xl px-6 py-4 text-lg font-semibold transition-colors ${
                    active === item.href
                      ? "bg-emerald-500/15 text-white ring-1 ring-emerald-500/30"
                      : "text-zinc-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navItems.length + 0.15 }}
                className="w-full max-w-xs mt-4 flex flex-col gap-2.5"
              >
                <a
                  href="/Faiza-Parveen-Resume.pdf"
                  download="Faiza-Parveen-Resume.pdf"
                  onClick={() => setOpen(false)}
                  style={{ touchAction: "manipulation" }}
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  style={{ touchAction: "manipulation" }}
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm"
                >
                  <Sparkles className="h-4 w-4 text-amber-400" /> Hire Me
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
