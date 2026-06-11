const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import SectionDivider from "../components/SectionDivider";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projectsData";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/160db65b6_generated_2f4a7381.png";

export default function Home() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0]);

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
        </motion.div>

        <motion.div
          className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24"
          style={{ opacity: titleOpacity }}
        >
          <PageTransition>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.05em] uppercase text-foreground/20 leading-none">
              Sangeet
              <br />
              Satpathy
            </h1>
            <p className="mt-6 font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-primary">
              Engineer · Researcher · Builder
            </p>
          </PageTransition>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-primary/40" />
        </motion.div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-6 md:px-16 py-24 md:py-40">
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
              className="font-mono text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-500 border-b border-primary/30 hover:border-foreground/30 pb-1"
            >
              sangeet1@stanford.edu
            </a>
            <a
              href="mailto:sangeet.satpathy@gmail.com"
              className="font-mono text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-500 border-b border-primary/30 hover:border-foreground/30 pb-1"
            >
              sangeet.satpathy@gmail.com
            </a>
          </div>
        </PageTransition>
      </section>

      <SectionDivider />

      {/* Featured Projects */}
      <section className="px-6 md:px-16 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-display text-2xl md:text-3xl tracking-[0.15em] uppercase text-foreground">
              Selected Works
            </h2>
            <Link
              to="/projects"
              className="font-mono text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-500"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Quick links */}
      <section className="max-w-4xl mx-auto px-6 md:px-16 pb-32 md:pb-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <Link to="/experience" className="group">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">01</p>
            <h3 className="font-display text-lg tracking-[0.1em] uppercase text-foreground group-hover:text-primary transition-colors duration-500">
              Experience
            </h3>
            <p className="mt-2 font-body text-sm text-foreground/50" style={{ lineHeight: 1.6 }}>
              Apple, Stanford CHARM Lab, SSI Satellites, Verizon, GRT
            </p>
          </Link>
          <Link to="/education" className="group">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">02</p>
            <h3 className="font-display text-lg tracking-[0.1em] uppercase text-foreground group-hover:text-primary transition-colors duration-500">
              Education
            </h3>
            <p className="mt-2 font-body text-sm text-foreground/50" style={{ lineHeight: 1.6 }}>
              Stanford University · BS, EE & CS
            </p>
          </Link>
          <Link to="/publications" className="group">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">03</p>
            <h3 className="font-display text-lg tracking-[0.1em] uppercase text-foreground group-hover:text-primary transition-colors duration-500">
              Publications
            </h3>
            <p className="mt-2 font-body text-sm text-foreground/50" style={{ lineHeight: 1.6 }}>
              Research papers, literature reviews, and symposium presentations
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Sangeet Satpathy · {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/sangeetsatpathy" target="_blank" rel="noopener noreferrer" className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">
              GitHub
            </a>
            <a href="mailto:sangeet1@stanford.edu" className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}