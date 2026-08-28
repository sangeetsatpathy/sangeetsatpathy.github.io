import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import SectionDivider from "../components/SectionDivider";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projectsData";
import { experiences, isCurrentRole } from "../lib/experienceData";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "/images/stanford-img.png";

const currentRoles = experiences
  .filter(e => isCurrentRole(e.period))
  .map(e => `${e.title} @ ${e.org}`);

export default function Home() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    if (currentRoles.length <= 1) return;
    const t = setInterval(() => setRoleIdx(i => (i + 1) % currentRoles.length), 3500);
    return () => clearInterval(t);
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      {/* Hero */}
      <section className="relative h-screen overflow-hidden flex items-end">
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <img
            src={HERO_IMG}
            alt="Vast ancient stone hall with golden light beams cutting through darkness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24"
          style={{ opacity: titleOpacity }}
        >
          <PageTransition>
            <h1
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.05em] uppercase leading-none"
              style={{
                backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,228,140,0.92) 55%, rgba(255,170,50,0.88) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sangeet
              <br />
              Satpathy
            </h1>
            {currentRoles.length > 0 && (
              <div className="mt-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="font-mono font-semibold text-base md:text-lg tracking-[0.15em] uppercase flex items-center gap-3"
                    style={{ color: "#ffd060" }}
                  >
                    <span style={{ opacity: 0.5, fontSize: "0.6em" }}>✦</span>
                    {currentRoles[roleIdx]}
                    <span style={{ opacity: 0.5, fontSize: "0.6em" }}>✦</span>
                  </motion.p>
                </AnimatePresence>
              </div>
            )}
            <p className="mt-6 font-mono text-xl md:text-2xl tracking-[0.2em] uppercase text-primary">
              Engineer · Researcher · Builder
            </p>
          </PageTransition>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer p-2 focus:outline-none"
          animate={{ y: [0, 8, 0] }}
          whileHover={{ scale: 1.15 }}
          transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.2 } }}
          aria-label="Scroll down to about section"
        >
          <ArrowDown
            size={36}
            style={{ color: "#ffd060", filter: "drop-shadow(0 0 10px rgba(255,208,96,0.85))" }}
          />
        </motion.button>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 md:px-16 py-24 md:py-40">
        <PageTransition>
          <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80" style={{ lineHeight: 1.6 }}>
            I'm a student at Stanford University studying Computer Science and Electrical Engineering.
            I am particularly interested in researching and building systems that combine low-level
            performance with real-world impact. Essentially — how do we make something faster? More
            efficient? More cost effective? I am also very interested in improving algorithms for
            applied AI, particularly in med-tech and robotics.
          </p>
          <p className="mt-8 font-body text-lg md:text-xl leading-relaxed text-foreground/80" style={{ lineHeight: 1.6 }}>
            Through my coursework and projects, I have developed a strong foundation in both software
            engineering and systems-level programming — be it developing a distributed laser tag system
            in bare-metal C, training a neural network to recognize digits from scratch (just straight
            Python!), or developing an e-commerce website without any frameworks. Notice a pattern?
            I like to get my hands dirty to really understand what I'm working with before I let
            somebody else do it for me.
          </p>
          <p className="mt-8 font-body text-lg md:text-xl leading-relaxed text-foreground/80" style={{ lineHeight: 1.6 }}>
            I am drawn to opportunities where I can learn quickly (without sacrificing depth!) and
            contribute to impactful systems. But more than that, I yearn to innovate. To come up with
            something that hasn't been done before. As a result, I am especially drawn to complex
            technical problems, as this is where I seek to hone my problem-solving ability.
          </p>
          <p className="mt-8 font-body text-lg md:text-xl leading-relaxed text-foreground/80" style={{ lineHeight: 1.6 }}>
            If you'd like to chat, please reach out!
          </p>
          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="mailto:sangeet1@stanford.edu"
              className="font-mono text-sm tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-500 border-b border-primary/30 hover:border-foreground/30 pb-1"
            >
              sangeet1@stanford.edu
            </a>
            <a
              href="mailto:sangeet.satpathy@gmail.com"
              className="font-mono text-sm tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-500 border-b border-primary/30 hover:border-foreground/30 pb-1"
            >
              sangeet.satpathy@gmail.com
            </a>
          </div>
        </PageTransition>
      </section>

      <SectionDivider />
      {/* Quick links */}
      
      {/* Footer */}
      <footer className="border-t border-border/30 px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground">
            Sangeet Satpathy · {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/sangeetsatpathy" target="_blank" rel="noopener noreferrer" className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">
              GitHub
            </a>
            <a href="mailto:sangeet1@stanford.edu" className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}